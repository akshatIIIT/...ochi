import React from 'react';

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full px-6 sm:px-10 py-12 sm:py-16 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      {/* Intro Text */}
      <h1 className="font-[Neue_Montreal] text-[6vw] sm:text-[4vw] leading-tight tracking-tighter">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts,
        ex­plain com­plex ideas, and hire great peo­ple.
      </h1>

      {/* Section Below Text */}
      <div className="w-full border-t-[1px] border-[#a1b562] mt-12 pt-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h1 className="text-[7vw] sm:text-[4vw] font-[Neue_Montreal] tracking-tighter">Our approach:</h1>
          <button className="gap-3 rounded-full bg-zinc-900 text-white px-6 py-3 mt-6 flex items-center text-sm sm:text-base">
            READ MORE
            <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-zinc-900 rounded-3xl overflow-hidden">
          <img
            src="./pppp.jpg"
            alt="Our Approach"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
