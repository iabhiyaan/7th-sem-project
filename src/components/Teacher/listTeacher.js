import React from "react";

export default function listTeacher({ teachers }) {
	return (
		<table className="table">
			<thead>
				<td>Name</td>
				<td>Address</td>
				<td>Email</td>
				<td>DOB</td>
				<td>Gender</td>
				<td>Type</td>
			</thead>
			<tbody>
				{teachers &&
					teachers.map((teacher, index) => (
						<tr key={index}>
							<td>{teacher.teacher__name}</td>
							<td>{teacher.address}</td>
							<td>{teacher.email}</td>
							<td>{teacher.dob}</td>
							<td>{teacher.gender}</td>
							<td>{teacher.type}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
}
