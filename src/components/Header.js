import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'


export const Header = () => {
    return (
        <div>

            <nav className=" dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:px-10">
                    <a href="#" className="flex items-center">
                        <img src={Logo} className="h-6 mr-3 logo" alt="Adhub Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className=" w-full px-2 md:block md:w-auto" id="navbar-default">
                        <ul className="font-light rounded-lg mx-auto bg-black flex flex-col p-4 md:p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 dark:bg-gray-800 md:bg-transparent dark:border-gray-700">
                        <li>
                      <Link
                        to="/agency"
                        className="block py-2 pl-3 pr-4 cursor-pointer  text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:underline decoration-1 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="block py-2 pl-3 pr-4 cursor-pointer text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:underline decoration-1 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/news"
                        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:underline decoration-1 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        News
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutus"
                        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:underline decoration-1 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:underline decoration-1 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Contact
                      </Link>
                    </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
