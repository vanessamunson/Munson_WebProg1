export default function Department({departments}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {departments.map(department => (
                        <tr key={department.id}>
                            <td>{department.name}</td>
                            <td>{department.description}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}