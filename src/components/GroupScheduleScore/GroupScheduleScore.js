import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateConverter from "../../helpers/dateConverter.js";

import './GroupScheduleScore.css';

const GroupScheduleScore = ({ matchData, ...props }) => {
	const { firstTeam, secondTeam } = matchData;
	let firstTeamInput, secondTeamInput = null;

	const triggerSubmit = (e) => {
		e.preventDefault();

		props.handleMatchScore(firstTeamInput.value, secondTeamInput.value);
		props.handlePopupVisibility();
	};

	const triggerClose = () => {
		props.handlePopupVisibility();
	};

    return (
    	<div className="schedule__popup popup">
    		<div className="popup__title">

    		</div>
			<form className="popup__form form" id="matchScoreForm" onSubmit={triggerSubmit}>

				<div className="form__row">
					<label htmlFor="firstTeamGoals">First Team Goals</label>
					<div className="form__row-title">{firstTeam}</div>
					<input
						className="form__control"
						type="text"
						id={firstTeam}
						name="firstTeamGoals"
						ref={goals => firstTeamInput = goals}
						required
						pattern="[0-9]+"
						placeholder="Number"
					/>
				</div>		

				<div className="form__row">
					<label htmlFor="secondTeamGoals">Second Team Goals</label>
					<div className="form__row-title">{secondTeam}</div>
					<input
						className="form__control"
						type="text"
						id={secondTeam}
						name="secondTeamGoals"
						ref={goals => secondTeamInput = goals}
						required
						pattern="[0-9]+"
						placeholder="Number"
					/>
				</div>

				<div className="form__row form__row--last form__button">
                    <button type="submit" className="btn btn--form">Send</button>
                    <button type="button" className="btn btn--form" onClick={triggerClose}>CANCEL</button>
                </div>						

			</form>
    	</div>
    );
}

export default GroupScheduleScore;

