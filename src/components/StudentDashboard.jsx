import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnrolledCourses } from "./redux/actions";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);

  useEffect(() => {
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  if (!enrolledCourses) return <p>Loading...</p>;

const renderCourses = () => {
  return enrolledCourses.map((course) => {
    const { id, name, instructor } = course;
    return (
      <div key={id}>
        <h2>{name}</h2>
        <p>Instructor: {instructor}</p>
        <h3>Enrolled Courses:</h3>
        <ul>
          <li>
            {name} - {instructor}
          </li>
        </ul>
      </div>
    );
  });
};

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="course-list">
        {renderCourses()}
      </div>
    </div>
  );
};

export default StudentDashboard;
