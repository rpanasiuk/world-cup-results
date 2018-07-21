import React from 'react';
import PropTypes from 'prop-types';

import GroupScheduleMatch from '../GroupScheduleMatch/GroupScheduleMatch.js';
import GroupScheduleButton from '../GroupScheduleButton/GroupScheduleButton.js';

import './GroupSchedule.css';

const GroupSchedule = ({ groupSchedule, handleAddMatchResult, ...props }) => {
	let firstRandomNum, secondRandomNum;

	const addMatchResult = (matchHistory) => {
		handleAddMatchResult(matchHistory);
	};

	const toggleScoresRandomizing = () => {
		props.handleToggleScoresRandomizing();
	};

    return (
		<div className="group__schedule schedule">
			<GroupScheduleButton toggleScoresRandomizing={toggleScoresRandomizing} />
			<ul className="schedule__match-list">
				{groupSchedule.map((match, i) => {
					return (
						<GroupScheduleMatch 
							key={i}
							matchData={match}
							triggerAddMatchResult={addMatchResult}
							toggleScoresRandomizing={props.toggleScoresRandomizing}
						/>
					);
				})}
			</ul>
		</div>
    );
};

GroupSchedule.defaultProps = {};

GroupSchedule.propTypes = {};

export default GroupSchedule;