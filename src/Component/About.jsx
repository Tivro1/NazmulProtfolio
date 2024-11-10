/* In src/index.css or App.css */
import { AiOutlineException } from "react-icons/ai";
import About2 from "./About2";


const About = () => {
    return (
        <div>
            
            <div className="e-card playing relative w-[600px] h-[300px] bg-transparent rounded-lg overflow-hidden mx-auto mt-24 border border-purple-400">
                {/* First Wave */}
                <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 ml-[-50%] mt-[-70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave"></div>

                {/* Second Wave */}
                <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] ml-[-50%] mt-[-70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-second"></div>

                {/* Third Wave */}
                <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] ml-[-50%] mt-[-70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-wave-third"></div>

                {/* Info Section */}
                <div className="infotop text-center text-white text-lg font-semibold absolute  left-0 right-0 mt-7">
                    <div className="w-full flex  justify-center mb-4"><AiOutlineException className="text-3xl "></AiOutlineException></div>
                    <div className="name text-sm font-light lowercase mt-2">
                        <p className="text-orange-100 first-letter:uppercase  "><strong className="text-xl">I am a dedicated   </strong>community advocate with a strong background  in education, healthcare
support, and social initiatives. Currently, I am focused on leveraging my skills to make a positive
impact in my community. I am passionate about empowering others, particularly through
education and health advocacy. My experiences range from teaching science and math to underprivileged students to leading blood donation campaigns. I thrive in collaborative environments and am always eager to learn and grow, both personally and professionally.</p>
                    </div>
                </div>
            </div>

                   <About2></About2>

        </div>
    );
};

export default About;