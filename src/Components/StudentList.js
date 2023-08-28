import StudentCard from './StudentCard';

function StudentList({ students, onToggleAttendance }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onToggleAttendance={onToggleAttendance}
        />
      ))}
    </div>
  );
}

export default StudentList;