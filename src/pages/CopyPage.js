
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import CoverCopy from "../assets/coverCopy.png";


export const CopyPage = () => {
    return (
        <div>
            <div className="Cover-wrapper">

                <img className="absolute Cover-img brightness-75" src={CoverCopy} alt="Cover" />

                <div className="relative z-10">
                    <Header />
                </div>

                <div className="absolute branding-div top-36 pl-20 flex flex-col items-start max-w-4xl mx-auto ">
                    <span className="text-white font-bold text-6xl text-branding">
                        Copywrighting
                    </span>
                    <span className="text-chven max-w-4xl text-white font-light text-md mt-8 pl-1">
                        დღეს კომპანიები უკვე თანხმდებიან რომ საჭიროა ყავდეთ ცალკე კადრი ქოფირაითერის
                        პოზიციაზე, ვინც იცის როგორ იმუშაოს სწორად ვებ-გვერდისთვის, როგორ შექმნას ტექსტი
                        ბროშურისთვის, სოციალური მედიისთვის და ა.შ. უფრო მეტიც, ბევრ დიდ კომპანიას თითოეული
                        ამ მიმართულებისთვის ცალკე სპეციალიზირებული კადრები ყავთ. ჩვენ ვიკვლევთ, ვაანალიზებთ და
                        ვადგენთ თქვენს მომხმარებლებთან საკომუნიკაციო სტილს, სასაუბრო ენას, ვიცით როგორ შევქმნათ
                        საინტერესო ამბავი და დავამყაროთ ემოციური კავშირი თქვენს მომხმარებლებთან.
                    </span>
                    <div className="pl-6 bullets">
                        <span className="text-bullets text-white text-xl mt-12 list-item pl-1">სახელი, სლოგანი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ვებ-გვერდის კონტენტი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ნებისმიერი სახის სარეკლამო ხასიათის პრეზენტაციის,<br /> ბროშურის, ლიფლეტის ტექსტი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">პრესრელიზის/სტატიის შინაარსი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ბლოგი KEYWORD-ების გათვალისწინებით SEO ოპტიმიზაციისთვის</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">სოციალური მედიის კონტენტი</span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
