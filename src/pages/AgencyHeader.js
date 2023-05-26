import Cov from '../assets/cov.png';
import coca from '../assets/coca.svg';
import gql from '../assets/gql.svg';
import erti from '../assets/101.svg';
import ori from '../assets/102.svg';
import sami from '../assets/103.svg';
import otxi from '../assets/104.svg';
import xuti from '../assets/105.svg';
import eqvsi from '../assets/106.svg';
import google from '../assets/google.svg';
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";
import { Footer } from './Footer';

export const AgencyHeader = () => {
    return (

          <div className="relative">
            <nav className="absolute top-0 left-0 right-0 z-10 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
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
              <img src={Cov} alt="Cover" className="max-w-full object-cover lampimg" />
            </div>

            <div className="a-homediv">
                <h3 className="text-white font-extralight text-xl mb-3">We strongly Believe that</h3>
                <h1 className="text-white font-bold mb-8 text-6xl">IDEAS MATTER</h1>
                <button type="button" className="readmorebtn text-white w-48 hover:underline decoration-1 bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-3xl px-2 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800">Read More</button>
            </div>

            <div className="logodivi bg-black">

              <div>
                <p className="costumers text-white text-center font-extralight text-2xl pt-12">Our Costumers</p>
                
                <div className="flex justify-around items-center mt-12 logowrapper">
                  <span>
                    <img className='logoimg' src={coca} alt='Coca-Cola' />
                  </span>
                  <span>
                    <img className='logoimg' src={gql} alt='Coca-Cola' />
                  </span>
                  <span>
                    <img className='logoimg' src={google} alt='Coca-Cola' />
                  </span>
                </div>
              </div>
              
            </div>

            <div className='iconsWrapper'>

              <div>
                <p className='pt-16 pb-24 text-white font-extralight text-2xl text-center ourServices'>Our Services</p>

                <div className='flex justify-around iconsdivi1'>
                  <div className='flex flex-col items-center w-60 text-center eachDiv'>
                    <img className='w-28 mb-8 iconimages img101' src={ori} alt='IconOne' />
                    <h4 className='text-white font-medium text-xl mb-5 h4texts'>Branding</h4>
                    <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
                  </div>
                  <div className='flex flex-col items-center w-60 text-center eachDiv'>
                    <img className='w-28 mb-5 iconimages img102' src={erti} alt='IconOne' />
                    <h4 className='text-white font-medium text-xl mb-5 h4texts'>Marketing Strategy</h4>
                    <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
                  </div>
                  <div className='flex flex-col items-center w-60 text-center eachDiv'>
                    <img className='mb-6 w-24 iconimages img103' src={otxi} alt='IconOne' />
                    <h4 className='text-white font-medium text-xl mb-5 h4texts'>Digital Marketing</h4>
                    <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
                  </div>
                </div>

                <div className='flex justify-around mt-16 iconsdivi1 d1'>
                  <div className='flex flex-col items-center w-60 text-center eachDiv'>
                    <img className='w-20 mb-7 iconimages img104' src={sami} alt='IconOne' />
                    <h4 className='text-white font-medium text-xl mb-5 h4texts'>Copywrighting</h4>
                    <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
                  </div>
                  <div className='flex flex-col items-center w-60 text-center eachDiv'>
                    <img className='w-28 mb-5 iconimages img105' src={xuti} alt='IconOne' />
                    <h4 className='text-white font-medium text-xl mb-5 h4texts'>Web Development</h4>
                    <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
                  </div>
                  <div className='flex flex-col items-center w-60 text-center eachDiv'>
                    <img className='mb-6 w-24 iconimages img106' src={eqvsi} alt='IconOne' />
                    <h4 className='text-white font-medium text-xl mb-5 h4texts'>Design</h4>
                    <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
                  </div>
                </div>
              </div>

            </div>
            <Footer />

          </div>
    
    )
}