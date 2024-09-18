import { Link } from "@inertiajs/react";

export default function Department({departments}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    {departments.map(department => (
                        <tr key={department.id}>
                            <td>{department.name}</td>
                            <td>{department.description}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {departments.links.map(link => (
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