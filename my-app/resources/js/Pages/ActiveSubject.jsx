import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';
import { Link, router } from '@inertiajs/react'
import { useState } from 'react';

export default function ActiveSubject({subjects, userDeptId}) {
    console.log(subjects);

    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false);

    // Function to open the modal
    const [selectedId, setSelectedId] = useState(null);
    const openModal = (id) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    // Close modal to prevent inf loop
    const closeModal = () => {
        setIsModalOpen(false);
    }

    const closeSecondaryModal = () => {
        setIsSecondaryModalOpen(false);
    }

    const handleDelete = () => {
        router.delete(`/activesubjects/${selectedId}`, {
            onSuccess: () => {
                setIsModalOpen(false);
                setIsSecondaryModalOpen(true);
            }
        });
    };

    return (
        <>
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Registered Subjects
                </h2>
            }
        >

        {/* Primary Modal */}
        <Modal show={isModalOpen} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                        Drop Subject
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                        Are you sure you want to drop the subject?
                    </p>
                    <div className='flex justify-center'>
                        <DangerButton
                        onClick={handleDelete}
                        className="mt-4 px-4 py-2 mr-4"
                        >
                            Drop
                        </DangerButton>
                        <PrimaryButton
                            onClick={closeModal}
                            className='mt-4 px-4'
                        >
                            Back
                        </PrimaryButton>
                    </div>
                    
                </div>
        </Modal>

        {/* Secondary Modal */}
        <Modal show={isSecondaryModalOpen} onClose={closeSecondaryModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
                        Subject Successfully Dropped
                    </h2>
                    <div className='flex justify-center'>
                        <PrimaryButton
                            onClick={closeSecondaryModal}
                            className='mt-4 px-4'
                        >
                            Okay
                        </PrimaryButton>
                    </div>
                    
                </div>
        </Modal>
    

        {/* Table */}
        <section id="table">
            <div className="relative overflow-hidden shadow-md sm:rounded-lg mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <table className="table-auto mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Level</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Requirement</th>
                            <th scope="col" className="px-6 py-3">Credits</th>
                            <th></th>
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
                                <td><DangerButton onClick={() => openModal(subject.subject_time_id)}>Drop</DangerButton></td>
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
        </AuthenticatedLayout>
        </>
    )
}