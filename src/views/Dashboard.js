import React from "react";

const Dashboard = () => {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6">
				<div className="ibox bg-success color-white widget-stat">
					<div className="ibox-body">
						<h2 className="m-b-5 font-strong">201</h2>
						<div className="m-b-5">NEW ORDERS</div>
						<i className="ti-shopping-cart widget-stat-icon" />
						<div>
							<i className="fa fa-level-up m-r-5" />
							<small>25% higher</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
