import logo from '../assets/logo.svg';


export const Footer = () => {
    return (
        <footer className='w-full bg-black h-96 absolute'>
            <div className="relative">

                <div >
                    <img src={logo} />
                </div>

                <div className='flex justify-around text-white'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Location</p>
                </div>

                <div className='flex justify-around text-white'>
                    <p>Services</p>
                    <p>Contact</p>
                    <p>Phone</p>
                </div>

                <div className='flex justify-around text-white'>
                    <p>News</p>
                    <p>Faq</p>
                    <p>Mail</p>
                </div>

            </div>
        </footer>
    )
}
