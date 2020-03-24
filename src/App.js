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
			<Fragment>
				<div className="page-wrapper">
					<Header />
					<Sidebar />
					<div class="content-wrapper">
						<div class="page-content fade-in-up">
							<Switch>
								<Route path="/" exact component={Dashboard} />
								<Route path="/about" exact component={Demo} />
							</Switch>
						</div>
						<footer class="page-footer">
							<div class="font-13">
								2020 ©
								<b>HajiriSYSTEM</b> - All rights reserved.
							</div>

							<div class="to-top">
								<i class="fa fa-angle-double-up" />
							</div>
						</footer>
					</div>
					<div class="sidenav-backdrop backdrop" />
				</div>
			</Fragment>
		);
	}
	return UI;
};

const mapStateToProps = (state) => ({
	teacher: state.teacher
});

export default connect(mapStateToProps, { setLoading, stopLoading })(App);
