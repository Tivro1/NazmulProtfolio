import titel from '../assets/naz.png';
import Imge from './Imge';
import { TypeAnimation } from 'react-type-animation';
import ParticelContiner from './ParticelContiner';
import '../Css/Nav.css';
import { NavLink, Outlet } from 'react-router-dom';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Fotter from './Fotter';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            <Helmet>
        <title>Nazmul Profile</title>
        <meta name="description" content="This is my page description" />
      </Helmet>
        <nav className="fixed top-0 left-0 w-full h-[80px] flex flex-row justify-between items-center pl-6 pr-6 z-10 backdrop-blur-lg"
            style={{ backgroundImage: 'linear-gradient(109.6deg, rgba(112, 246, 255, 0.33) 11.2%, rgba(221, 108, 241, 0.26) 42%, rgba(229, 106, 253, 0.71) 71.5%, rgba(123, 183, 253, 1) 100.2%)' }}>
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                <img src={titel} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-row gap-6 text-2xl font-medium font-mono">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
            </div>
            <div>
                <div className="dropdown dropdown-end bg-transparent border-none">
                    <div tabIndex={0} role="button" className="btn m-1 bg-transparent">Contact</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className='first-letter:underline'>Phone :+8801988414680</li>
                        <li className='w-[200px]'>Email : ni2nazmul6@gmail.com</li>
                        <li><a href='https://www.facebook.com/profile.php?id=100084288416165'><FaSquareFacebook></FaSquareFacebook></a></li>
                        <li><a href='https://www.linkedin.com/in/nnazmul-islam/'><FaLinkedin></FaLinkedin></a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className='w-full h-[410px] flex justify-start flex-row items-center gap-4 mt-28'>
            <Imge />
            <TypeAnimation
                sequence={[
                    'Hello !',
                    1000,
                    'I am Nazmul Islam.',
                    2000,
                    'Welcome To my profile.',
                    3000,
                    'Click Navbar for More Info!',
                    4000,
                    'Thank You.',
                    () => {
                        console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block', color: 'white', fontWeight: 'bold' }}
            />
        </div>
        <ParticelContiner />
        <div className="flex-grow">
            <Outlet />
        </div>
        {/* Footer will always stay at the bottom */}
        <div className=" mt-[200px] bottom-0 left-0 w-full bg-gray-800 text-white py-4 text-center z-20">
            <Fotter />
        </div>
    </div>
    );
};

export default Home;
