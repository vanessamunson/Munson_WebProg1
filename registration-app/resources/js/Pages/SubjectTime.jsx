export default function SubjectTime({subjecttimes}) {
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
                    {subjecttimes.map(subjecttime => (
                        <tr key={subjecttime.id}>
                            <td>{subjecttime.student_id}</td>
                            <td>{subjecttime.subject_id}</td>
                            <td>{subjecttime.level_id}</td>
                            <td>{subjecttime.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}