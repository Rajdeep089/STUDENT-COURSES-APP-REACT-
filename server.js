const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());

  const courses = [

    {
        id: 1,
        name: "Introduction to React Native",
        instructor: "John Doe",
        description: "Learn the basics of React Native development and build your first mobile app.",
        enrollmentStatus: "Open",
        thumbnail: "https://example.com/course1-thumbnail.jpg",
        duration: "8 weeks",
        schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
        syllabus: [
          { week: 1, topic: "Introduction to React Native", content: "Overview of React Native, setting up your development environment." },
          { week: 2, topic: "Building Your First App", content: "Creating a simple mobile app using React Native components." },
        ],
        students: [
          { id: 101, name: "Alice Johnson", email: "alice@example.com" },
          { id: 102, name: "Bob Smith", email: "bob@example.com" },
        ],
      },
      {
        id: 2,
        name: "Advanced Web Development",
        instructor: "Jane Smith",
        description: "Explore advanced topics in web development, including performance optimization and best practices.",
        enrollmentStatus: "Open",
        thumbnail: "https://example.com/course2-thumbnail.jpg",
        duration: "12 weeks",
        schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["Intermediate JavaScript knowledge", "HTML and CSS experience"],
        syllabus: [
          { week: 1, topic: "Web Performance Optimization", content: "Techniques for improving website performance and speed." },
          { week: 2, topic: "Responsive Web Design", content: "Creating responsive web layouts for various devices." },
        ],
        students: [
          { id: 201, name: "Ella Williams", email: "ella@example.com" },
          { id: 202, name: "James Brown", email: "james@example.com" },
        ],
      },
      {
        id: 3,
        name: "Data Science Fundamentals",
        instructor: "Sarah Johnson",
        description: "Learn the fundamentals of data science, data analysis, and data visualization.",
        enrollmentStatus: "Closed",
        thumbnail: "https://example.com/course3-thumbnail.jpg",
        duration: "10 weeks",
        schedule: "Saturdays, 10:00 AM - 12:00 PM",
        location: "Onsite",
        prerequisites: ["Basic statistics knowledge", "Python programming"],
        syllabus: [
          { week: 1, topic: "Introduction to Data Science", content: "Overview of data science and its applications." },
          { week: 2, topic: "Data Analysis", content: "Techniques for data analysis and cleaning." },
        ],
        students: [
          { id: 301, name: "Oliver Davis", email: "oliver@example.com" },
          { id: 302, name: "Sophia Martinez", email: "sophia@example.com" },
        ],
      },
      {
        id: 4,
        name: "Mobile App Development",
        instructor: "Michael Brown",
        description: "Learn to develop mobile apps for iOS and Android platforms using React Native.",
        enrollmentStatus: "Open",
        thumbnail: "https://example.com/course4-thumbnail.jpg",
        duration: "10 weeks",
        schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: ["Basic programming knowledge", "Familiarity with JavaScript"],
        syllabus: [
          { week: 1, topic: "Introduction to Mobile App Development", content: "Overview of mobile app development." },
          { week: 2, topic: "React Native Fundamentals", content: "Getting started with React Native." },
        ],
        students: [
          { id: 401, name: "Liam Wilson", email: "liam@example.com" },
          { id: 402, name: "Ava Johnson", email: "ava@example.com" },
        ],
      },
      {
        id: 5,
        name: "Full-Stack Web Development",
        instructor: "David Smith",
        description: "Master full-stack web development with a focus on frontend and backend technologies.",
        enrollmentStatus: "In Progress",
        thumbnail: "https://example.com/course5-thumbnail.jpg",
        duration: "16 weeks",
        schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic HTML/CSS knowledge", "JavaScript and Node.js experience"],
        syllabus: [
          { week: 1, topic: "Introduction to Web Development", content: "Overview of web technologies and tools." },
          { week: 2, topic: "Frontend Development", content: "Building interactive web interfaces." },
        ],
        students: [
          { id: 501, name: "Henry Anderson", email: "henry@example.com" },
          { id: 502, name: "Emily Davis", email: "emily@example.com" },
        ],
      },
      {
        id: 6,
        name: "Machine Learning Basics",
        instructor: "Olivia Martinez",
        description: "Introduction to machine learning algorithms and applications.",
        enrollmentStatus: "Open",
        thumbnail: "https://example.com/course6-thumbnail.jpg",
        duration: "8 weeks",
        schedule: "Fridays, 3:00 PM - 5:00 PM",
        location: "Online",
        prerequisites: ["Basic Python knowledge", "Statistics background"],
        syllabus: [
          { week: 1, topic: "Introduction to Machine Learning", content: "Overview of machine learning concepts." },
          { week: 2, topic: "Supervised Learning", content: "Understanding supervised learning algorithms." },
        ],
        students: [
          { id: 601, name: "Noah Johnson", email: "noah@example.com" },
          { id: 602, name: "Ava Davis", email: "ava@example.com" },
        ],
      },
      {
        id: 7,
        name: "Artificial Intelligence Fundamentals",
        instructor: "Ella Brown",
        description: "Explore the fundamentals of artificial intelligence and its practical applications.",
        enrollmentStatus: "Closed",
        thumbnail: "https://example.com/course7-thumbnail.jpg",
        duration: "12 weeks",
        schedule: "Saturdays, 2:00 PM - 4:00 PM",
        location: "Onsite",
        prerequisites: ["Basic programming knowledge", "Mathematics background"],
        syllabus: [
          { week: 1, topic: "Introduction to AI", content: "Overview of artificial intelligence and its history." },
          { week: 2, topic: "Machine Learning Techniques", content: "Understanding machine learning algorithms." },
        ],
        students: [
          { id: 701, name: "James Wilson", email: "james@example.com" },
          { id: 702, name: "Sophia Lee", email: "sophia@example.com" },
        ],
      },
      {
        id: 8,
        name: "Frontend Web Development",
        instructor: "William Martinez",
        description: "Master frontend web development with a focus on modern technologies like React and Redux.",
        enrollmentStatus: "In Progress",
        thumbnail: "https://example.com/course8-thumbnail.jpg",
        duration: "14 weeks",
        schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
        location: "Online",
        prerequisites: ["HTML, CSS, and JavaScript knowledge", "React familiarity"],
        syllabus: [
          { week: 1, topic: "Introduction to Frontend Development", content: "Overview of frontend technologies." },
          { week: 2, topic: "React and Redux", content: "Building web applications with React and Redux." },
        ],
        students: [
          { id: 801, name: "Sophia Anderson", email: "sophia@example.com" },
          { id: 802, name: "Liam Davis", email: "liam@example.com" },
        ],
      },
      {
        id: 9,
        name: "Database Design and SQL",
        instructor: "Logan Johnson",
        description: "Learn database design principles and SQL for creating and managing databases.",
        enrollmentStatus: "Open",
        thumbnail: "https://example.com/course9-thumbnail.jpg",
        duration: "10 weeks",
        schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        location: "Online",
        prerequisites: ["Basic database knowledge", "SQL basics"],
        syllabus: [
          { week: 1, topic: "Introduction to Databases", content: "Overview of databases and their importance." },
          { week: 2, topic: "SQL Fundamentals", content: "Learning SQL for database management." },
        ],
        students: [
          { id: 901, name: "Emily Wilson", email: "emily@example.com" },
          { id: 902, name: "Noah Smith", email: "noah@example.com" },
        ],
      },
      {
        id: 10,
        name: "Cybersecurity Essentials",
        instructor: "Logan Davis",
        description: "Explore essential cybersecurity topics, including threat detection and prevention.",
        enrollmentStatus: "In Progress",
        thumbnail: "https://example.com/course10-thumbnail.jpg",
        duration: "12 weeks",
        schedule: "Fridays, 5:00 PM - 7:00 PM",
        location: "Online",
        prerequisites: ["Basic IT knowledge", "Computer security fundamentals"],
        syllabus: [
          { week: 1, topic: "Introduction to Cybersecurity", content: "Overview of cybersecurity concepts." },
          { week: 2, topic: "Threat Detection", content: "Methods for detecting and responding to security threats." },
        ],
        students: [
          { id: 1001, name: "William Anderson", email: "william@example.com" },
          { id: 1002, name: "Sophia Smith", email: "sophia@example.com" },
        ],
      },
  ];

  app.get("/api/courses", (req, res) => {
    res.json(courses);
  });

app.get("/api/courses/:id", (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find((c) => c.id === courseId);
  
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

