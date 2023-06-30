import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import designCover from '../assets/coverdesign.png';
import CoverDesignMobile from '../assets/mob-desing.png';


export const DesignPage = () => {
    return (
        <div>

            <div className="Cover-wrapper-marketing">

                <img className="absolute Cover-img-marketing brightness-75" src={designCover} alt="Cover" />
                <img className="absolute Coverimg-marketing-mobile brightness-75" src={CoverDesignMobile} alt="Cover" />

                <div className="relative z-10">
                    <Header />
                </div>

                <div className="absolute branding-div top-36 pl-20 flex flex-col items-start max-w-4xl mx-auto ">
                    <span className="text-white font-bold text-6xl text-branding">
                        Design
                    </span>

                    <span className="text-chven text-marketing max-w-2xl text-white font-light text-md mt-8 pl-1">
                        ჩვენ აქ ვართ იმისთვის, რომ შევქმნათ ყველაზე მიმზიდველი და დასამახსოვრებელი დიზაინი,
                        რომელიც აუცილებლად მიიქცევს მომხმარებლის ყურადღებას.
                    </span>
                    <div className="pl-6 bullets">
                        <span className="text-bullets text-white text-xl mt-12 list-item pl-1">გრაფიკული დიზაინი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">მოუშენ დიზაინი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ინტერიერის დიზაინი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ექსტერიერის დიზაინი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ლანდშაფტის დიზაინი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">3D ვიზუალიზაცია/3D ანიმაცია</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">360 დიზაინი</span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
