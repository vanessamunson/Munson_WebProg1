export default function Subject({subjects}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Description</th>
                    </tr>
                    {subjects.map(subject => (
                        <tr key={subject.id}>
                            <td>{subject.name}</td>
                            <td>{subject.department_id}</td>
                            <td>{subject.description}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}