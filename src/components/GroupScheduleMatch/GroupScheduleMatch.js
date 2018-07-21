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
		isPopupVisible: false
	};

	componentWillReceiveProps = (nextProps) => {
		if (nextProps.toggleScoresRandomizing !== this.props.toggleScoresRandomizing) {
			this.handleRandomMatchScore();
		}
	}

	// shouldComponentUpdate = () => {

	// }

	handleMatchScore = (firstTeamGoals, secondTeamGoals) => {
		this.setState({
			firstTeamGoalsNum: firstTeamGoals,
			secondTeamGoalsNum: secondTeamGoals
		}, () => {
			const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;

			this.createMatchHistoryObject(firstTeamGoalsNum, secondTeamGoalsNum);
		});
	};

	handlePopupVisibility = () => {
		this.setState({
			isPopupVisible: !this.state.isPopupVisible
		});
	};

	handleRandomMatchScore = () => {
		this.setState({
			firstTeamGoalsNum: Math.floor(Math.random()*11),
			secondTeamGoalsNum: Math.floor(Math.random()*11)
		}, () => {
			const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;

			this.createMatchHistoryObject(firstTeamGoalsNum, secondTeamGoalsNum);
		})
	}

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
		this.props.triggerAddMatchResult(matchHistoryObject);
	}

    render() {
    	const { firstTeam, secondTeam, date } = this.props.matchData;
    	const dateFormatted = new DateConverter(date);

    	const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;    	

	    return (
	    	<div className="schedule__match-item">
	    		{
	    			this.state.isPopupVisible 
	    			? <GroupScheduleScore 
	    				handleMatchScore={this.handleMatchScore} 
	    				matchData={this.props.matchData}
	    				handlePopupVisibility={this.handlePopupVisibility}
	    				// dateFormatted={dateFormatted} // edit DateConverter class
	    			/> 
	    			: null
	    		}
	    		<div className="schedule__match-title">
	    			{dateFormatted.getDayName()}
	    			{dateFormatted.getOrdinalDayNumber()}
	    			{dateFormatted.getMonthName()}
	    		</div>
	    		<div className="schedule__match-inner">
	    			<div className="schedule__match-team schedule__match-team--first">
	    				{firstTeam.name}
	    			</div>

	    			<div className="schedule__match-results" onClick={this.handlePopupVisibility}>
	    				<div className="schedule__match-score schedule__match-score--first">
	    					{firstTeamGoalsNum ? firstTeamGoalsNum : "-"}
	    				</div>
	    				<div className="schedule__match-score schedule__match-score--second">
	    					{secondTeamGoalsNum ? secondTeamGoalsNum : "-"}
	    				</div>
	    			</div>

	    			<div className="schedule__match-team schedule__match-team--second">
	    				{secondTeam.name}
	    			</div>
	    		</div>	    		
	    	</div>
	    );
    }
}

export default GroupScheduleMatch;