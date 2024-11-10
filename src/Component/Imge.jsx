import photo from '../assets/image.png';
import { motion } from 'framer-motion';

const Imge = () => {
  return (
      
    <div className="w-[400px] h-[400px] rounded-full overflow-hidden b  "style={{ boxShadow: 'rgba(72, 135, 202, 0.8) 0 0 90px 33px' }} > 
      <motion.img
        src={photo}
        className="w-full h-full object-cover"
        alt="Jumping Image"
        animate={{
          y: [0, -10, 0], // Moves up to -20px, then back to 0px
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        style={{
          width: "100%",  // Ensure the width and height are 100% of the parent container
          height: "100%",
          borderRadius: "50%",  // Make the image fully round
          boxShadow: 'rgba(72, 135, 202, 0.8) 0 0 90px 33px'
        }}
      />
    </div>
  );
};

export default Imge;
