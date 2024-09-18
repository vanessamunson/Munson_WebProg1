import { Link } from "@inertiajs/react";

export default function SubjectPrerequisite({subjectprerequisites}) {
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
                    {subjectprerequisites.map(subjectprerequisite => (
                        <tr key={subjectprerequisite.id}>
                            <td>{subjectprerequisite.student_id}</td>
                            <td>{subjectprerequisite.subject_id}</td>
                            <td>{subjectprerequisite.level_id}</td>
                            <td>{subjectprerequisite.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {subjectprerequisites.links.map(link => (
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