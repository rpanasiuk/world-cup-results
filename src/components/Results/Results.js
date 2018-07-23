import React from 'react';

import Group from '../../containers/Group';
import { group, schedule } from "../../helpers/resultsInitialData.js";

import './Results.css';

const setInitialState = (initialData) => {
	const teams = {};

    for (let team of initialData) {

    	teams[team.name] = {
			ISO: team.ISO,
			scored: 0,
			lost: 0,
			balance: 0,
			points: 0
		}
	}

    return teams;
};

const initialState = {
	teams: setInitialState(group)
};

const Results = () => {
    return (
		<div className="main-results">
			<Group initialState={initialState} groupSchedule={schedule} />
		</div>   	
    );
};

export default Results;