import Modal from '@/Components/Modal';

export default function RegisterForSubject(subject, subjecttime, lecturer, id) {
    // console.log(subject);
    // console.log(subjecttime);
    // console.log(lecturer);
    console.log(id);

    return (
        <>
        <Modal show={true}>
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Register for Subject
            </h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <p>{subject.description}</p>
        </Modal>
        </>
    )
}