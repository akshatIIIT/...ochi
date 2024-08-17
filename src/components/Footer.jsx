import React from 'react'

function Footer() {
  return (
    <div className="w-full h-screen bg-zinc-900 p-20 flex">
        <div className="w-1/2 ">
            <div className="heading">
                <h1 className="text-[6vw] uppercase tracking-tighter -mb-12 font-bold">EYE-</h1>
                <h1 className="text-[6vw] uppercase tracking-tighter font-bold">OPENING</h1>
            </div>
            <h1 className="mt-80 font-bold">ochi.</h1>
        </div>
        <div className="w-1/2">
            <h1 className="font-bold text-[6vw]">PRESENTATIONS</h1>
            <div className="dets mt-8">
                <a href="#" className="block text-xl mb-2 font-semibold">FACEBOOK</a>
                <a href="#" className="block text-xl mb-2 font-semibold">INSTAGRAM</a>
                <a href="#" className="block text-xl mb-2 font-semibold">TWITTER</a>
                <a href="#" className="block text-xl mb-2 font-semibold">FACEBOOK</a>
                <a href="#" className="block text-xl mb-2 font-semibold">INSTAGRAM</a>
                <a href="#" className="block text-xl mb-16 font-semibold">TWITTER</a>
                <a href="#" className="block text-xl mb-2 font-semibold">TWITTER</a>
                <a href="#" className="block text-xl mb-2 font-semibold">FACEBOOK</a>
                <a href="#" className="block text-xl mb-2 font-semibold">INSTAGRAM</a>
                <a href="#" className="block text-xl mb-6">TWITTER</a>
                <h1 className="pl-40">© ochi design 2024. Legal Terms</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer