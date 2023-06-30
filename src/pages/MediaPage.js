import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import coverMedia from "../assets/covermedia.png";
import coverMediaMobile from "../assets/mob-media.png";

export const MediaPage = () => {
    return (
        <div>

            <div className="Cover-wrapper-marketing">

                <img className="absolute Cover-img-marketing brightness-75" src={coverMedia} alt="Cover" />
                <img className="absolute Coverimg-Media-mobile brightness-75" src={coverMediaMobile} alt="Cover" />

                <div className="relative z-10">
                    <Header />
                </div>

                <div className="absolute branding-div top-36 pl-20 flex flex-col items-start max-w-4xl mx-auto ">
                    <span className="text-white font-bold text-6xl text-branding">
                        Digital Media
                    </span>

                    <span className="text-chven text-marketing max-w-4xl text-white font-light text-md mt-8 pl-1">
                        ციფრული მედიის გამოყენება სასიცოცხლოდ მნიშვნელოვანია ნებისმიერი კომპანიისთვის,
                        ციფრული არხებისა და სოციალური მედიის მეშვეობით, შეგიძლიათ დაზოგოთ კომპანიის
                        მნიშვნელოვანი ბიუჯეტი, მარტივად მიწვდეთ უფრო ფართო აუდიტორიას, სცადოთ სხვადასხვა
                        ტიპის ოპტიმიზაცია, ლაივ რეჟიმში აკონტროლოთ ხარჯები და მიღებული შედეგები და
                        ზუსტად შეაფასოთ კამპანიის ძლიერი და სუსტი მხარეები.
                    </span>
                    <div className="pl-6 bullets">
                        <span className="text-bullets text-white text-xl mt-12 list-item pl-1">ციფრული მარკეტინგის სტრატეგია</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">სოციალური მედია სტრატეგია</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ციფრული მარკეტინგის და სოციალური მედიის გეგმა</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ბიუჯეტირება/რეპორტინგი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">ი-მეილ მარკეტინგი</span>
                        <span className="text-bullets text-white text-xl mt-3 list-item pl-1">რეტარგეტინგი/რემარკეტინგი</span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
