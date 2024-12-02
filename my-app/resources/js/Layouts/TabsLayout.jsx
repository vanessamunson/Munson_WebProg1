import NavLink from '@/Components/NavLink';

export default function MySubjectsLayout({children}) {
    return (
        <>
        <div>
        <NavLink
            href={route('dashboard')}
            active={route().current('dashboard')}
        >
            Active Subjects
        </NavLink>
        <NavLink
            href={route('dashboard')}
            active={route().current('dashboard')}
        >
            Previous Subjects
        </NavLink>
        </div>
        </>
    )
}