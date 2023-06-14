
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import CoverMarketing from '../assets/coverMarketing.png';

export const MarketingPage = () => {
    return (
        <div>
            <div className="Cover-wrapper">

                <img className="absolute Cover-img brightness-75" src={CoverMarketing} alt="Cover" />

                <div className="relative z-10">
                    <Header />
                </div>

                <div className="absolute branding-div top-36 pl-20 flex flex-col items-start max-w-4xl mx-auto ">
                    <span className="text-white font-bold text-6xl text-branding">
                        Marketing
                    </span>
                    <span className="text-white font-bold text-5xl pt-3 text-branding">
                        Strategy & Plan
                    </span>
                    
                    <span className="text-chven max-w-4xl text-white font-light text-md mt-8 pl-1">
                        იმისთვის რომ კამპანია წარმატებული იყოს, ყველა ბრენდს სჭირდება გაწერილი სტრატეგია, ხედვა, სამოქმედო ნაბიჯები,
                        დრო - რა დროშიც უნდა განახორციელოს ეს ქმედებები,
                        შედეგი- რა შედეგია მისთვის წარმატებული კამპანიის საზომი. 
                        სწორი სტრატეგია ნიშნავს გქონდეს ძლიერი იარაღი იმისთვის, რომ განსაზღვრო გადადგმული ნაბიჯები,
                        ჩადებული ინვესტიცია და შედეგები, კომპანიის ძლიერი და სუსტი მხარეები, იმისთვის რომ გააანალიზო რა პოზიციაზეა
                        თქვენი კომპანია და სად არიან თქვენი მომხმარებლები, რომ იპოვოთ ყველაზე მოკლე გზა მათთან მისასვლელად.
                        ჩვენ დაგეხმარებით მიზნების სწორად დასახვაში და ერთად ვიპოვით ყველაზე ეფექტიან გზას მიზნამდე მისასვლელად
                    </span>
                    <div className="pl-6 bullets">
                        <span className="text-bullets text-white text-xl mt-12 list-item pl-1">მარკეტინგული სტრატეგია</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ბაზრის სეგმენტაცია და სამიზნე ბაზრების იდენტიფიცირება</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">მოკლევადიანი და გრძელვადიანი მიზნები</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ბაზრის კვლევა, კონკურენტების ანალიზი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">მარკეტინგული ტაქტიკური გეგმა/ბიუჯეტირება</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">კონტროლის მექანიზმები და შეფასების ინდიკატორები</span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
