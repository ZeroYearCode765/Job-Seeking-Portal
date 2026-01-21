import { Link } from "react-router"

export default function Header() {
    return(
        <>
        <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
            {/* App Name / Logo */}
            <h1 className="text-2xl font-bold text-blue-700">
                CareerConnect
            </h1>

            {/* Navigation Links */}
            <nav className="space-x-6 text-gray-700 font-medium">
                <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
                Home
                </Link>
                <Link to="/jobs" className="hover:text-blue-600 transition-colors duration-200">
                Jobs
                </Link>
                <Link to="/applied" className="hover:text-blue-600 transition-colors duration-200">
                Applied Jobs
                </Link>
            </nav>
        </div>


        </>
    )
}