import React from 'react';

import Group from '../Group/Group.js';
import { groups, schedule } from "../../helpers/resultsInitialData.js";

import './Results.css';

const setInitialState = (initialData) => {
	const teams = {};

    for (let group of initialData) {
        for (let team of group) {
        	teams[team.name] = {
				ISO: team.ISO,
				scored: 0,
				lost: 0,
				balance: 0,
				points: 0
			} 
        }
    }

    return teams;
};

const initialState = [{
	isGroupStageFinished: false,
	teams: setInitialState(groups),
	matchHistory: {}
}];

const Results = () => {
    return (
		<div className="main-results">
			{initialState.map((group, i) => {
                return <Group key={i} initialState={group} groupSchedule={schedule[i]} />
            })}
		</div>   	
    );
};

export default Results;