export default function PreviousSubject({previoussubjects}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Subject</th>
                        <th>Level</th>
                        <th>Grade</th>
                    </tr>
                    {previoussubjects.map(previoussubject => (
                        <tr key={previoussubject.id}>
                            <td>{previoussubject.student_id}</td>
                            <td>{previoussubject.subject_id}</td>
                            <td>{previoussubject.level_id}</td>
                            <td>{previoussubject.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}