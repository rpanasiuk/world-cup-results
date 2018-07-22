import React from 'react';
import PropTypes from 'prop-types';

import GroupScheduleMatch from '../GroupScheduleMatch';
import GroupScheduleButton from '../GroupScheduleButton/GroupScheduleButton.js';

import './GroupSchedule.css';

const GroupSchedule = ({ groupSchedule, handleAddMatchResult, ...props }) => {

	const toggleScoresRandomizing = () => {
		props.handleToggleScoresRandomizing();
	};

    return (
		<div className="group__schedule schedule">
			<div className="schedule__title block-title">
				<div className="schedule__title-txt">Scores</div>
			</div>		
			<GroupScheduleButton toggleScoresRandomizing={toggleScoresRandomizing} />
			<ul className="schedule__match-list">
				{groupSchedule.map((match, i) => {
					return (
						<GroupScheduleMatch 
							key={i}
							matchData={match}
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