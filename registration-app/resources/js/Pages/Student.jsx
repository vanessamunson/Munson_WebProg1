import { Link } from "@inertiajs/react";

export default function Student({students}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Hall</th>
                        <th>Department</th>
                    </tr>
                    {students.data.map(student => (
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
