import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import GroupStandingsRow from '../GroupStandingsRow/GroupStandingsRow.js';

import './GroupStandings.css';

const GroupStandings = ({ isGroupStageFinished, matchHistory, teams }) => {

	const sortStandings = () => {
		const teamsArray = Object.keys(teams).map(country => teams[country]);

		return _.reverse(_.sortBy(teamsArray, ['points', 'balance', 'scored']));
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
                <tbody className="standings__body">
                    <tr className="standings__header">
                        <th className="standings__header-cell">Team</th>
                        <th className="standings__header-cell">GS</th>
                        <th className="standings__header-cell">GL</th>
                        <th className="standings__header-cell">GB</th>
                        <th className="standings__header-cell">Points</th>
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