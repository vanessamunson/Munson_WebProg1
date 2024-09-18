import { Link } from "@inertiajs/react";

export default function Subject({subjects}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Description</th>
                    </tr>
                    {subjects.data.map(subject => (
                        <tr key={subject.id}>
                            <td>{subject.name}</td>
                            <td>{subject.department_id}</td>
                            <td>{subject.description}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {subjects.links.map(link => (
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