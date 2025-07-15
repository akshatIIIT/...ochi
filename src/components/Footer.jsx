import React from 'react';

function Footer() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 px-6 md:px-20 py-10 flex flex-col md:flex-row text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="heading">
          <h1 className="text-[10vw] md:text-[6vw] uppercase tracking-tighter -mb-4 md:-mb-12 font-bold leading-none">EYE-</h1>
          <h1 className="text-[10vw] md:text-[6vw] uppercase tracking-tighter font-bold leading-none">OPENING</h1>
        </div>
        <h1 className="mt-16 md:mt-80 font-bold text-2xl">ochi.</h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <h1 className="font-bold text-[10vw] md:text-[6vw]">PRESENTATIONS</h1>
        <div className="dets mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-lg font-semibold">
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">TWITTER</a>
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">TWITTER</a>
            <a href="#">TWITTER</a>
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
            <a href="#">TWITTER</a>
          </div>
          <h1 className="text-sm mt-10 md:pl-40 text-gray-400">© ochi design 2024. Legal Terms</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
