import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from "react-onclickoutside";

import { store } from "../../index.js";
import { closePopup } from "../../actions/globalActions.js";

import './GroupScheduleScore.css';

const GroupScheduleScore = ({ matchData, ...props }) => {
	const { firstTeam, secondTeam } = matchData;
	let firstTeamInput, secondTeamInput = null;

	const triggerSubmit = (e) => {
		e.preventDefault();

		props.handleMatchScore(firstTeamInput.value, secondTeamInput.value);
		props.handlePopupClosing();
	};

	const triggerClose = () => {
		props.handlePopupClosing();
	};	

    return (
    	<div className="schedule__popup popup">
    		<div className="popup__title block-title">
    			<div className="popup__title-txt">Score</div>
    		</div>
			<form className="popup__form form" id="matchScoreForm" onSubmit={triggerSubmit}>

				<div className="form__row">
					<label htmlFor="firstTeamGoals">First Team Goals</label>
					<div className="form__row-title">{firstTeam.name}</div>
					<input
						className="form__control"
						type="text"
						id={firstTeam.name}
						name="firstTeamGoals"
						ref={goals => firstTeamInput = goals}
						required
						pattern="[0-9]+"
						placeholder="Number"
					/>
				</div>		

				<div className="form__row">
					<label htmlFor="secondTeamGoals">Second Team Goals</label>
					<div className="form__row-title">{secondTeam.name}</div>
					<input
						className="form__control"
						type="text"
						id={secondTeam.name}
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

export default onClickOutside(GroupScheduleScore, {
	handleClickOutside: (e) => {
		return () => {
			store.dispatch(closePopup());
		};
	}
});