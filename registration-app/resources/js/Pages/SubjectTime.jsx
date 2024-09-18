import { Link } from "@inertiajs/react";

export default function SubjectTime({subjecttimes}) {
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
                    {subjecttimes.map(subjecttime => (
                        <tr key={subjecttime.id}>
                            <td>{subjecttime.student_id}</td>
                            <td>{subjecttime.subject_id}</td>
                            <td>{subjecttime.level_id}</td>
                            <td>{subjecttime.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {subjecttimes.links.map(link => (
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