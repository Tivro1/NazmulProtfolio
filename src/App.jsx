
import { NavLink } from 'react-router-dom';
import './App.css'
// import { motion } from 'framer-motion';
import titel from './assets/naz.png';
function App() {
 

  return (
    
        <div>

               <nav>
                        <div>
                          <img src={titel}></img>
                        </div>
                        <div>
                             <NavLink to="/about">About</NavLink>
                             <NavLink to="/skills">Skills</NavLink>
                             <NavLink to="/contact">Contact</NavLink>
                        </div>
               </nav>


        </div>
            



















    //       <div className='w-5 h-5'>
    //          <motion.img
    //   src={titel} className='w-5 h-5 object-cover'
    //   alt="Jumping Image"
    //   animate={{
    //     y: [0, -10, 0], // Moves up to -20px, then back to 0px
    //   }}
    //   transition={{
    //     duration: 1,
    //     repeat: Infinity,
    //     repeatType: "loop",
    //     ease: "easeInOut"
    //   }}
    //   style={{
    //     width: "200px",
    //     borderRadius: "10px",
    //   }}
    // />
    //       </div>

  )
}

export default App
