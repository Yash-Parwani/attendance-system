// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import StudentList from './Components/StudentList';

function App() {
  // Sample student data
  const initialStudents = [
  { id: 1, name: 'Alice Johnson', attendance: false },
  { id: 2, name: 'Bob Smith', attendance: false },
  { id: 3, name: 'Charlie Brown', attendance: false },
  { id: 4, name: 'David Lee', attendance: false },
  { id: 5, name: 'Ella Davis', attendance: false },
  { id: 6, name: 'Frank White', attendance: false },
  { id: 7, name: 'Grace Clark', attendance: false },
  { id: 8, name: 'Hannah Lewis', attendance: false },
    // Add more students as needed
  ];



  const [students, setStudents] = useState(initialStudents);

  // Function to toggle student attendance
  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, attendance: !student.attendance }
          : student
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Student Attendance</h2>
        <StudentList students={students} onToggleAttendance={toggleAttendance} />
     
      </div>
    </div>
  );
}

export default App;
