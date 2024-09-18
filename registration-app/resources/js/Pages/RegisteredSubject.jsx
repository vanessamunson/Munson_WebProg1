import { Link } from "@inertiajs/react";

export default function RegisteredSubject({registeredsubjects}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Student</th>
                        <th>Subject Time</th>
                        <th>Times Registered</th>
                    </tr>
                    {registeredsubjects.map(registeredsubject => (
                        <tr key={registeredsubject.id}>
                            <td>{registeredsubject.student_id}</td>
                            <td>{registeredsubject.subjecttime_id}</td>
                            <td>{registeredsubject.timesregistered}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {registeredsubjects.links.map(link => (
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