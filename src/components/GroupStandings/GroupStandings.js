import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import GroupStandingsRow from '../GroupStandingsRow/GroupStandingsRow.js';

import './GroupStandings.css';

const GroupStandings = ({ isGroupStageFinished, matchHistory, teams }) => {

	const sortStandings = () => {
		const teamsArray = Object.keys(teams).map(country => teams[country]);
        const sortedTeamsArray = _.reverse(_.sortBy(teamsArray, ['points', 'balance', 'scored']));

        return additionalCheck(sortedTeamsArray);
	};

    const additionalCheck = (teamsArray) => {
        // check if there are teams to order by H2H scores

        const matchesToCheck = [];
        let firstTeamISO, secondTeamISO;

        for (let i=0; i<teamsArray.length-1; i++) {
            for (let j=i+1; j<teamsArray.length; j++) {

                const firstCompareTeam = Object.values(teamsArray[i]);
                const secondCompareTeam = Object.values(teamsArray[j]);
                const scoresComparison = _.isEqual(firstCompareTeam.slice(1), secondCompareTeam.slice(1));

                if (scoresComparison) {
                    firstTeamISO = teamsArray[i].ISO;
                    secondTeamISO = teamsArray[j].ISO;
                    matchesToCheck.push([firstCompareTeam, secondCompareTeam])
                }
            }
        }

        if (matchesToCheck.length > 1) {
            return teamsArray;

        } else if (matchesToCheck.length == 1) {
            return getMatchHistory({
                teamsArray: teamsArray,
                firstTeamISO: firstTeamISO,
                secondTeamISO: secondTeamISO                
            })

        } else {
            return teamsArray;
        }
    };

    const getMatchHistory = ({ ...props }) => {
        // get match from history to check H2H score

        if (matchHistory.hasOwnProperty(props.firstTeamISO + props.secondTeamISO)) {
            return checkMatchWinner(props.teamsArray, props.firstTeamISO, props.secondTeamISO);

        } else if (matchHistory.hasOwnProperty(props.secondTeamISO + props.firstTeamISO)) {
            return checkMatchWinner(props.teamsArray, props.secondTeamISO, props.firstTeamISO);

        } else {
            return props.teamsArray;
        }
    };

    const checkMatchWinner = (teamsArray, firstISO, secondISO) => {
        // check if teams are in proper order in table related to H2H score

        const { scoredGoals, lostGoals } = matchHistory[firstISO + secondISO].firstTeam;
        let indexFirstISO, indexSecondISO;

        teamsArray.forEach((team, i) => {
            if (team.ISO == firstISO) {
                indexFirstISO = i;
            } else if (team.ISO == secondISO) {
                indexSecondISO = i;
            }
        })

        if (scoredGoals > lostGoals && indexFirstISO > indexSecondISO) {
            return swapTeams(teamsArray, indexFirstISO, indexSecondISO);

        } else if (scoredGoals < lostGoals && indexFirstISO < indexSecondISO) {
            return swapTeams(teamsArray, indexFirstISO, indexSecondISO);

        } else {            
            return teamsArray;
        }           
    };

    const swapTeams = (array, firstIndex, secondIndex) => {
        // swap teams in table
        
        const temp = array[firstIndex];
        array[firstIndex] = array[secondIndex]
        array[secondIndex] = temp;
        
        return array;
    };

	const markGroupWinner = (index) => {
		if (isGroupStageFinished && index === 0) {
			return true;
		}

		return false;
	};

    return (
    	<div className="group__standings standings">
            <table className="standings__table table">
                <tbody className="table__body">
                    <tr className="table__header">
                        <th className="table__header-cell">Team</th>
                        <th className="table__header-cell">GS</th>
                        <th className="table__header-cell">GL</th>
                        <th className="table__header-cell">GB</th>
                        <th className="table__header-cell">Points</th>
                    </tr>
            		{sortStandings().map((row, i) => {
            			return (
            				<GroupStandingsRow 
            					key={i} team={row} isWinner={markGroupWinner(i)}
            				/>
            			);
            		})}
                </tbody>
            </table>
    	</div>
    );
};

GroupStandings.defaultProps = {};

GroupStandings.propTypes = {};

export default GroupStandings;