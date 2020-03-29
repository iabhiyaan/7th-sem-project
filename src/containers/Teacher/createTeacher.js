import React, { Component } from "react";

class createTeacher extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: ""
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			firstName: "",
			lastName: "",
			email: ""
		});
		this.props.history.push("/teacher/list");
	};

	render() {
		const { firstName, lastName, email } = this.state;
		return (
			<div className="row">
				<div className="col-12">
					<div className="ibox">
						<div className="ibox-head">
							<div className="ibox-title">Add Teacher</div>
							<div className="ibox-tools">
								<a className="ibox-collapse">
									<i className="fa fa-minus" />
								</a>
								<a className="dropdown-toggle" data-toggle="dropdown">
									<i className="fa fa-ellipsis-v" />
								</a>
							</div>
						</div>
						<div className="ibox-body">
							<form method="POST" onSubmit={this.handleSubmit}>
								<div className="row">
									<div className="col-sm-6 form-group">
										<label>First Name</label>
										<input
											name="firstName"
											className="form-control"
											value={firstName}
											onChange={this.handleChange}
											type="text"
											placeholder="First Name"
										/>
									</div>
									<div className="col-sm-6 form-group">
										<label>Last Name</label>
										<input
											name="lastName"
											className="form-control"
											value={lastName}
											onChange={this.handleChange}
											type="text"
											placeholder="Last Name"
										/>
									</div>
								</div>
								<div className="form-group">
									<label>Email</label>
									<input
										name="email"
										className="form-control"
										value={email}
										onChange={this.handleChange}
										type="text"
										placeholder="Email address"
									/>
								</div>

								<div className="form-group">
									<button
										onClick={this.handleSubmit}
										className="btn btn-primary btn-block"
										type="submit"
									>
										Add Teacher
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default createTeacher;
