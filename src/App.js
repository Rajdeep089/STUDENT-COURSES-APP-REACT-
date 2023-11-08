// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import StudentDashboard from "./components/StudentDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <h1>Welcome to the React Course App</h1>
        <Routes>
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to the React Course App</h2>
      <p>
        This is the home page content. You can add information about your app
        and provide a brief introduction here.
      </p>
    </div>
  );
};

export default App;
