import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className='relative w-full h-full bg-white bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
      >
        <div className="flex gap-6 sm:gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-[30vw] sm:w-[15vw] h-[30vw] sm:h-[15vw] bg-white rounded-full"
            >
              <div className="relative w-[18vw] sm:w-[9vw] h-[18vw] sm:h-[9vw] rounded-full bg-black">
                <div
                  style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                  className="absolute top-1/2 left-1/2 w-full h-[1rem] sm:h-4"
                >
                  <div className="w-[1rem] sm:w-4 h-[1rem] sm:h-4 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
