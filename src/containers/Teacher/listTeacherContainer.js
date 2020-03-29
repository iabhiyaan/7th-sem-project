import React, { Component } from "react";

import { connect } from "react-redux";
class listTeacherContainer extends Component {
	render() {
		return <div>List of all teachers</div>;
	}
}

export default connect()(listTeacherContainer);
