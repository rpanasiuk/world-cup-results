import * as types from "../constants/groupConstants.js";

const defaultState = {
	matchHistory: {},
    toggleScoresRandomizer: false,
    isGroupStageFinished: false
};

const groupConstants = (state = defaultState, action) => {
    switch (action.type) {                        

        case types.ADD_MATCH_TO_HISTORY:
            return {
            	...state,
            	matchHistory: { ...state.matchHistory, ...action.payload }
            };

        case types.TOGGLE_RANDOMIZER:
            return {
                ...state,
                toggleScoresRandomizer: !state.toggleScoresRandomizer
            };

        case types.CREATE_WINNER:
            if (Object.keys(state.matchHistory).length == 6) {
                return {
                    ...state,
                    isGroupStageFinished: true
                };
            } else {
                return {
                    ...state,
                    isGroupStageFinished: false
                };
            }
                    

        default:
            return state;
    }
};

export default groupConstants;