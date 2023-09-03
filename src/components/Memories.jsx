import React from 'react';
import vidyu1 from "../assets/Vidyu1.mp4";

const Memories = () => {
  return (
    
      <div className="bg-transperant flex items-center justify-center md:flex  rounded-lg h-screen">

        <div className="flex justify-center md:w-1/2">
          <video
            src={vidyu1}
            className="w-1/4 h-1/4 "
            autoPlay
            loop
            muted
            alt="Section"
            style={{ transform: 'rotate(270deg)'}}
          />
          <div className=" flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style={{ transform: 'rotate(270deg)'}}>
            <p className="text-white text-center">
              Hover to Reveal Text
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Memories;
