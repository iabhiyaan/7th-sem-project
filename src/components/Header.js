import React from "react";

const Header = () => {
	return (
		<header className="header">
			<div className="page-brand">
				<a className="link" href="#">
					<span className="brand">
						Hajiri
						<span className="brand-tip">SYSTEM</span>
					</span>
					<span className="brand-mini">HS</span>
				</a>
			</div>
			<div className="flexbox flex-1">
				<ul className="nav navbar-toolbar">
					<li>
						<a className="nav-link sidebar-toggler js-sidebar-toggler">
							<i className="ti-menu" />
						</a>
					</li>
				</ul>
				<ul className="nav navbar-toolbar">
					<li className="dropdown dropdown-user">
						<a className="nav-link dropdown-toggle link" data-toggle="dropdown">
							<span />Admin
							<i className="fa fa-angle-down m-l-5" />
						</a>
						<ul className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="#">
								<i className="fa fa-user" />Profile
							</a>
							<a className="dropdown-item" href="#">
								<i className="fa fa-cog" />Settings
							</a>
							<a className="dropdown-item" href="javascript:;">
								<i className="fa fa-support" />Support
							</a>
							<li className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								<i className="fa fa-power-off" />Logout
							</a>
						</ul>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
