import React, { useState } from 'react';
import Header from './Components/Header';
import StudentList from './Components/StudentList';

const App = () => {
  //Some data
  const initialStudents = [
    {
      id: 1,
      name: 'Alice Johnson',
      attendance: false,
      attendanceHistory: [
        {
          id: 1,
          attended: 10,
          totalClasses: 12,
          attendancePercentage: ((10 / 12) * 100).toFixed(2),
        },
   
      ],
    },
    {
      id: 2,
      name: 'Bob Smith',
      attendance: false,
      attendanceHistory: [
        {
          id: 2,
          attended: 8,
          totalClasses: 10,
          attendancePercentage: ((8 / 10) * 100).toFixed(2),
        },
      ],
    },
    {
      id: 3,
      name: 'Charlie Brown',
      attendance: false,
      attendanceHistory: [
        {
          id: 3,
          attended: 12,
          totalClasses: 12,
          attendancePercentage: ((12 / 12) * 100).toFixed(2),
        },
      ],
    },
    {
      id: 4,
      name: 'David Lee',
      attendance: false,
      attendanceHistory: [
        {
          id: 4,
          attended: 9,
          totalClasses: 11,
          attendancePercentage: ((9 / 11) * 100).toFixed(2),
        },
      ],
    },
    {
      id: 5,
      name: 'Ella Davis',
      attendance: false,
      attendanceHistory: [
        {
          id: 5,
          attended: 7,
          totalClasses: 9,
          attendancePercentage: ((7 / 9) * 100).toFixed(2),
        },
      ],
    },
    {
      id: 6,
      name: 'Frank White',
      attendance: false,
      attendanceHistory: [
        {
          id: 6,
          attended: 11,
          totalClasses: 12,
          attendancePercentage: ((11 / 12) * 100).toFixed(2),
        },
      ],
    },
    {
      id: 7,
      name: 'Grace Clark',
      attendance: false,
      attendanceHistory: [
        {
          id: 7,
          attended: 6,
          totalClasses: 8,
          attendancePercentage: ((6 / 8) * 100).toFixed(2),
        },
      ],
    },
    {
      id: 8,
      name: 'Hannah Lewis',
      attendance: false,
      attendanceHistory: [
        {
          id: 8,
          attended: 10,
          totalClasses: 10,
          attendancePercentage: ((10 / 10) * 100).toFixed(2),
        },
      ],
    },
  ];

  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (studentId, isPresent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              attendance: isPresent,
              attended: isPresent ? student.attended + 1 : student.attended,
              totalClasses: student.totalClasses + 1,
              attendanceHistory: student.attendanceHistory.map((entry) =>
                entry.id === student.attendanceHistory.length
                  ? {
                      ...entry,
                      attended: isPresent ? entry.attended + 1 : entry.attended,
                      totalClasses: entry.totalClasses + 1,
                      attendancePercentage: isPresent
                        ? (((entry.attended + 1) / (entry.totalClasses + 1)) * 100).toFixed(2)
                        : ((entry.attended / (entry.totalClasses + 1)) * 100).toFixed(2),
                    }
                  : entry
              ),
            }
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
