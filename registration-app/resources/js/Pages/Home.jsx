export default function Home({students}) {
    return (
        <>
            <h1>Hello</h1>

            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Hall</th>
                        <th>Department</th>
                    </tr>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.race}</td>
                            <td>{student.hall}</td>
                            <td>{student.department_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}
