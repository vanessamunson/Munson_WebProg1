export default function SubjectPrerequisite({subjectprerequisites}) {
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
                    {subjectprerequisites.map(subjectprerequisite => (
                        <tr key={subjectprerequisite.id}>
                            <td>{subjectprerequisite.student_id}</td>
                            <td>{subjectprerequisite.subject_id}</td>
                            <td>{subjectprerequisite.level_id}</td>
                            <td>{subjectprerequisite.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}