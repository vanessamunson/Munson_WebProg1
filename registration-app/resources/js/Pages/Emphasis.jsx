import { Link } from "@inertiajs/react";

export default function Emphasis({emphases}) {
    return (
        <>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                    </tr>
                    {emphases.map(emphasis => (
                        <tr key={emphasis.id}>
                            <td>{emphasis.name}</td>
                            <td>{emphasis.dept_id}</td>
                        </tr>
                    ))}
                </table>
            </div>

            <div>
                {emphases.links.map(link => (
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