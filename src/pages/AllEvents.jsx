import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { Events } from "../data/data.js";

const AllEvents = () => {
  const transition = { type: "spring", duration: 1.5 };
  const TechEvents = Events.filter((event) => event.tag === "tech");
  const NonTechEvents = Events.filter((event) => event.tag === "nontech");
  const Workshops = Events.filter((event) => event.tag === "workshop");

  return (
    <main className="text-white overflow-hidden">
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[1rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md mb-10 md:w-11/12 ">
        <section className="w-full flex justify-center md:justify-start mb-5">
          <motion.h1
            className="text-[30px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 0 }}
            transition={transition}
          >
            WORKSHOP
          </motion.h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[1rem]">
          {Workshops.map((Event, index) => (
            // initial={{ opacity: 0, x: -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 100 }}
            // transition={{ ...transition, duration: (index + 1) * 0.5 }}

            <Card Event={Event} index={index} key={index} />
          ))}
        </section>
      </div>

      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[1rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md mb-10 md:w-11/12">
        <section className="w-full flex justify-center md:justify-start mb-5">
          <motion.h1
            className="text-[30px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={transition}
          >
            TECH EVENTS
          </motion.h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[1rem]">
          {TechEvents.map((Event, index) => (
            // initial={{ opacity: 0, x: -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, y: 0 }}
            // transition={{ ...transition, duration: (index + 1) * 0.5 }}
            <Card Event={Event} index={index} key={index} />
          ))}
        </section>
      </div>

      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[1rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md md:w-11/12">
        <section className="w-full flex justify-center md:justify-start mb-5">
          <motion.h1
            className="text-[30px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 0 }}
            transition={transition}
          >
            NON TECH EVENTS
          </motion.h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[1rem]">
          {NonTechEvents.map((Event, index) => (
            // initial={{ opacity: 0, x: -50 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: 0 }}
            // transition={{ ...transition, duration: (index + 1.5) * 0.8 }}

            <Card Event={Event} index={index} key={index} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AllEvents;
