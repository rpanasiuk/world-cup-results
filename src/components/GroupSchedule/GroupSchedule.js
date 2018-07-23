import React from 'react';
import PropTypes from 'prop-types';

import GroupScheduleMatch from '../../containers/GroupScheduleMatch';
import GroupScheduleButton from '../GroupScheduleButton/GroupScheduleButton.js';

import './GroupSchedule.css';

const GroupSchedule = ({ groupSchedule, ...props }) => {

    return (
		<div className="group__schedule schedule">
			<div className="schedule__title block-title">
				<div className="schedule__title-txt">Scores</div>
			</div>		
			<GroupScheduleButton scoresRandomizing={props.scoresRandomizing} />
			<ul className="schedule__match-list">
				{groupSchedule.map((match, i) => {
					return (
						<GroupScheduleMatch 
							key={i}
							matchData={match}							
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