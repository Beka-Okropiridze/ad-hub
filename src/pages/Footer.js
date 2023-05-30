import logo from '../assets/logo.svg';


export const Footer = () => {

    return (
        <footer className=' bg-black h-96 mx-auto w-full absolute'>
            <div className='max-w-screen-xl mx-auto'>
                <img className='h-6 w-40 relative top-14' src={logo} alt='Logo' />
                
                <div className='footer-div relative top-20 mx-auto p-8 flex justify-between'>
                    <div className='flex flex-col text-white font-light text-lg'>
                        <p className='mb-8'>Home</p>
                        <p className='mb-8'>About Us</p>
                        <p>Location</p>
                    </div>

                    <div className='flex flex-col mr-64 footer-sec2 text-white font-light text-lg'>
                        <p className='mb-8'>Services</p>
                        <p className='mb-8'>Contact</p>
                    </div>

                    <div className='flex flex-col footer-last-sec text-white font-light text-lg justify-end'>
                        <p className='mb-8 self-end'>News</p>
                        <p className='mb-8 self-end'>FAQ</p>
                        <div className='bg-white w-52 h-7 rounded-3xl flex justify-end'>
                            <button type='button' className='bg-violet-500 rounded-3xl pr-3 pl-3'>Send</button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
