import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import white_logo_pngg from "../assets/white_logo_pngg.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-black-800 p-4 w-screen z-50 "
      style={{ WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }}
    >
      <div className="flex items-center justify-between p-4 ">
        <div className="text-white text-xl">
          <motion.div
            className="object-cover"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", duration: 1, delay: 0.3 }}
          >
            <img
              src={white_logo_pngg} // Replace with your actual image source
              alt="My Website"
              className="cursor-pointer hover:opacity-75 h-10  md:h-16  md:w-20"
            />
          </motion.div>
        </div>
        <div className="hidden md:flex flex-row space-x-4">
          <motion.div
            className="object-cover text-white"
            initial={{ opacity: 0, y: 100 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Target state
            transition={{ type: "smooth", duration: 1, delay: 0.4 }}
          >
            <div
              className="text-white cursor-pointer hover:text-gray-300"
              onClick={() => router("/")}
            >
              Home
            </div>
          </motion.div>
          <motion.div
            className="object-cover text-white"
            initial={{ opacity: 0, y: 100 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Target state
            transition={{ type: "smooth", duration: 1, delay: 0.5 }}
          >
            <div
              className="text-white cursor-pointer hover:text-gray-300"
              onClick={() => router("/events")}
            >
              Events
            </div>
          </motion.div>
          <motion.div
            className="object-cover text-white"
            initial={{ opacity: 0, y: 100 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Target state
            transition={{ type: "smooth", duration: 1, delay: 0.4 }}
          >
            <div
              className="text-white cursor-pointer hover:text-gray-300"
              onClick={() => router("/about")}
            >
              About Us
            </div>
          </motion.div>
          {/* <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.7 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300" >Contact Us</div>
          </motion.div> */}
          {/* <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.8 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Sponsors</div>
          </motion.div> */}
        </div>

      

        <button className="md:hidden text-white" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button> 
      </div>
      {isOpen && (
        <div className=" fixed top-0 right-0 h-screen bg-black p-10 w-64 transition-transform transform translate-x-0 md:hidden z-100">
          <div className="font-bold text-center flex flex-col space-y-8 text-xs ">
            <motion.div
              className="object-cover text-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "smooth", duration: 1, delay: 0.3 }}
              onClick={() => router("/")}
            >
              <div className="text-white cursor-pointer">Home</div>
            </motion.div>
            <motion.div
              className="object-cover text-white"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "smooth", duration: 1, delay: 0.4 }}
              onClick={() => router("/events")}
            >
              <div className="text-white cursor-pointer hover:text-gray-300">
                Events
              </div>
            </motion.div>
            <motion.div
              className="object-cover text-white"
              initial={{ opacity: 0, y: 100 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Target state
              transition={{ type: "smooth", duration: 1, delay: 0.5 }}
              onClick={() => router("/about")}
            >
              <div className="text-white cursor-pointer hover:text-gray-300">
                About Us
              </div>
            </motion.div>
            {/* <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.6 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Contact Us</div>
          </motion.div> */}
            {/* <motion.div className='object-cover text-white'
          initial={{ opacity: 0, y: 100 }} // Initial state
          animate={{ opacity: 1, y: 0}} // Target state
          transition={{ type: 'smooth', duration: 1, delay: 0.7 }}
          >
          <div className="text-white cursor-pointer hover:text-gray-300">Sponsors</div>
          </motion.div> */}
          </div>
          <button
            className="block mx-auto mt-4 text-white"
            onClick={toggleMenu}
          >
            <motion.div
              className="object-cover text-white"
              initial={{ opacity: 0, y: 100 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Target state
              transition={{ type: "smooth", duration: 1, delay: 0.9 }}
            >
              <div className="text-white cursor-pointer hover:text-gray-300 mt-3">
                <AiOutlineClose />
              </div>
            </motion.div>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Home;
