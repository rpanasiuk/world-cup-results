import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import GroupStandingsRow from '../GroupStandingsRow/GroupStandingsRow.js';

import './GroupStandings.css';

const GroupStandings = ({ isGroupStageFinished, matchHistory, teams }) => {

	const sortStandings = () => {
		const teamsArray = Object.keys(teams).map(country => teams[country]);
        additionalCheck(teamsArray);
		return _.reverse(_.sortBy(teamsArray, ['points', 'balance', 'scored']));
	};

    const additionalCheck = (teamsArray) => {
        console.log(teamsArray)
        for (let i=0; i<teamsArray.length-1; i++) {
            for (let j=i+1; j<teamsArray.length; j++) {
                console.log(Object.values(teamsArray[j]))
            }
        }
    }

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