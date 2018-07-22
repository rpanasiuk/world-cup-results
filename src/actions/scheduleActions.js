import * as types from "../constants/scheduleConstants.js";

// export const togglePopupVisibility = () => ({
// 	type: types.TOGGLE_POPUP_VISIBILITY
// });

export const addMatchToHistory = (match) => ({
	type: types.ADD_MATCH_TO_HISTORY,
	payload: match
});

export const openPopup = () => ({
	type: types.OPEN_POPUP
});

export const closePopup = () => ({
	type: types.CLOSE_POPUP
});

export const toggleScoresRandomizer = () => ({
	type: types.TOGGLE_RANDOMIZER
});