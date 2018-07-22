import React from 'react';
import PropTypes from 'prop-types';

import './GroupScheduleButton.css';

const GroupScheduleButton = ({ scoresRandomizing }) => {

	const triggerScoresRandomizer = () => {
		scoresRandomizing();
	};

    return (
		<div className="schedule__button">
			<button type="button" className="btn btn--randomize" onClick={triggerScoresRandomizer}>randomize</button>
		</div>
    );
};

GroupScheduleButton.defaultProps = {};

GroupScheduleButton.propTypes = {};

export default GroupScheduleButton;