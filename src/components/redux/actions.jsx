import axios from "axios";

export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const FETCH_COURSE_BY_ID_REQUEST = "FETCH_COURSE_BY_ID_REQUEST";
export const FETCH_COURSE_BY_ID_SUCCESS = "FETCH_COURSE_BY_ID_SUCCESS";
export const FETCH_COURSE_BY_ID_FAILURE = "FETCH_COURSE_BY_ID_FAILURE";

export const FETCH_ENROLLED_COURSES_REQUEST = "FETCH_ENROLLED_COURSES_REQUEST";
export const FETCH_ENROLLED_COURSES_SUCCESS = "FETCH_ENROLLED_COURSES_SUCCESS";
export const FETCH_ENROLLED_COURSES_FAILURE = "FETCH_ENROLLED_COURSES_FAILURE";

export const MARK_COURSE_AS_COMPLETED_REQUEST = "MARK_COURSE_AS_COMPLETED_REQUEST";
export const MARK_COURSE_AS_COMPLETED_SUCCESS = "MARK_COURSE_AS_COMPLETED_SUCCESS";
export const MARK_COURSE_AS_COMPLETED_FAILURE = "MARK_COURSE_AS_COMPLETED_FAILURE";


export const fetchCourses = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES_REQUEST });

    axios
      .get(`http://localhost:3001/api/courses`) 
      .then((response) => {
        dispatch({
          type: FETCH_COURSES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COURSES_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const fetchCoursesWithStudents = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSES_REQUEST });

    axios
      .get(`http://localhost:3001/api/courses`)
      .then((response) => {
        const courses = response.data;
        dispatch({ type: FETCH_COURSES_SUCCESS, payload: courses });
      })
      .catch((error) => {
        dispatch({ type: FETCH_COURSES_FAILURE, payload: error.message });
      });
  };
};

export const fetchCourseById = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_COURSE_BY_ID_REQUEST });

    axios
      .get(`http://localhost:3001/api/courses/${id}`)
      .then((response) => {
        dispatch({
          type: FETCH_COURSE_BY_ID_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_COURSE_BY_ID_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const fetchEnrolledCourses = () => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_ENROLLED_COURSES_REQUEST });

    const { courses } = getState();
    if (!courses || courses.length === 0) {
      dispatch({
        type: FETCH_ENROLLED_COURSES_FAILURE,
        payload: "No enrolled courses available.",
      });
      return;
    }

    const enrolledCourses = courses.filter(
      (course) => course.enrollmentStatus === "In Progress"
    );

    enrolledCourses[0].completed = true;

    dispatch({
      type: FETCH_ENROLLED_COURSES_SUCCESS,
      payload: enrolledCourses,
    });
  };
};

export const UPDATE_STUDENTS = "UPDATE_STUDENTS";

export const updateStudents = (students) => {
  if (!students) {
    throw new Error('Students cannot be null or undefined');
  }
  return {
    type: UPDATE_STUDENTS,
    payload: students,
  };
};

export const markCourseAsCompleted = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: MARK_COURSE_AS_COMPLETED_REQUEST });

    setTimeout(() => {
      const { enrolledCourses } = getState();
      const updatedEnrolledCourses = enrolledCourses.map((course) =>
        course.id === id
          ? {
              ...course,
              completed: true,
            }
          : course
      );

      dispatch({
        type: MARK_COURSE_AS_COMPLETED_SUCCESS,
        payload: updatedEnrolledCourses,
      });
    }, 1000);

  };
};