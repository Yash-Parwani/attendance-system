function AttendanceHistory({ history }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Attendance History</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Classes Attended</th>
            <th className="px-4 py-2">Total Classes</th>
            <th className="px-4 py-2">Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.id}>
              <td className="border px-4 py-2">{entry.className}</td>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.attended}</td>
              <td className="border px-4 py-2">{entry.totalClasses}</td>
              <td className="border px-4 py-2">{entry.attendancePercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
