import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-zinc-900 text-white pt-1">
        <div className="textstructure mt-52 px-20">
            {["WE CREATE","EYE-OPENING","Presentations"].map((item,index)=>{
                return (
                    <div className='masker flex'> 
                        <div className="flex w-fit item-end">
                            {index===1 && (<motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease:"linear",duration:"0.7"}} className="bg-[#66f731e0] h-[4.8vw]  relative -top-[1vw] rounded-md mr-4"></motion.div>)}
                            <h1 className="leading-[5vw] uppercase text-[6vw] font-bold font-['Founders_Grotesk'] tracking-tighter">
                                {item}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="border-slate-300 border-t-[1px] mt-20 bg-zinc-900 flex justify-between py-5 px-20 items-center">
            {["For public and private companies","from the first pitch to IPO"].map((item,index)=>(
                <p className="text-md font-light tracking-tight leading-none capitalize">{item}</p>
            ))}
            <div className="start flex items-center">
                <div className="px-7 py-2 border-[2px] rounded-full border-zinc-500 font-light capitalize text-md">start the project</div>
                <div className=" w-10 h-10 border rounded-full ml-2 flex items-center justify-center"><MdArrowOutward /></div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage
