import { combineReducers } from 'redux';

import globals from "./globalReducer.js";
import group from "./groupReducer.js";

export default combineReducers({
	globals,
	group
});