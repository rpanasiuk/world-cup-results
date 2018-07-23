import * as types from "../constants/globalConstants.js";

const defaultState = {
	isPopupVisible: false
};

const globalConstants = (state = defaultState, action) => {
    switch (action.type) {

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

        default:
            return state;
    }
};

export default globalConstants;