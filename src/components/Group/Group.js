import React, { Component } from 'react';

import GroupSchedule from '../GroupSchedule/GroupSchedule.js';
import GroupStandings from '../GroupStandings/GroupStandings.js';

import './Group.css';

class Group extends Component {

    static propTypes = {};

    static defaultProps = {};

    state = { ...this.props.initialState };

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

    handleAddMatchResult = (matchHistory) => {
        this.setState({
            matchHistory: { ...this.state.matchHistory, ...matchHistory }
        }, () => {
            this.handleUpdateGroupStandings(this.state.matchHistory);
        });
    };

    handleUpdateGroupStandings = () => {
        const { matchHistory } = this.state;
        let newTeamScores = {};

        Object.keys(matchHistory).forEach((match) => {
            const matchData = matchHistory[match];

            [matchData.firstTeam, matchData.secondTeam].forEach((team) => {
                console.log(team);
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
            console.log('debug')
            return 1;
        }

        return 0;        
    };

    render() {
        return(
        	<div className="group">
	        	<GroupStandings {...this.state} />
	        	<GroupSchedule 
                    {...this.state} 
                    groupSchedule={this.props.groupSchedule} 
                    handleAddMatchResult={this.handleAddMatchResult}
                    handleToggleScoresRandomizing={this.handleToggleScoresRandomizing}
                />
        	</div>
        );
    }
}

export default Group;