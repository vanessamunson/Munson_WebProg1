import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <GuestLayout>
                <nav className="-mx-3 mt-6 flex">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                        >
                            <PrimaryButton>Dashboard</PrimaryButton>
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                            >
                                <PrimaryButton className=''>Log in</PrimaryButton>
                            </Link>
                            <Link
                                href={route('register')}
                            >
                                <PrimaryButton className='ml-3'>Register</PrimaryButton>
                            </Link>
                        </>
                    )}
                </nav>
            </GuestLayout>
        </>
    );
}
