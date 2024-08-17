import React from 'react'

function Featured() {
  return (
    <div className="w-full py-20 bg-zinc-900">
        <div className="w-full px-10  border-b-[1px] pb-10 border-zinc-700">
            <h1 className="text-6xl font-[Neue_Montreal] tracking-tighter">Featured projects</h1>
        </div>
        <div className="cards flex gap-10 py-10 px-20">
            <div className="w-1/2 h-[80vh] ">
                <ul className="list-disc pl-5">
                    <li>CARDBOARD SPACESHIP</li>
                </ul>
                <div className=" transition-transfrom duration-500 ease-in-out transform hover:scale-110 w-full h-[75vh] rounded-3xl mt-5 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
                </div>
            </div>
            <div className="w-1/2 h-[80vh]">
                <ul className="list-disc pl-5">
                    <li>PREMIUM BLEND</li>
                </ul>
                <div className=" w-full h-[75vh] rounded-3xl mt-5 overflow-hidden transition-transform duraton-500 ease-in-out transform hover:scale-110">
                    <img className="w-full h-full  object-cover " src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"></img>
                </div>
            </div>
        </div>
        <div className="cards flex gap-10 py-10 px-20">
            <div className="w-1/2 h-[80vh] ">
                <ul className="list-disc pl-5">
                    <li>CARDBOARD SPACESHIP</li>
                </ul>
                <div className=" transition-transform duration-500 ease-in-out transform hover:scale-110 w-full h-[75vh] rounded-3xl mt-5 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"></img>
                </div>
            </div>
            <div className="w-1/2 h-[80vh]">
                <ul className="list-disc pl-5">
                    <li>PREMIUM BLEND</li>
                </ul>
                <div className=" w-full h-[75vh] rounded-3xl mt-5 overflow-hidden transition-transform duraton-500 ease-in-out transform hover:scale-110">
                    <img className="w-full h-full  object-cover " src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Featured