import * as types from "../constants/scheduleConstants.js";

const defaultState = {
	isPopupVisible: false,
	matchHistory: {}
};

const scheduleReducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.TOGGLE_POPUP_VISIBILITY:
            return {
            	...state,
            	isPopupVisible: !state.isPopupVisible
            };

        case types.OPEN_POPUP:
            return {
                ...state,
                isPopupVisible: true
            };

        case types.CLOSE_POPUP:
            return {
                ...state,
                isPopupVisible: false
            };                        

        case types.ADD_MATCH_TO_HISTORY:
            return {
            	...state,
            	matchHistory: { ...state.matchHistory, ...action.payload }
            };            

        default:
            return state;
    }
};

export default scheduleReducer;