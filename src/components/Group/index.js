import { connect } from "react-redux";

import Group from "./Group.js";

const mapStateToProps = ({ schedule }) => {

	return {
		schedule
	};
};

const mapDispatchToProps = (dispatch) => {

	return;
};

export default connect(mapStateToProps)(Group);