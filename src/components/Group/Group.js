import React, { Component } from 'react';

import GroupSchedule from '../GroupSchedule/GroupSchedule.js';
import GroupStandings from '../GroupStandings/GroupStandings.js';

import './Group.css';

class Group extends Component {

    static propTypes = {};

    static defaultProps = {};

    state = { ...this.props.initialState };

    componentWillReceiveProps = (nextProps) => { // alternatively use shouldComponentUpdate
        if (nextProps.schedule.matchHistory !== this.props.schedule.matchHistory) {
            this.handleUpdateGroupStandings(nextProps);
        }
    };

    handleGroupStageStatus = () => {
    	this.setState({
    		isGroupStageFinished: true
    	});
    };

    handleToggleScoresRandomizing = () => {
        this.setState({
            toggleScoresRandomizing: !this.state.toggleScoresRandomizing
        });
    };

    handleUpdateGroupStandings = (nextProps) => {
        const { matchHistory } = nextProps.schedule;
        let newTeamScores = {};

        Object.keys(matchHistory).forEach((match) => {
            const matchData = matchHistory[match];

            [matchData.firstTeam, matchData.secondTeam].forEach((team) => {
                const name      = `${team.name}`;

                const scored    = newTeamScores[name] ? Number(newTeamScores[name].scored) : 0;
                const lost      = newTeamScores[name] ? Number(newTeamScores[name].lost) : 0;
                const points    = newTeamScores[name] ? Number(newTeamScores[name].points) : 0;

                const newScored = Number(team.scoredGoals) + scored;
                const newLost   = Number(team.lostGoals) + lost;
                const newPoints = this.setMatchResultPoints(team.scoredGoals, team.lostGoals) + points;

                const newTeamScore = {
                    [name]: {
                        ISO: team.ISO,
                        scored: newScored,
                        lost: newLost,
                        balance: newScored - newLost,
                        points: newPoints               
                    }
                };

                newTeamScores = Object.assign(newTeamScores, newTeamScore);
            })          
        })

        this.setState({
            teams: { ...this.state.teams, ...newTeamScores }
        });
    };

    setMatchResultPoints = (scoredGoals, lostGoals) => {

        if (scoredGoals > lostGoals) {
            return 3;
        }
        if (scoredGoals == lostGoals) {
            return 1;
        }

        return 0;        
    };

    render() {
        return(
        	<div className="group">
                <div className="group__title block-title">
                    <div className="group__title-txt">Group Stage</div>
                </div>
	        	<GroupStandings {...this.state} />
	        	<GroupSchedule 
                    {...this.state} 
                    groupSchedule={this.props.groupSchedule}
                    handleToggleScoresRandomizing={this.handleToggleScoresRandomizing}
                />
        	</div>
        );
    }
}

export default Group;