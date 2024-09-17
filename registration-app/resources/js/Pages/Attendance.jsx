export default function Attendance({attendances}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Attended</th>
                    </tr>
                    {attendances.map(attendance => (
                        <tr key={attendance.id}>
                            <td>{attendance.attended}</td>
                            <td>{attendance.subjecttime_id}</td>
                            <td>{attendance.student_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}