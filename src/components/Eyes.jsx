import React ,{useEffect,useState} from 'react'
function Eyes() {
    const [rotate,setRotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX= e.clientX;
            let mouseY= e.clientY;

            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;
            var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-white bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="flex w-[15vw] h-[15vw] bg-white rounded-full items-center justify-center">
                    <div className="relative w-[9vw] h-[9vw] rounded-full bg-black">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" absolute top-1/2 line w-full h-4 left-1/2">
                            <div className="w-4 h-4 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
                    <div className="relative w-[9vw] h-[9vw] rounded-full bg-black">
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" absolute top-1/2 line w-full h-4 left-1/2">
                            <div className="w-4 h-4 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Eyes