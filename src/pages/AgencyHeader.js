import { Link } from "react-router-dom";
import Cov from '../assets/cov.png'
import logo from '../assets/logo.svg';

export const AgencyHeader = () => {
    return (

    // <div className="relative">
    //     <div className="absolute inset-0">
    //         <img src={Cov} alt="Cover" className="w-full h-full object-cover"/>
    //     </div>

    //     <nav className="absolute top-0 left-0 right-0  border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //         <Link to="/agency" className="flex items-center">
    //             <img src={logo} className="h-8 mr-3" alt="Logo" />
    //         </Link>
    //         <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
    //         <span className="sr-only">Open main menu</span>
    //         <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    //         </button>
    //         <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
    //         <ul className="flex flex-col font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    //             <li>
    //                 <Link to="/agency" className="block py-2 pl-3 pr-4 cursor-pointer  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/services" className="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
    //             </li>
    //             <li>
    //                 <Link to="/news" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</Link>
    //             </li>
    //             <li>
    //                 <Link to="/aboutus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</Link>
    //             </li>
    //             <li>
    //                 <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    //     </nav>
    // </div>


        

          <div className="relative">
            <nav className="absolute top-0 left-0 right-0 z-10 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                <Link to="/agency" className="flex items-center">
                  <img src={logo} className="h-6 mr-3" alt="Logo" />
                </Link>
                <button
                  data-collapse-toggle="navbar-solid-bg"
                  type="button"
                  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-solid-bg"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className="hidden w-full md:block md:w-auto" //hidden class removed 
                  id="navbar-solid-bg"
                >
                  <ul className="flex flex-col font-light rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
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
      
            <div className="relative">
              <img src={Cov} alt="Cover" className="max-w-full object-cover" />
            </div>

            <div className=" a-homediv">
                <h3 className="text-white font-extralight text-xl mb-3">We strongly Believe that</h3>
                <h1 className="text-white font-bold mb-8 text-6xl">IDEAS MATTER</h1>
                <button type="button" className="text-white hover:underline decoration-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read More</button>
            </div>
            <div className="h-72 bg-black w-full ">
              <p className="text-white text-center font-extralight text-xl p-6">Our Costumers</p>
              </div>
          </div>

      


    
      

    
    )
}