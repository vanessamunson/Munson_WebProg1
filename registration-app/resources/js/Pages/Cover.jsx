import { Link } from "@inertiajs/react";

export default function Cover() {
    return (
        <>
        <h1>College of Winterhold Student Portal</h1>
        <div>
            <Link href="">Log In</Link>
            <Link href="/students/create">Sign Up</Link>
        </div>
        </>
    );
};