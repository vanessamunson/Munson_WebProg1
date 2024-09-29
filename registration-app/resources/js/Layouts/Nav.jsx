import { useState } from "react";
import { Link } from "@inertiajs/react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai"

export default function Nav({children}) {

    const [isOpen, setIsOpen] = useState({
        subjects: false,
        performance: false,
        myInfo: false,
    });

    const open = (dropdownName) => {
        setIsOpen((prev) => ({
            ...prev,
            [dropdownName]: !prev[dropdownName],
        }))
    }

    return (
        <>
            <header>

                <div className="flex items-center" style={{backgroundColor: 'rgba(8,17,50,255)'}}>
                    <div className="h-32 w-32">
                        <img className="px-4 max-h-full" src='/images/logo.jpg'/>
                    </div>
                    <h1 className="text-white text-xl p-4">College of Winterhold</h1>
                </div>

                <nav className="flex">
                    <div className="relative flex flex-col items-center w-[200px] rounded-lg p-4">
                        <button 
                        onClick={() => open('subjects')}
                        className="bg-blue-400 p-4 w-full flex items-center justify-between text-lg rounded-lg font-bold tracking-wider border-4 border-transparent active:border-white duration:300 active:text-white"
                        >
                            Subjects
                            {!isOpen.subjects ? (
                                <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )}
                        </button>

                        {isOpen.subjects && (
                            <>
                                <div className="z-10 bg-blue-400 flex flex-col absolute top-20 items-start rounded-lg p-2 w-full">
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/subjects'>Register for Subject</Link>
                                    </div>
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/registeredsubjects'>Registered Subjects</Link>
                                    </div>
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/previoussubjects'>Previous Subjects</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="relative flex flex-col items-center w-[200px] rounded-lg p-4">
                        <button 
                        onClick={() => open('performance')} 
                        className="bg-blue-400 p-4 w-full flex items-center justify-between text-lg rounded-lg font-bold tracking-wider border-4 border-transparent active:border-white duration:300 active:text-white"
                        >
                            Subjects
                            {!isOpen.performance ? (
                                <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )}
                        </button>

                        {isOpen.performance && (
                            <>
                                <div className="z-10 bg-blue-400 flex flex-col absolute top-20 items-start rounded-lg p-2 w-full">
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/subjects'>Grades</Link>
                                    </div>
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/subjects'>Attendance</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="relative flex flex-col items-center w-[200px] rounded-lg p-4">
                        <button 
                        onClick={() => open('myInfo')}
                        className="bg-blue-400 p-4 w-full flex items-center justify-between text-lg rounded-lg font-bold tracking-wider border-4 border-transparent active:border-white duration:300 active:text-white"
                        >
                            My Info
                            {!isOpen.myInfo ? (
                                <AiOutlineCaretDown className="h-8" />
                            ) : (
                                <AiOutlineCaretUp className="h-8" />
                            )}
                        </button>

                        {isOpen.myInfo && (
                            <>
                                <div className="z-10 absolute bg-blue-400 flex flex-col top-20 items-start rounded-lg p-2 w-full">
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointer rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/subjects'>Subjects</Link>
                                    </div>
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/subjects'>Subjects</Link>
                                    </div>
                                    <div className="flex w-full p-4 font-bold hover:bg-blue-300 cursor-pointor rounded-right-lg border-l-transparent hover:border-l-white border-l-4">
                                        <Link href='/subjects'>Subjects</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </header>

            <main className="z-0">
                {children}
            </main>
        </>
    )
}