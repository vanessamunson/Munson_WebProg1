export default function SubjectEmphasis({subjectemphases}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Emphasis</th>
                    </tr>
                    {subjectemphases.map(subjectemphasis => (
                        <tr key={subjectemphasis.id}>
                            <td>{subjectemphasis.student_id}</td>
                            <td>{subjectemphasis.subject_id}</td>
                            <td>{subjectemphasis.level_id}</td>
                            <td>{subjectemphasis.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}