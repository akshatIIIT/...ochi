import React from 'react';

function Featured() {
  return (
    <div className="w-full py-16 sm:py-20 bg-zinc-900">
      {/* Heading */}
      <div className="w-full px-6 sm:px-10 border-b border-zinc-700 pb-6 sm:pb-10">
        <h1 className="text-4xl sm:text-6xl font-[Neue_Montreal] tracking-tighter text-white">Featured projects</h1>
      </div>

      {/* Cards Group 1 */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 py-10 px-6 sm:px-20">
        {/* Card 1 */}
        <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <ul className="list-disc pl-5 text-white">
            <li>CARDBOARD SPACESHIP</li>
          </ul>
          <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-[90%] rounded-3xl mt-4 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <ul className="list-disc pl-5 text-white">
            <li>PREMIUM BLEND</li>
          </ul>
          <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-[90%] rounded-3xl mt-4 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" />
          </div>
        </div>
      </div>

      {/* Cards Group 2 */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 py-10 px-6 sm:px-20">
        {/* Card 3 */}
        <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <ul className="list-disc pl-5 text-white">
            <li>CARDBOARD SPACESHIP</li>
          </ul>
          <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-[90%] rounded-3xl mt-4 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full lg:w-1/2 h-[60vh] sm:h-[70vh] lg:h-[80vh]">
          <ul className="list-disc pl-5 text-white">
            <li>PREMIUM BLEND</li>
          </ul>
          <div className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-[90%] rounded-3xl mt-4 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
