import React from 'react'
import img1 from "../img/img1.jpg";
const Main = () => {
  return (
    <div className="relative h-[480px]">
        <div className="absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 text-black font-bold w-[800px]">
            <h2 className="text-6xl">Discover the world's top designers & creatives</h2>
            <p>Dribble is the leading destination to find & showcase creative work <br></br>
                and home to the world's best design professionals
            </p>
            <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-400">Sign up
            </button>
        </div>
        <div></div>
        <img className="w-full h-full object-cover" src={img1} alt="" />
    </div>
  )
}

export default Main