import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
           <div>
                <div className='flex justify-center'>
                    <Link href="/">
                        <img className="h-30 w-30 fill-current text-gray-500" src='/images/logo.png'/>
                    </Link>
                </div>

                <div>
                    {children}
                </div>
            </div> 
        </div>
    );
}
