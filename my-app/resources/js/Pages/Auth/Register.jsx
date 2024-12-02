import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react'; 

export default function Register() {

    const [department, setDepartment] = useState("");
    const [emphasis, setEmphasis] = useState("");

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
        setEmphasis("");
    };

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        race: '',
        hall: 'Attainment',
        email: '',
        password: '',
        password_confirmation: '',
        dept_id: 0,
        emphasis_id: 0
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const onDeptChange = (e) => {
        handleDepartmentChange(e);
        setData("dept_id", parseInt(e.target.value))
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="grid-race" value="Race" />

                    <select
                        id="race"
                        name="race"
                        value={data.race}
                        className="mt-1 block w-full bg-white border-gray-300 text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                        onChange={(e) => setData('race', e.target.value)}
                        required
                    >
                        <option>Select</option>
                        <option>Altmer</option>
                        <option>Argonian</option>
                        <option>Bosmer</option>
                        <option>Breton</option>
                        <option>Dunmer</option>
                        <option>Imperial</option>
                        <option>Khajiit</option>
                        <option>Nord</option>
                        <option>Orsimer</option>
                        <option>Redguard</option>  
                    </select>
                    
                    <InputError message={errors.race} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="grid-department" value="Major" />

                    <select
                        id="grid-department"
                        name="department"
                        value={data.dept_id}
                        className="mt-1 block w-full bg-white border-gray-300 text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                        onChange={(e) => onDeptChange(e)}
                        required
                    >
                        <option value="0">Select</option>
                        <option value="3">Alteration</option>
                        <option value="4">Conjuration</option>
                        <option value="1">Destruction</option>
                        <option value="6">Enchanting</option>
                        <option value="5">Illusion</option>
                        <option value="2">Restoration</option>
                    </select>

                    {errors.dept_id && <InputError message={errors.dept_id} className="mt-2" />}
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="grid-emphasis" value="Emphasis" />

                    <select
                        id="grid-emphasis"
                        name="emphasis"
                        value={data.emphasis_id}
                        className="mt-1 block w-full bg-white border-gray-300 text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                        onChange={(e) => setData("emphasis_id", parseInt(e.target.value))}
                        disabled={data.dept_id === 0}
                    >
                        <option value="0">Select</option>
                        {(data.dept_id === 6) && (
                            <>
                                <option value="1">Destruction</option>
                                <option value="2">Restoration</option>
                                <option value="3">Soul Gems</option>
                            </>
                        )}
                        {(data.dept_id === 3) && (
                            <>
                                <option value="4">Protection</option>
                            </>
                        )}
                        {(data.dept_id === 2) && (
                            <>
                                <option value="5">Regeneration</option>
                            </>
                        )}
                        {(data.dept_id === 1) && (
                            <>
                                <option value="6">Shock</option>
                                <option value="7">Frost</option>
                                <option value="8">Flames</option>
                            </>
                        )}
                        {(data.dept_id === 4) && (
                            <>
                                <option value="9">Atronachs</option>
                                <option value="10">Necromancy</option>  
                                <option value="11">Bound Weaponry</option>
                            </>  
                        )}
                        {(data.dept_id === 5) && (
                            <>
                                <option value="12">Will Bending</option>  
                            </>
                        )}
                    </select>

                    {/* Error Message for Emphasis Field */}
                    {errors.emphasis_id && <InputError message={errors.emphasis_id} className="mt-2" />}
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
