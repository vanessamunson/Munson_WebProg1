import { Link } from "@inertiajs/react";

export default function PreviousSubject({previoussubjects}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Subject</th>
                        <th>Level</th>
                        <th>Grade</th>
                    </tr>
                    {previoussubjects.map(previoussubject => (
                        <tr key={previoussubject.id}>
                            <td>{previoussubject.student_id}</td>
                            <td>{previoussubject.subject_id}</td>
                            <td>{previoussubject.level_id}</td>
                            <td>{previoussubject.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {previoussubjects.links.map(link => (
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