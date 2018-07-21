import React from 'react';
import PropTypes from 'prop-types';

import './GroupScheduleButton.css';

const GroupScheduleButton = ({ toggleScoresRandomizing }) => {

	const triggerToggleScoresRandomizing = () => {
		toggleScoresRandomizing();
	};

    return (
		<div className="schedule__button">
			<button type="button" className="btn btn--randomize" onClick={triggerToggleScoresRandomizing}>randomize</button>
		</div>
    );
};

GroupScheduleButton.defaultProps = {};

GroupScheduleButton.propTypes = {};

export default GroupScheduleButton;