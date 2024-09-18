import { Link } from "@inertiajs/react";

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

            <div>
                {lecturers.links.map(link => (
                    link.url ?
                    <Link 
                        href={link.url} 
                        key={link.label} 
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 m-1 ${
                            link.active ? "font-color: blue" : ""
                        }`}
                    />
                    :
                    <span
                        key={link.label} 
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={'p-1 m-1 text-slate-300'}
                    >
                    </span>
                ))}
            </div>
        </>
    )
}