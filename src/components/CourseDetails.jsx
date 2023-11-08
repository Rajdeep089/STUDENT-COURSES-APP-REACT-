import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourseById } from "./redux/actions";
import { FETCH_COURSE_BY_ID_FAILURE } from "./redux/actions";

const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector(state => state.course);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchCourseById(id));
    } catch (err) {
      setErrorMsg("Failed to fetch course details.");
    }
  }, [id, dispatch]);

  if (errorMsg) return <p>Error: {errorMsg}</p>;
  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-details">
      <h1>{course.name}</h1>
      <p>{course.instructor}</p>
      <p>{course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.prerequisites.join(", ")}</p>
      <div className="syllabus">
        <h3>Syllabus</h3>
        {course.syllabus.map(({ week, topic, content }) => (
          <div key={week} className="syllabus-item">
            <h4>Week {week}</h4>
            <p>Topic: {topic}</p>
            <p>Content: {content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
