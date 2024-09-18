export default function RegisteredSubject({registeredsubjects}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Subject Time</th>
                        <th>Times Registered</th>
                    </tr>
                    {registeredsubjects.map(registeredsubject => (
                        <tr key={registeredsubject.id}>
                            <td>{registeredsubject.student_id}</td>
                            <td>{registeredsubject.subjecttime_id}</td>
                            <td>{registeredsubject.timesregistered}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}