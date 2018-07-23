import { connect } from "react-redux";

import GroupScheduleMatch from "./GroupScheduleMatch.js";

import { addMatchToHistory, createGroupWinner  } from "../../actions/groupActions.js";
import { openPopup, closePopup  } from "../../actions/globalActions.js";

const mapStateToProps = ({ group, globals }) => {

	return {
		isPopupVisible: globals.isPopupVisible,
		toggleScoresRandomizer: group.toggleScoresRandomizer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openPopup: () => dispatch(openPopup()),
		closePopup: () => dispatch(closePopup()),
		addMatchToHistory: (match) => dispatch(addMatchToHistory(match)),
		createGroupWinner: () => dispatch(createGroupWinner()) 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupScheduleMatch);