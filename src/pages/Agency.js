import { Header } from "../components/Header";
import Cover from '../assets/cov.png';
import CoverMob from '../assets/cov-mobile.png';
import coca from '../assets/coca.svg';
import gql from '../assets/gql.svg';
import google from '../assets/google.svg';
import erti from '../assets/101.svg';
import ori from '../assets/102.svg';
import sami from '../assets/103.svg';
import otxi from '../assets/104.svg';
import xuti from '../assets/105.svg';
import eqvsi from '../assets/106.svg';
import { Footer } from "../components/Footer";



export const Agency = () => {
  return (
    <div>

      <div className="Cover-wrapper">
        <img className="absolute Cover-img" src={Cover} alt="Cover"/>

        <div className="relative">
          <Header />
        </div>

        <div className="relative flex flex-col items-start max-w-screen-xl p-4 mt-32 mx-auto lg:px-10 readMore-wrapper ">
          <h3 className="text-white we-strongly font-extralight text-xl mb-3">We strongly Believe that</h3>
          <h1 className="text-white ideas-matter font-bold mb-8 text-6xl">IDEAS MATTER</h1>
          <button type="button" className="mt-12 readMore-btn text-white w-48 hover:underline decoration-1 bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-3xl px-2 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800">Read More</button>
        </div>
      </div>

      <div className="bg-black h-52">
        <p className=" text-white our-costumer text-center font-extralight text-2xl pt-8">Our Costumers</p>
        <div className="flex justify-around items-center mt-12 ">
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

      <div className="w-full iconsWrapper">
        <div className="max-w-screen-xl mx-auto">
          <p className='pt-16 pb-24 text-white font-extralight text-2xl text-center ourServices'>Our Services</p>

          <div className='flex justify-around iconsdivi1'>
            <div className='flex flex-col items-center w-60 text-center eachDiv'>
              <img className='w-28 mb-8 iconimages img101' src={ori} alt='IconOne' />
              <h4 className='text-white font-medium text-xl mb-5 h4texts'>Branding</h4>
              <p className='text-white font-light text-sm ptext'>Body Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
            </div>
            <div className='flex flex-col items-center w-60 text-center eachDiv'>
              <img className='w-28 mb-5 iconimages img102' src={erti} alt='IconOne' />
              <h4 className='text-white font-medium text-xl mb-5 h4texts'>Marketing Strategy</h4>
              <p className='text-white font-light text-sm ptext'>Body Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
            </div>
            <div className='flex flex-col items-center w-60 text-center eachDiv'>
              <img className='mb-6 w-24 iconimages img103' src={otxi} alt='IconOne' />
              <h4 className='text-white font-medium text-xl mb-5 h4texts'>Digital Marketing</h4>
              <p className='text-white font-light text-sm ptext'>Body Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
            </div>
          </div>

          <div className='flex justify-around mt-16 iconsdivi1 iconsdivi1-2 d1'>
            <div className='flex flex-col items-center w-60 text-center eachDiv'>
              <img className='w-20 mb-7 iconimages img104' src={sami} alt='IconOne' />
              <h4 className='text-white font-medium text-xl mb-5 h4texts'>Copywrighting</h4>
              <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
            </div>
            <div className='flex flex-col items-center w-60 text-center eachDiv'>
              <img className='w-28 mb-5 web-dev-icon iconimages img105' src={xuti} alt='IconOne' />
              <h4 className='text-white font-medium text-xl mb-5 h4texts'>Web Development</h4>
              <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
            </div>
            <div className='flex flex-col items-center w-60 text-center eachDiv'>
              <img className='mb-6 w-24 web-design-icon iconimages img106' src={eqvsi} alt='IconOne' />
              <h4 className='text-white font-medium text-xl mb-5 h4texts'>Design</h4>
              <p className='text-white font-light text-sm ptext'>Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here Body Text Comes here </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
};
