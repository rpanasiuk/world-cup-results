import { connect } from "react-redux";

import Group from "./Group.js";

import { toggleScoresRandomizer  } from "../../actions/scheduleActions.js";

const mapStateToProps = ({ schedule }) => {
	return {
		schedule
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleScoresRandomizer: () => dispatch(toggleScoresRandomizer())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);