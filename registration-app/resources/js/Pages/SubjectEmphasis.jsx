import { Link } from "@inertiajs/react";

export default function SubjectEmphasis({subjectemphases}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Emphasis</th>
                    </tr>
                    {subjectemphases.map(subjectemphasis => (
                        <tr key={subjectemphasis.id}>
                            <td>{subjectemphasis.student_id}</td>
                            <td>{subjectemphasis.subject_id}</td>
                            <td>{subjectemphasis.level_id}</td>
                            <td>{subjectemphasis.grade_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {subjectemphases.links.map(link => (
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