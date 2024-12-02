import { Link } from '@inertiajs/react'

export default function PaginatedLayout({children}) {

    return (
        <>
        <div>
            {children}
        </div>
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
        </>
    )
}