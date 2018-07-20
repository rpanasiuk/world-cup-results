import React from 'react';
import PropTypes from 'prop-types';

import GroupScheduleMatch from '../GroupScheduleMatch/GroupScheduleMatch.js';

import './GroupSchedule.css';

const GroupSchedule = ({ groupSchedule, handleAddMatchResult, ...props }) => {

	const addMatchResult = (matchHistory) => {
		handleAddMatchResult(matchHistory);
	};

    return (
		<div className="group__schedule schedule">
			{groupSchedule.map((match, i) => {
				return (
					<GroupScheduleMatch 
						key={i}
						matchData={match}
						triggerAddMatchResult={addMatchResult}
					/>
				);
			})}
		</div>
    );
};

GroupSchedule.defaultProps = {};

GroupSchedule.propTypes = {};

export default GroupSchedule;