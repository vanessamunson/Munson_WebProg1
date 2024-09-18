import { Link } from "@inertiajs/react";

export default function Attendance({attendances}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Attended</th>
                    </tr>
                    {attendances.data.map(attendance => (
                        <tr key={attendance.id}>
                            <td>{attendance.attended}</td>
                            <td>{attendance.subjecttime_id}</td>
                            <td>{attendance.student_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {attendances.links.map(link => (
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