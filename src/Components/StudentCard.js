function StudentCard({ student, onToggleAttendance }) {
  return (
    <div className="bg-white p-4 m-2 border rounded-lg shadow-md">
      <p className="text-lg">{student.name}</p>
      <button
       className={`px-4 py-2 mt-2 ${
        student.attendance
          ? 'bg-green-500 hover:bg-green-600'
          : 'bg-red-500 hover:bg-red-600'
      } text-white rounded transition duration-300 ease-in-out`}
        onClick={() => onToggleAttendance(student.id)}
      >
        {student.attendance ? "Present" : "Absent"}
      </button>
    </div>
  );
}

export default StudentCard;
