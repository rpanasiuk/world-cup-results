import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DateConverter from "../../helpers/dateConverter.js";
import GroupScheduleScore from "../GroupScheduleScore/GroupScheduleScore.js";

import './GroupScheduleMatch.css';

class GroupScheduleMatch extends Component {

	static propTypes = {};

	static defaultProps = {};

	state = {
		firstTeamGoalsNum: null,
		secondTeamGoalsNum: null,
		isActive: false
	};

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.toggleScoresRandomizing !== this.props.toggleScoresRandomizing) {
			this.handleRandomMatchScore();
		}

		if (this.state.isActive && !nextProps.isPopupVisible) {
			this.handleIsActiveStatus();
		}
	};
	// shouldComponentUpdate = () => {

	// }

	handleIsActiveStatus = () => {
		this.setState({
			isActive: !this.state.isActive
		})		
	};

	handleMatchScore = (firstTeamGoals, secondTeamGoals) => {
		this.setState({
			firstTeamGoalsNum: firstTeamGoals,
			secondTeamGoalsNum: secondTeamGoals
		}, () => {
			const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;

			this.createMatchHistoryObject(firstTeamGoalsNum, secondTeamGoalsNum);
		});
	};

	handlePopupClosing = () => {
		this.props.closePopup();
		this.handleIsActiveStatus();
	};

	handlePopupOpening = () => {
		this.props.openPopup();
		this.handleIsActiveStatus();
	};

	handleRandomMatchScore = () => {
		this.setState({
			firstTeamGoalsNum: Math.floor(Math.random()*11),
			secondTeamGoalsNum: Math.floor(Math.random()*11)
		}, () => {
			const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;

			this.createMatchHistoryObject(firstTeamGoalsNum, secondTeamGoalsNum);
		})
	};

	createMatchHistoryObject = (firstTeamGoals, secondTeamGoals) => {
		const { firstTeam, secondTeam, date } = this.props.matchData;
		const matchHistoryObject = {
			[`${firstTeam.name + secondTeam.name + date}`]: {
				date: date,
				firstTeam: {
					name: firstTeam.name,
					ISO: firstTeam.ISO,
					scoredGoals: firstTeamGoals,
					lostGoals: secondTeamGoals
				},
				secondTeam: {
					name: secondTeam.name,
					ISO: secondTeam.ISO,
					scoredGoals: secondTeamGoals,
					lostGoals: firstTeamGoals        				
				}
			}
		};
		
		this.props.addMatchToHistory(matchHistoryObject);
	}

    render() {
    	const { firstTeam, secondTeam, date } = this.props.matchData;
    	const dateFormatted = new DateConverter(date);

    	const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;    	

	    return (
	    	<li className="schedule__match-item">
	    		{
	    			(this.props.isPopupVisible && this.state.isActive) 
	    			? <GroupScheduleScore 
	    				handleMatchScore={this.handleMatchScore} 
	    				matchData={this.props.matchData}
	    				handlePopupClosing={this.handlePopupClosing}
	    				handlePopupOpening={this.handlePopupOpening}
	    				// dateFormatted={dateFormatted} // edit DateConverter class
	    			/> 
	    			: null
	    		}
	    		<div className="schedule__match-title">
	    			<span>{dateFormatted.getDayName()}</span>
	    			<span>{dateFormatted.getOrdinalDayNumber()}</span>
	    			<span>{dateFormatted.getMonthName()}</span>
	    		</div>
	    		<div className="schedule__match-inner">
	    			<div className="schedule__match-team schedule__match-team--first">
	    				<span>{firstTeam.name}</span>
	    			</div>

	    			<div className="schedule__match-results" onClick={this.handlePopupOpening}>
	    				<div className="schedule__match-score schedule__match-score--first">
	    					<span>{firstTeamGoalsNum !== null ? firstTeamGoalsNum : "-"}</span>
	    				</div>
	    				<div className="schedule__match-score schedule__match-score--second">
	    					<span>{secondTeamGoalsNum !== null ? secondTeamGoalsNum : "-"}</span>
	    				</div>
	    			</div>

	    			<div className="schedule__match-team schedule__match-team--second">
	    				<span>{secondTeam.name}</span>
	    			</div>
	    		</div>	    		
	    	</li>
	    );
    }
}

export default GroupScheduleMatch;