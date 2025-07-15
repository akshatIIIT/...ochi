import { motion } from 'framer-motion';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full min-h-screen bg-zinc-900 text-white pt-1">
      {/* Main Heading Section */}
      <div className="textstructure mt-40 px-6 md:px-20">
        {["WE CREATE", "EYE-OPENING", "Presentations"].map((item, index) => {
          return (
            <div className='masker flex' key={index}> 
              <div className="flex w-fit items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: "linear", duration: 0.7 }}
                    className="bg-[#66f731e0] h-[7vw] md:h-[4.8vw] relative -top-[1vw] rounded-md mr-4"
                  ></motion.div>
                )}
                <h1 className="leading-[9vw] md:leading-[5vw] uppercase text-[10vw] md:text-[6vw] font-bold font-['Founders_Grotesk'] tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA Section */}
      <div className="border-t border-slate-300 mt-16 md:mt-20 px-6 md:px-20 py-6 md:py-5 flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-start md:items-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          {["For public and private companies", "from the first pitch to IPO"].map((item, index) => (
            <p key={index} className="text-sm md:text-md font-light tracking-tight leading-snug capitalize">
              {item}
            </p>
          ))}
        </div>
        <div className="start flex items-center mt-4 md:mt-0">
          <div className="px-5 py-2 md:px-7 md:py-2 border-[2px] rounded-full border-zinc-500 font-light capitalize text-sm md:text-md">
            start the project
          </div>
          <div className="w-9 h-9 md:w-10 md:h-10 border rounded-full ml-2 flex items-center justify-center">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
