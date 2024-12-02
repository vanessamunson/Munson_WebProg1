import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link, router, useForm } from '@inertiajs/react'
import { useState, useEffect } from 'react';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';


export default function Subject({subjects, userDeptId, filters, id, mSubject, errors}) {
    console.log(errors.subject_time_id);
    console.log(mSubject);

    const { data, setData, post, processing, errors: formErrors } = useForm({
        level: filters?.level || 0,          // Dropdown for level
        creditSort: filters?.creditSort || "", // Dropdown for credit sort
        requirement: filters?.requirement || 0, // Dropdown for requirement
    });

    // Page refreshes when you hit view, make the subjects stay by passing them to getInfo too(?)
    const [open, setOpen] = useState(id > 0);
    const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    useEffect(() => {
        if (errors.subject_time_id) {
            setIsErrorModalOpen(true);
        }
    }, [errors.subject_time_id]);

    // Handle dropdown changes
    function handleDropdownChange(e) {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,  // Update specific dropdown value
        }));
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        // Merge both checkbox and dropdown states
        const formData = {
            ...data
        };
        setData(formData);  // Update form data
        router.get('/subjects', formData);  // Submit the form
    };

    const openModal = (e) => {
        const subjectId = e.target.value;
        setData(prevData => ({
            ...prevData,
            id: subjectId,
        }));
        router.get(`/subjects/${subjectId}`);
        setOpen(true);
    }
    const setClose = () => {
        const subjectId = '';
        router.get(`/subjects/${subjectId}`);
        setOpen(false);
    }

    function storeRegistration(selectedId) {
        router.post(`/activesubjects/${selectedId}`, {subject_time_id: id}, {
            onSuccess: () => {
                setOpen(false);
                setIsSecondaryModalOpen(true);
            }
        })
        setOpen(false);
    }

    const closeSecondaryModal = () => {
        setIsSecondaryModalOpen(false);
    }

    const closeErrorModal = () => {
        const subjectId = '';
        router.get(`/subjects/${subjectId}`)
        setIsErrorModalOpen(false);
    }

    return (
        <>
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Register for Subject
                </h2>
            }
        >

            {/* --------------------- Filters section --------------------- */}
            <form id="filters" className='mt-4 pl-4 bg-gray-800 w-full' onSubmit={handleSubmit}>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <h2 className="ml-4 pt-4 mb-4 text-lg font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Filters
                    </h2>
                    <div className="flex flex-rows items-center">
                        <div className="m-4 grid-cols-2">
                            <InputLabel value="Level" />
                            <select
                                name="level"
                                className="mt-1 block w-auto bg-white border-gray-300 text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                                onChange={handleDropdownChange}
                                value={data.level}
                            >
                                <option value="">All</option>
                                <option value="1">Novice</option>
                                <option value="2">Apprentice</option>
                                <option value="3">Adept</option>
                                <option value="4">Expert</option>
                                <option value="5">Master</option>
                            </select>
                        </div>

                        <div className="m-4 grid-cols-2">
                            <InputLabel value="Sort by Credits"/>
                            <select
                                name="creditSort"
                                className="mt-1 block w-auto bg-white border-gray-300 text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                                onChange={handleDropdownChange}
                                value={data.creditSort}
                            >
                                <option value="">Unsorted</option>
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>
                            </select>
                        </div>

                        <div className="m-4 grid-cols-2">
                            <InputLabel value="Requirement" />
                            <select
                                name="requirement"
                                className="mt-1 block w-auto bg-white border-gray-300 text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-600"
                                onChange={handleDropdownChange}
                                value={data.requirement}
                            >
                                <option value="">All courses</option>
                                <option value="1">All departmental</option>
                                <option value="2">Obligatory</option>
                                <option value="3">Elective</option>
                                <option value="4">Facultative</option>
                            </select>
                        </div>
                    </div>
                    <PrimaryButton type="submit" className='h-10 m-4 pl-10 pr-10'>Apply</PrimaryButton>
                </div>
                
            </form>
            
            {/* --------------------- Modal section --------------------- */}
            {true &&
                <Modal show={open}>
                    <div className='w-full my-4'>
                        <h2 className="ml-4 text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            {mSubject?.name}
                        </h2>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="table-auto mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Day</th>
                                        <th scope="col" className="px-6 py-3">Start Time</th>
                                        <th scope="col" className="px-6 py-3">End Time</th>
                                        <th scope="col" className="px-6 py-3">Lecturer</th>
                                        <th scope="col" className="px-6 py-3">Prerequisite(s)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mSubject?.subject_time?.map (time => (
                                        <tr key={time.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td scope="row" className="px-6 py-4">{time?.day}</td>
                                        <td scope="row" className="px-6 py-4">{time?.start_time}</td>
                                        <td scope="row" className="px-6 py-4">{time?.end_time}</td>
                                        <td scope="row" className="px-6 py-4">{mSubject?.lecturer.name}</td>
                                        <td scope="row" className="px-6 py-4">
                                            {mSubject.prerequisite && mSubject.prerequisite.length > 0
                                            ? mSubject.prerequisite.map(prereq => prereq.name).join(', ')
                                            : "None"}
                                        </td>
                                        <td><PrimaryButton onClick={() => storeRegistration(time.id)}>Register</PrimaryButton></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* <p className='text-gray-400 uppercase'>{subject.description}</p> */}
                        <DangerButton className='ml-4 mt-4' onClick={setClose}>Close</DangerButton>
                    </div> 
                </Modal>
            }

            {/* Secondary Modal */}
            <Modal show={isSecondaryModalOpen} onClose={closeSecondaryModal}>
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                            Subject Successfully Registered
                        </h2>
                        <div className='flex justify-center'>
                            <PrimaryButton
                                onClick={closeSecondaryModal}
                                className='mt-4 px-4'
                            >
                                Ok
                            </PrimaryButton>
                        </div>
                        
                    </div>
            </Modal>

            {/* Error Modal */}
            <Modal show={isErrorModalOpen} onClose={closeErrorModal}>
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                            Error: Already registered for this subject.
                        </h2>
                        <div className='flex justify-center'>
                            <PrimaryButton
                                onClick={closeErrorModal}
                                className='mt-4 px-4'
                            >
                                Ok
                            </PrimaryButton>
                        </div>
                        
                    </div>
            </Modal>
            

            {/* --------------------- Table section --------------------- */}
            <section id="table">
                <div className="relative overflow-hidden shadow-md sm:rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
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
                            {subjects?.data.map(subject => (
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
                                    <td><PrimaryButton value={subject.id} onClick={openModal}>View</PrimaryButton></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        {subjects?.links.map(link => (
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
        </AuthenticatedLayout>
        </>
    )
}