import React, { Component } from "react";

import { connect } from "react-redux";
import Table from "../../components/Teacher/listTeacher";

class listTeacherContainer extends Component {
	render() {
		return <Table teachers={this.props.allTeachers} />;
	}
}

function mapStateToProps(state) {
	return {
		allTeachers: state.teacher.teachers
	};
}

export default connect(mapStateToProps)(listTeacherContainer);
