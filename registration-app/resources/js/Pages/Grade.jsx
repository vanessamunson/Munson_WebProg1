export default function Grade({grades}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Attended</th>
                    </tr>
                    {grades.map(grade => (
                        <tr key={grade.id}>
                            <td>{grade.attended}</td>
                            <td>{grade.subjecttime_id}</td>
                            <td>{grade.student_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}