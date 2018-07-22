import React from 'react';
import PropTypes from 'prop-types';
import './GroupStandingsRow.css';

const GroupStandingsRow = ({ isWinner, team }) => {

    return (
    	<tr className={"table__row" + `${isWinner ? " isWinner" : ""}`}>
    		<td className="table__row-cell table__row-cell--team">{team.ISO}</td>
    		<td className="table__row-cell table__row-cell--gs">{team.scored}</td>
    		<td className="table__row-cell table__row-cell--gl">{team.lost}</td>
    		<td className="table__row-cell table__row-cell--gb">{team.balance}</td>
    		<td className="table__row-cell table__row-cell--points">{team.points}</td>
    	</tr>
    );
};

GroupStandingsRow.defaultProps = {};

GroupStandingsRow.propTypes = {};

export default GroupStandingsRow;