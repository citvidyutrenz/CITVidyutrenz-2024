import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimateVariant from "./framer";
import Footer from "./footer";
import Section from "./Section";
// import Memories from "./Memories";
import ContactUS from "./ContactUs";
// import CardWithVideo from "./Memories1";
import CreditPage from '../pages/CreditsPage'

const Home1 = () => {
  const targetDate = new Date("2023-09-21T00:00:00").getTime();
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      const newCountdown = calculateCountdown();
      setCountdown(newCountdown);
    }, 1000);

    return () => clearInterval(timer);
  });

  function calculateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return "Countdown expired";
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <motion.div
      className="text-white flex-grow h-screen md:h-screen"
      initial="offscreen"
      animate="onscreen"
      variants={AnimateVariant}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="flex flex-col items-center w-full h-screen pt-24">
        <div
          className="mt-24 rounded-lg justify-center p-3"
          style={{
            WebkitBackdropFilter: "blur(3px)",
            backdropFilter: "blur(3px)",
          }}
        >
          <h1 className="text-center text-3xl md:text-6xl">VIDYUTRENZ</h1>
          <p className="font-serif text-center text-s md:text-base  text-white text-opacity-40">
            National Level Technical Symposium from the Department of
            Electronics and Communication Engineering
          </p>
          <div>
            <p className="mt-8 text-center text-2xl"> {countdown}</p>
          </div>
        </div>
        <div className="mt-[190px] md:mt-[280px] md:ml-6">
          <Footer />
        </div>
        <Section />

        <ContactUS />
        <CreditPage/>
        
        <div className="mt-24 ">
        <Footer />
        </div>
        
      </div>
    </motion.div>
  );
};

export default Home1;
