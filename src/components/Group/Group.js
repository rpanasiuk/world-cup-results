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

    handleAddMatchResult = (matchHistory) => {
        this.setState({
            matchHistory: { ...this.state.matchHistory, ...matchHistory }
        });        
    };

    render() {
        return(
        	<div className="group">
	        	<GroupStandings {...this.state} />
	        	<GroupSchedule {...this.state} groupSchedule={this.props.groupSchedule} handleAddMatchResult={this.handleAddMatchResult} />
        	</div>
        );
    }
}

export default Group;