import { connect } from "react-redux";

import GroupScheduleMatch from "./GroupScheduleMatch.js";

import { addMatchToHistory, openPopup, closePopup  } from "../../actions/scheduleActions.js";

const mapStateToProps = ({ schedule }) => {

	return {
		isPopupVisible: schedule.isPopupVisible,
		toggleScoresRandomizer: schedule.toggleScoresRandomizer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// togglePopupVisibility: () => dispatch(togglePopupVisibility()),
		openPopup: () => dispatch(openPopup()),
		closePopup: () => dispatch(closePopup()),
		addMatchToHistory: (match) => dispatch(addMatchToHistory(match))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupScheduleMatch);