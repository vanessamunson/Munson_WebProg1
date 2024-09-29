import { Link } from "@inertiajs/react";

export default function Subject({subjects}) {
    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg" >
                <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Department</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {subjects.data.map(subject => (
                        <tr key={subject.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{subject.name}</td>
                            <td className="px-6 py-4">{subject.department_id}</td>
                            <td className="px-6 py-4">{subject.description}</td>
                        </tr>
                    ))}
                    </tbody>
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