import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import createTeacher from "./containers/Teacher/createTeacher";
import Layout from "./hoc/Layout";
import "./App.css";

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/teacher/create" exact component={createTeacher} />
				<Route path="/" exact component={Dashboard} />
			</Switch>
		</Layout>
	);
};

export default App;
