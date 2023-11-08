import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: [thunk]
});

const initialState = {
  courses: [],
  enrolledCourses: [],
};


export default store;
