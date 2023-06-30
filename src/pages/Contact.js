import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ContactCover from '../assets/coverContactus.png';
import ContactCoverMob from '../assets/mob-contactus.png';
import emailicon from "../assets/emailicon.svg";
import phoneicon from "../assets/phoneicon.svg";


export const Contact = () => {
  return (
    <div>
      <div className="Cover-wrapper-ContacUs">

        <img className="absolute Cover-img-ContactUs brightness-75" src={ContactCover} alt="Cover" />
        <img className="absolute Coverimg-ContactUs-mobile brightness-75" src={ContactCoverMob} alt="Cover" />

        <div className="relative z-10">
          <Header />
        </div>

        <div className="absolute branding-div top-44 pl-20 flex flex-col items-start max-w-4xl mx-auto ">
          <span className="text-white font-bold text-6xl text-branding">
            Contact us
          </span>

          <span className="text-chven text-marketing max-w-2xl text-white font-light text-2xl mt-16 pl-1 flex items-center">
            <div className="w-7 h-5 mr-6">
              <img src={emailicon} alt="icon" />
            </div>
            info@adhub.ge
          </span>

          <span className="text-chven text-marketing max-w-2xl text-white font-light text-2xl mt-8 pl-1 flex items-center">
            <div className="w-7 h-8 mr-5">
              <img src={phoneicon} alt="icon" />
            </div>
            +995 551 21 28 22
          </span>

        </div>

      </div>

      <Footer />
    </div>
  )
};