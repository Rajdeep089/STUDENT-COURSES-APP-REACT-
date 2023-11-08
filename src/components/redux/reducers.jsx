import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
  FETCH_COURSE_BY_ID_REQUEST,
  FETCH_COURSE_BY_ID_SUCCESS,
  FETCH_COURSE_BY_ID_FAILURE,
  FETCH_ENROLLED_COURSES_REQUEST,
  FETCH_ENROLLED_COURSES_SUCCESS,
  FETCH_ENROLLED_COURSES_FAILURE,
  MARK_COURSE_AS_COMPLETED_REQUEST,
  MARK_COURSE_AS_COMPLETED_SUCCESS,
  MARK_COURSE_AS_COMPLETED_FAILURE,
  UPDATE_STUDENTS,
} from "./actions";

const initialState = {
  courses: [],
  course: null,
  enrolledCourses: [],
  error: null, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        courses: [],
        error: null,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        error: null,
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        courses: [],
        error: action.payload,
      };

    case FETCH_COURSE_BY_ID_REQUEST:
      return {
        ...state,
        course: null,
        error: null,
      };
    case FETCH_COURSE_BY_ID_SUCCESS:
      return {
        ...state,
        course: action.payload,
        error: null,
      };
    case FETCH_COURSE_BY_ID_FAILURE:
      return {
        ...state,
        course: null,
        error: action.payload,
      };

    case FETCH_ENROLLED_COURSES_REQUEST:
      return {
        ...state,
        enrolledCourses: [],
        error: null,
      };
    case FETCH_ENROLLED_COURSES_SUCCESS:
      return {
        ...state,
        enrolledCourses: action.payload,
        error: null,
      };
    case FETCH_ENROLLED_COURSES_FAILURE:
      return {
        ...state,
        enrolledCourses: action.payload,
        error: null,
      };

    case UPDATE_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case MARK_COURSE_AS_COMPLETED_REQUEST:
      return {
        ...state,
        error: null,
      };
    case MARK_COURSE_AS_COMPLETED_SUCCESS:
      const updatedEnrolledCourses = state.enrolledCourses.map((course) =>
        course.id === action.payload[0].id
          ? {
              ...course,
              completed: true,
            }
          : course
      );
      return {
        ...state,
        enrolledCourses: updatedEnrolledCourses,
        error: null,
      };
    case MARK_COURSE_AS_COMPLETED_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
