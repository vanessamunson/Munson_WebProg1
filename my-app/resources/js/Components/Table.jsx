export default function Table ({children, ...props}) {
    return (
        <>
        <section id="table">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg" >
                <table className="table-auto mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Level</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Requirement</th>
                            <th scope="col" className="px-6 py-3">Credits</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.data.map(subject => (
                            <tr key={subject.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{subject.name}</td>
                                <td className="px-6 py-4">{
                                    subject.level_id == "1" ? 'Novice' :
                                    subject.level_id == "2" ? 'Apprentice' :
                                    subject.level_id == "3" ? 'Adept' :
                                    subject.level_id == "4" ? 'Expert' :
                                    subject.level_id == "5" ? 'Master' : 'N/A'}
                                </td>
                                <td className="px-6 py-4">{(subject.description).length > 40 ? (subject.description).slice(0,40) + '...' : subject.description}</td>
                                <td className="px-6 py-4">{subject.dept_id !== userDeptId ? 'Facultative' : (subject.obligatory === 1 ? 'Obligatory' : 'Elective')}</td>
                                <td className="px-6 py-4">{subject.credits}</td>
                                <td><PrimaryButton>View</PrimaryButton></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {subjects.links.map(link => (
                        <Link 
                            key={link.label} 
                            href={link.url} 
                            dangerouslySetInnerHTML={{__html: link.label}} 
                            className={`p-1 mx-1 text-gray-300 ${link.active ? 'text-white underline' : ''}`} 
                        />
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}