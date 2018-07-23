import { connect } from "react-redux";

import Group from "./Group.js";

import { toggleScoresRandomizer  } from "../../actions/groupActions.js";

const mapStateToProps = ({ group }) => {
	return {
		group
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleScoresRandomizer: () => dispatch(toggleScoresRandomizer())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);