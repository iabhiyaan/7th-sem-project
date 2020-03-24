import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/Header";
import Dashboard from "./views/Dashboard";
import Sidebar from "./components/Sidebar";
import Demo from "./views/Demo";
import Skeleton from "./components/Skeleton";

import { setLoading, stopLoading } from "./actions/teacherAction";
const App = ({ setLoading, teacher, stopLoading }) => {
	useEffect(() => {
		setLoading();
		setTimeout(() => {
			stopLoading();
		}, 1700);
	}, []);

	let UI;
	if (teacher.loading) {
		UI = <Skeleton />;
	} else {
		UI = (
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/about" exact component={Demo} />
			</Switch>
		);
	}
	return (
		<Fragment>
			<div className="page-wrapper">
				<Header />
				<Sidebar />
				<div className="content-wrapper">
					<div className="page-content fade-in-up">{UI}</div>
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
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	teacher: state.teacher
});

export default connect(mapStateToProps, { setLoading, stopLoading })(App);
