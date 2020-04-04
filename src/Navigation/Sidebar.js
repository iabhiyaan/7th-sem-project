import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
	return (
		<nav className="page-sidebar" id="sidebar">
			<div id="sidebar-collapse">
				<div className="admin-block d-flex">
					<div className="admin-info">
						<div className="font-strong">Abhiyan Shrestha</div>
						<small>Co-ordinator</small>
					</div>
				</div>
				<ul className="side-menu metismenu">
					<li>
						<Link className="active" to="/">
							<i className="sidebar-item-icon fa fa-th-large" />
							<span className="nav-label">Dashboard</span>
						</Link>
					</li>
					<li>
						<a href="#">
							<i className="sidebar-item-icon fa fa-bookmark" />
							<span className="nav-label">Teacher</span>
							<i className="fa fa-angle-left arrow" />
						</a>
						<ul className="nav-2-level collapse">
							<li>
								<Link to="/teacher/create">Add Teacher</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Sidebar;
