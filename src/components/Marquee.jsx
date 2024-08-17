import React from 'react'
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
        <div  className=" text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[24vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-10 -mb-[7vw]">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className="text-[24vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-10 -mb-[7vw]">we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee