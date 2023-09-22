import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const Container = ({ handleCourse }) => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<>
			<div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
				{courses.map((course) => (
					<Card course={course} key={course.id} handleCourse={handleCourse} />
				))}
			</div>
		</>
	);
};
