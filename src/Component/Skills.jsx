import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import EducationTable from "./EducationTable";
import { useState } from "react";


const Skills = () => {

      const [display , setDisplay] = useState(false);
      const handelButton = ()=>
      {
            setDisplay(true);
      }

    return (
        <div className="flex flex-col gap-5 w-full items-center justify-center">
             <div className="w-full flex flex-row items-center justify-center gap-10">
            <div>
                <h2 className="text-3xl text-yellow-50 text-center">HTML</h2>
                <div className="relative">
                    <CircularProgressBar
                        percent={97}
                        styles={{
                            borderRadius: '50%',
                            boxShadow: 'inset 0 0 25px 10px #a2caff',
                            backgroundColor: '#e0e0e0', // Light background for the circle
                            circleColor: '#FF6347', // Red color for the progress
                            fill: '#FF6347', // Fill color for progress (red)
                        }}
                    >
                        {/* Custom percentage text inside the circle */}
                       
                    </CircularProgressBar>
                </div>
            </div>

            <div>
                <h2 className="text-3xl text-yellow-50 text-center">CSS & Tailwind</h2>
                <div className="relative">
                    <CircularProgressBar
                        percent={96}
                        styles={{
                            borderRadius: '50%',
                            boxShadow: 'inset 0 0 25px 10px #a2caff',
                            backgroundColor: '#e0e0e0', // Light background for the circle
                            circleColor: '#4682B4', // Blue color for the progress
                            fill: '#4682B4', // Fill color for progress (blue)
                        }}
                    >
                        {/* Custom percentage text inside the circle */}
                        
                    </CircularProgressBar>
                </div>
            </div>

            <div>
                <h2 className="text-3xl text-yellow-50 text-center">JavaScript</h2>
                <div className="relative">
                    <CircularProgressBar
                        percent={70}
                        styles={{
                            borderRadius: '50%',
                            boxShadow: 'inset 0 0 25px 10px #a2caff',
                            backgroundColor: '#e0e0e0', // Light background for the circle
                            circleColor: '#FFD700', // Gold color for the progress
                            fill: '#FFD700', // Fill color for progress (gold)
                        }}
                    >
                        {/* Custom percentage text inside the circle */}
                        
                    </CircularProgressBar>
                </div>
            </div>

            <div>
                <h2 className="text-3xl text-yellow-50 text-center">React JS</h2>
                <div className="relative">
                    <CircularProgressBar
                        percent={65}
                        styles={{
                            borderRadius: '50%',
                            boxShadow: 'inset 0 0 25px 10px #a2caff',
                            backgroundColor: '#e0e0e0', // Light background for the circle
                            circleColor: '#8A2BE2', // Blue-Violet color for the progress
                            fill: '#8A2BE2', // Fill color for progress (blue-violet)
                        }}
                    >
                        {/* Custom percentage text inside the circle */}
                        
                    </CircularProgressBar>
                </div>
            </div>

            <div>
                <h2 className="text-3xl text-yellow-50 text-center">C</h2>
                <div className="relative">
                    <CircularProgressBar
                        percent={67}
                        styles={{
                            borderRadius: '50%',
                            boxShadow: 'inset 0 0 25px 10px #a2caff',
                            backgroundColor: '#e0e0e0', // Light background for the circle
                            circleColor: '#FF4500', // Orange-Red color for the progress
                            fill: '#FF4500', // Fill color for progress (orange-red)
                        }}
                    >
                        {/* Custom percentage text inside the circle */}
                        
                    </CircularProgressBar>
                </div>
            </div>
            </div>
                      <div className="mt-4">
                         <EducationTable></EducationTable>
                      </div>
                      <div>
                      <button onClick={handelButton} className="btn btn-outline btn-secondary">Click for Known Extra Skills</button>
                
                      </div>
                      <div className={display === true?'p-3 border border-pink-200 rounded-lg bg-[#272727]':'hidden'}>
                            <div className="w-[600px] h-[300px] rounded-xl border border-gray-100 flex flex-col items-center justify-center text-yellow-100">
                                 <h1><strong>IELTS</strong> Score: 6.5 out of 9</h1>
                                 <strong>09 Jan 2024</strong>
                                 <hr className="w-[90%] bg-slate-400"></hr><br></br>
                                 <p className="text-center">The International English Language Testing System (IELTS) is a globally recognized English language proficiency test.
                                     It’s developed and run by the British Council in partnership with IDP Education and Cambridge Assessment English.
                                      IELTS is aimed at people who want to study, work, or emigrate to an English-speaking environment or get a job in their own country where 
                                      English proficiency is required. And I got 6.5 overall and 7 band in speaking</p>

                            </div>
                      </div>
                    
        </div>
    );
};

export default Skills;
