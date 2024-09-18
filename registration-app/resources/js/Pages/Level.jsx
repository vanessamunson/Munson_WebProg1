import { Link } from "@inertiajs/react";

export default function Level({levels}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Reccomended Year</th>
                    </tr>
                    {levels.map(level => (
                        <tr key={level.id}>
                            <td>{level.name}</td>
                            <td>{level.rec_year}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}