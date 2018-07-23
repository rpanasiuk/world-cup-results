import * as types from "../constants/groupConstants.js";

export const addMatchToHistory = (match) => ({
	type: types.ADD_MATCH_TO_HISTORY,
	payload: match
});

export const toggleScoresRandomizer = () => ({
	type: types.TOGGLE_RANDOMIZER
});

export const createGroupWinner = () => ({
	type: types.CREATE_WINNER	
});