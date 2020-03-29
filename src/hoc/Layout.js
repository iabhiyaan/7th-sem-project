import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "../Navigation/Header";
import Sidebar from "../Navigation/Sidebar";
import Skeleton from "../components/Skeleton/Skeleton";

import { setLoading, stopLoading } from "../actions/teacherAction";

const Layout = ({
	// eslint-disable-next-line
	setLoading,
	teacher,
	stopLoading,
	children
}) => {
	useEffect(() => {
		setTimeout(() => {
			stopLoading();
		}, 2700);
	}, []);
	return (
		<div className="page-wrapper">
			<Header />
			<Sidebar />
			<div className="content-wrapper">
				<div className="page-content fade-in-up">{teacher.loading ? <Skeleton num="4" /> : children}</div>
				<footer className="page-footer">
					<div className="font-13">
						2020 ©
						<b>HajiriSYSTEM</b> - All rights reserved.
					</div>

					<div className="to-top">
						<i className="fa fa-angle-double-up" />
					</div>
				</footer>
			</div>
			<div className="sidenav-backdrop backdrop" />
		</div>
	);
};
const mapStateToProps = (state) => ({
	teacher: state.teacher
});
export default connect(mapStateToProps, { setLoading, stopLoading })(Layout);
