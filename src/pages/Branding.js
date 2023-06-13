import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import CoverBranding from "../assets/brandingCov.png";


export const Branding = () => {



    return (
        <div>

            <div className="Cover-wrapper">

                <img className="absolute Cover-img brightness-75" src={CoverBranding} alt="Cover" />

                <div className="relative">
                    <Header />
                </div>

                <div className="absolute branding-div top-40 left-32 right-0 flex flex-col max-w-lg ">
                   <span className="text-white font-bold text-6xl text-branding">Branding</span>
                   <span className="text-chven max-w-lg text-white font-light text-md mt-16 pl-1">
                        ჩვენ მზად ვართ შევქნათ თქვენი ბრენდი ნულიდან,
                        კრეატიული სამყაროს ყველაზე საინტერესო და ამაღელვებელი 
                        პროცესი<br /> სწორედ ბრენდის ნულიდან ნაბიჯ-ნაბიჯ შექმნაა
                    </span>
                    <div className="pl-6 bullets">
                        <span className="text-bullets text-white text-xl mt-12 list-item pl-1">ბრენდის იდენტობის შექმნა</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">საკომუნიკაციო სტილი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">TONE OF VOICE</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">პრეზენტაციის ნიმუში</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">საიტის ნიმუში</span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
