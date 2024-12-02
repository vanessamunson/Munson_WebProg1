export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/images/logo.png" 
            alt="Application Logo"
            className="h-14"
        />
    );
}
