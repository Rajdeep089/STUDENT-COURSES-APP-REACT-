import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import { fetchCourses } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses.filter(course => {
    const lowerSearch = searchTerm.toLowerCase();
    const courseName = course.name.toLowerCase();
    const instructorName = course.instructor.toLowerCase();
    return courseName.includes(lowerSearch) || instructorName.includes(lowerSearch);
  });

  return (
    <div className="course-list">
      <h1>Courses</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <div className="course-grid">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
