import React, { Component } from "react";
import { connect } from "react-redux";

import { addTeacher } from "../../actions/teacherAction";
class createTeacher extends Component {
	state = {
		teacher: {
			teacher__name: "",
			email: "",
			address: "",
			contact: "",
			dob: "",
			faculty: [ "BSCCSIT", "BCA" ],
			gender: "",
			type: ""
		}
	};

	handleChange = (e) => {
		this.setState({
			teacher: {
				// this will give previous state of teacher object:-
				...this.state.teacher,
				// this will give current state of teacher object
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// add data to global state:
		this.props.addTeacher(this.state.teacher);
		this.setState({
			teacher: {
				teacher__name: "",
				email: "",
				address: "",
				contact: "",
				dob: "",
				faculty: [ "BSCCSIT", "BCA" ],
				gender: "",
				type: ""
			}
		});
		this.props.history.push("/teacher/list");
	};

	render() {
		const { teacher__name, email, address, contact, dob, faculty, gender, type } = this.state.teacher;
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
										<label>Name</label>
										<input
											name="teacher__name"
											className="form-control"
											value={teacher__name}
											onChange={this.handleChange}
											type="text"
											placeholder="Enter name of teacher"
										/>
									</div>
									<div className="col-sm-6 form-group">
										<label>Contact</label>
										<input
											name="contact"
											className="form-control"
											value={contact}
											onChange={this.handleChange}
											type="text"
											placeholder="Contact"
										/>
									</div>
									<div className="form-group col-sm-6">
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
									<div className="form-group col-sm-6">
										<label>Address</label>
										<input
											name="address"
											className="form-control"
											value={address}
											onChange={this.handleChange}
											type="text"
											placeholder="Address"
										/>
									</div>
									<div className="form-group col-sm-6">
										<label>DOB</label>
										<input
											name="dob"
											className="form-control"
											value={dob}
											onChange={this.handleChange}
											type="date"
											placeholder="dob"
										/>
									</div>
									<div className="form-group col-sm-6">
										<label>Faculty</label>
										<select
											name="type"
											value={type}
											className="form-control"
											onChange={this.handleChange}
										>
											<option disabled selected>
												Select faculty
											</option>
											{faculty &&
												faculty.map((fa, i) => {
													console.log(fa);
													return (
														<option value={fa} key={i}>
															{fa}
														</option>
													);
												})}
										</select>
									</div>
									<div className="form-group col-sm-6">
										<label>Gender</label>
										<br />
										<label className="ui-radio ui-radio-inline">
											<input
												type="radio"
												onChange={this.handleChange}
												name="gender"
												value="male"
											/>
											<span className="input-span" />Male
										</label>
										<label className="ui-radio ui-radio-inline">
											<input
												type="radio"
												name="gender"
												value="female"
												onChange={this.handleChange}
											/>
											<span className="input-span" />Female
										</label>
									</div>
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

export default connect(null, { addTeacher })(createTeacher);
