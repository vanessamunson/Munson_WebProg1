export default function Emphasis({emphases}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                    {emphases.map(emphasis => (
                        <tr key={emphasis.id}>
                            <td>{emphasis.name}</td>
                            <td>{emphasis.dept_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}