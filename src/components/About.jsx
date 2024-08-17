import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full px-10 py-16 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-[Neue_Montreal] text-[4vw] leading-[4vw] tracking-tighter">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 flex gap-5 ">
            <div className="w-1/2">
                <h1 className="text-[4vw] font-[Neue_Montreal] tracking-tighter">Our approach:</h1>
                <button className="gap-10 rounded-full bg-zinc-900 text-white px-6 py-4 mt-[2vw] flex items-center">READ MORE
                    <div className=" w-2 h-2 bg-white rounded-full mt-1"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-zinc-900 rounded-3xl overflow-hidden">
                <img className="w-full h-full object-cover rounded-3xl" src="./pppp.jpg"></img>
            </div>
        </div>
    </div>
  )
}

export default About