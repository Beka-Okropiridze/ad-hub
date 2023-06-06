import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import CoverAboutUs from '../assets/aboutusCov.png';


export const AboutUs = () => {
  return (
    <div>

      <div className="Cover-wrapper">

        <img className="absolute Cover-img brightness-75" src={CoverAboutUs} alt="Cover" />

        <div className="relative">
          <Header />
        </div>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center ">
          <button className="text-white font-semibold text-4xl text-center border-2 px-10 py-2 rounded-full about-us-btn border-violet-500">About us</button>
        </div>

      </div>

      <div className="textWrapper-aboutUs">
        <div className=" max-w-screen-lg mx-auto p-7">
          <p className="text-white text-xl font-light text-center mt-16 about-us-paragraph">
            ედჰაბი წარმოადგენს ,,FULL SERVICE” კრეატიულ სააგენტოს. ჩვენ გვჯერა, რომ ყველაფერი იწყება იდეით.
            ნებისმიერ კომპანიას შეუძლია შექმნას საინტერესო კამპანია, რომელის გამოიწვევს საზოგადოების ინტერესსა
            და ჩართულობას,მაგრამ მხოლოდ განსაკუთრებული იდეის მქონე კამპანიები რჩება ადამიანების გონებაში 
            დიდი ხნის განმავლობაში. სწორედ ამ მიზანს ემსახურება ედჰაბი, შევქმნათ უნიკალური, განსაკუთრებული,
            არაორდინალური კამპანიები, ისეთი, რომელიც აქამდე ჯერ არ შექმნილა და რომელიც წლების განმავლობაში
            დარჩება ადამიანებს სასაუბროდ.ჩვენ გვჯერა, რომ რეკლამა არ არის მხოლოდ კარგი დიზაინი და ეფექტური
            საკომუნიკაციო მესიჯები, მასში ჩანს ბრენდის მთელი ფილოსოფია, გამოხატავს ბრენდის ხასიათს და წარმოდგენას ქმნის მის იმიჯზე.
          </p>
        </div>
      </div>

      <Footer />

    </div>
  )
}
