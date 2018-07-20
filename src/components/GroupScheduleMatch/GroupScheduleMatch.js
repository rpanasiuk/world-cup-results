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

	handleMatchScore = (firstTeamGoals, secondTeamGoals) => {
		this.setState({
			firstTeamGoalsNum: firstTeamGoals,
			secondTeamGoalsNum: secondTeamGoals
		}, () => {
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
		});
	};

	handlePopupVisibility = () => {
		this.setState({
			isPopupVisible: !this.state.isPopupVisible
		});
	};

	triggerAddMatchResult = () => {
		this.props.addMatchResult()
	}

	// shouldComponentUpdate = () => {

	// }

    render() {
    	const { firstTeam, secondTeam, date } = this.props.matchData;
    	const dateFormatted = new DateConverter(date);

    	const { firstTeamGoalsNum, secondTeamGoalsNum } = this.state;    	

	    return (
	    	<div className="schedule__match">
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
	    		<div className="schedule__title">
	    			{dateFormatted.getDayName()}
	    			{dateFormatted.getOrdinalDayNumber()}
	    			{dateFormatted.getMonthName()}
	    		</div>
	    		<div className="schedule__inner">
	    			<div className="schedule__team schedule__team--first">
	    				{firstTeam.name}
	    			</div>

	    			<div className="schedule__score" onClick={this.handlePopupVisibility}>
	    				<div className="schedule__score-first">
	    					{firstTeamGoalsNum ? firstTeamGoalsNum : "-"}
	    				</div>
	    				<div className="schedule__score-second">
	    					{secondTeamGoalsNum ? secondTeamGoalsNum : "-"}
	    				</div>
	    			</div>

	    			<div className="schedule__team schedule__team--second">
	    				{secondTeam.name}
	    			</div>
	    		</div>	    		
	    	</div>
	    );
    }
}

export default GroupScheduleMatch;