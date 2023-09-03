import React, { useState } from 'react';
import { AboutusData } from '../data/AboutusData';
import rightArrow from '../assets/rightArrow.png';
import leftArrow from "../assets/leftArrow.png";
import { motion } from 'framer-motion';


const Aboutus1 = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = AboutusData.length;

  return (
    
    <div className="flex flex-col h-screen mt-12 gap-24 p-2 bg-transperant md:p-4 lg:p-2 border rounded-3xl md:mt-16" style={{WebkitBackdropFilter: 'blur(10px)', // Apply the blur effect using -webkit-backdrop-filter
    backdropFilter: 'blur(10px)'}}>
      
      <div className="flex flex-col gap-4 p-10 lg:flex-row bg-blur">
        <div className="flex flex-col flex-1 text-white">

          <span className="text-3xl italic font-bold md:text-4xl lg:text-2xl stroke-text ">WHAT THEY</span>
          <span className="text-3xl italic font-bold md:text-4xl lg:text-2xl">SAY ABOUT US</span>
          
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            className="pt-4 font-serif text-xs md:text-l my-7"
          >
            {AboutusData[selected].review}
          </motion.span>
          <span className='text-lg'>
            <span className=" font-bold italic">
              {AboutusData[selected].name}
            </span>{" "}
           
          </span>

          <div className='flex flex-row gap-3 pt-4 lg:pt-8'>
            <img
              onClick={() => {
                selected === 0
                  ? setSelected(tLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={rightArrow}
              alt=""
              className="w-6 h-4 cursor-pointer lg:h-6 -scale-x-100 "
            />
            <img
              onClick={() => {
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
              src={rightArrow}
              alt=""
              className="w-6 h-4 cursor-pointer lg:h-6"
            />
          </div>
        </div>

{/* IMAGES - OUTLINE , OUTFILL, IMAGE */}

        <div className="relative flex-1 ">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute h-20 bg-transparent border-2 border-white w-44 lg:h-96 lg:w-80 md:h-44 md:w-40 right-14 top-2"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute h-48 bg-white w-44 lg:h-96 lg:w-80 md:h-44 md:w-40 right-2 top-14"
          ></motion.div>

          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            className="absolute object-cover h-48 imgcolor w-44 lg:h-96 lg:w-80 md:h-44 md:w-40 right-8 top-8"
            src={AboutusData[selected].image}
            alt=""
          />

        </div>
      </div>
    </div>

  );
};

export default Aboutus1;