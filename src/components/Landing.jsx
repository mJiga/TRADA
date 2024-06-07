import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import backgroundImage from '../assets/images/stock-bg3.png';

function Landing() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showx');
                }else{
                    entry.target.classList.remove('showx');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hiddenx');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className="bg-black min-h-screen font-Poppins text-white flex flex-col flex-auto items-center shadow-lg text-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <>
                <header className='font-bold text-2xl p-6 '>
                    <Link to='/'>TRADA</Link>
                </header>
            </>
            <div className='p-60'>
                <div>
                    <h1 className=' hiddenx font-bold text-8xl'>
                        TRADING: <span className="text-fuchsia-600">REINVENTED</span>
                    </h1>
                    <p className=' hiddenx text-2xl p-6'>
                        Trade Smart, Trade Together, Powered by AI.
                    </p>
                </div>
                <button className=' hiddenx mt-10'>
                    <Link to='/auth' className='duration-300 ease-in-out hover:bg-fuchsia-600 font-medium w-full text-2xl p-4 bg-transparent border border-fuchsia-600 rounded-2xl'> Get Started </Link>
                </button>
            </div >
            <footer className='mt-24 font-light text-xs'>© 2024 GJG & OGC</footer>
        </div>
    )
}

export default Landing
