import React, { Component } from 'react';

import GroupSchedule from '../GroupSchedule/GroupSchedule.js';
import GroupStandings from '../GroupStandings/GroupStandings.js';

import './Group.css';

class Group extends Component {

    state = { ...this.props.initialState };

    // static defaultProps = {}

    handleGroupStageStatus = () => {
    	this.setState({
    		isGroupStageFinished: true
    	});
    };

    render() {
        return(
        	<div className="group">
	        	<GroupStandings {...this.state} />
	        	<GroupSchedule {...this.state} />
        	</div>
        );
    }
}

// Group.propTypes = {
// 	initialState
// };

export default Group;