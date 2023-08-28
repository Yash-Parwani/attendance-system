const StudentCard =({ student, onToggleAttendance }) => {
  const handleToggleAttendance = (isPresent) => {
    onToggleAttendance(student.id, isPresent);

  };

  return (
    <div className="bg-white p-4 m-2 border rounded-lg shadow-md">
      <p className="text-lg">{student.name}</p>
      <button
        className={`px-4 py-2 mt-2 bg-green-500 hover:bg-green-600
            text-white rounded transition duration-300 ease-in-out`}
        onClick={() => handleToggleAttendance(true)}
      >
        Present
      </button>
      <button
        className={`px-4 py-2 mt-2 bg-red-500 hover:bg-red-600text-white rounded transition duration-300 ease-in-out`}
        onClick={() => handleToggleAttendance(false)}
      >
        Absent
      </button>

      {/* Display attendance history */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Attendance History</h3>
        <ul>
          {student.attendanceHistory.map((entry) => (
            <li key={entry.id}>
              Attended/Total Classes: {entry.attended} / {entry.totalClasses} <li>
              Attendance Percentage : ({entry.attendancePercentage}%)
                </li> 
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
