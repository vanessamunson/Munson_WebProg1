export default function Lecturer({lecturers}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Race</th>
                        <th>Rank</th>
                        <th>Department</th>
                    </tr>
                    {lecturers.map(lecturer => (
                        <tr key={lecturer.id}>
                            <td>{lecturer.name}</td>
                            <td>{lecturer.race}</td>
                            <td>{lecturer.rank}</td>
                            <td>{lecturer.dept_id}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}