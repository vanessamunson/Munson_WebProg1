import { Link } from "@inertiajs/react";

export default function Grade({grades}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Class</th>
                        <th>Attended</th>
                    </tr>
                    {grades.map(grade => (
                        <tr key={grade.id}>
                            <td>{grade.attended}</td>
                            <td>{grade.subjecttime_id}</td>
                            <td>{grade.student_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {grades.links.map(link => (
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