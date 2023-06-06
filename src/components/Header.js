import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'
import { useState } from "react";


export const Header = () => {

  const [hidden, setHidden] = useState(true);
  return (
    <div>

      <nav className=" dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto p-4 lg:px-10">
          <Link to="/agency" className="flex pt-4 ">
            <img src={Logo} className="h-6 mr-3 logo" alt="Adhub Logo" />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full px-2 md:block md:w-auto" id="navbar-default"> 
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
              {/* <Link
                        to="/services"
                        className="block py-2 pl-3 pr-4 cursor-pointer text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:underline decoration-1 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                        Services
                      </Link> */}

              <li>
                <button onClick={() => setHidden(!hidden)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full pl-3 text-white md:hover:underline decoration-1 ">Services <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                { 
                hidden ? (
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 shadow w-44 "> {/* hidden */}
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to="/marketing" className="block px-4 py-2">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/branding" className="block px-4 py-2">Settings</Link>
                    </li>
                    <li>
                      <Link to="/design" className="block px-4 py-2">Earnings</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</Link>
                  </div>
                </div>
                ) : (
                <div id="dropdownNavbar" className=" "> {/* hidden */}
                  <ul className="py-1 text-sm  text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to="/marketing" className="text-white px-3 hover:underline decoration-1">Marketing</Link>
                    </li>
                    <li className="mt-1">
                      <Link to="/branding" className="text-white px-3 hover:underline decoration-1">Branding</Link>
                    </li>
                    <li className="mt-1">
                      <Link to="/design" className="text-white px-3  hover:underline decoration-1">Design</Link>
                    </li>
                  <li className="mt-1">
                    <Link to="/copy" className="text-white px-3 hover:underline decoration-1">Copy</Link>
                  </li>
                  </ul>
                </div>
                )}
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
