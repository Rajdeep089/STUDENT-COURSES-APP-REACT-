import React from "react";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";

const CourseCard = ({ course, showProgress = false, showCompleted = false, onMarkCompleted }) => {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <img src={course.thumbnail} alt={course.name} />
      {showProgress && (
        <div className="progress-container">
          <ProgressBar
            now={course.progress}
            label={`${course.progress}%`}
            variant="success"
          />
        </div>
      )}
      {showCompleted && (
        <button
          onClick={() => onMarkCompleted(course.id)} 
          disabled={course.completed}
          className={`completed-button ${course.completed ? "completed" : ""}`}
        >
          {course.completed ? "Completed" : "Mark as Completed"}
        </button>
      )}
      <Link to={`/courses/${course.id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
