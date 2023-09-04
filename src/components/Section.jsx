import white_logo_pngg from "../assets/white_logo_pngg.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Section = () => {
  const router = useNavigate();

  return (
    <>
      <section
        className="flex flex-col md:w-[80%] md:p-12 md:flex-row border rounded-3xl m-10 md:mt-20"
        style={{
          WebkitBackdropFilter: "blur(3px)",
          backdropFilter: "blur(10px)",
          backgroundColor: "",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation state (left to right)
          animate={{ opacity: 1, x: 0 }} // Animation when it's visible
          transition={{ duration: 3 }} // Animation duration
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-2xl font-bold p-6 pb-0 mb-4">Workshop</h1>
          <p className="text-white p-6 pt-0 text-xs md:text-xl font-serif">
            A chance to have a glimpse of hardware infrastructure to enhance
            your technical skillset. Workshop gives insights into emerging and
            existing fields of technology and also provides interactive learning
            experiences. You can develop technical and network skills aiding in
            career advancement.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 50 }} // Initial animation state (bottom to top)
            animate={{ opacity: 1, y: 0 }} // Animation when it's visible
            transition={{ duration: 3, delay: 1.5 }} // Animation duration with a delay
            className="md:ml-6 p-3 text-xs border rounded-xl"
            onClick={() => router("/events")}
          >
            Explore
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Initial animation state (right to left)
          animate={{ opacity: 1, x: 0 }} // Animation when it's visible
          transition={{ duration: 3 }} // Animation duration
          className="flex justify-center p-3 md:w-1/2"
        >
          <img
            src="https://res.cloudinary.com/e-compractice/image/upload/v1693795903/vidyuimages/vlsi_jakeo9.jpg"
            className="w-[80px] h-50 md:w-[300px] md:h-[300px]"
            alt="Reload Again"
          />
        </motion.div>
      </section>
      ;
      {/* <section
        className="flex flex-col md:w-[80%] md:p-12 lg:flex-row border rounded-3xl m-10 md:mt-16"
        style={{
          WebkitBackdropFilter: "blur(3px)",
          backdropFilter: "blur(10px)",
          backgroundColor: "",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation state (left to right)
          animate={{ opacity: 1, x: 0 }} // Animation when it's visible
          transition={{ duration: 1 }} // Animation duration
          className="text-center md:text-left md:w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-2xl font-bold p-6 pb-0 mb-4">Technical</h1>
          <p className="text-white p-6 pt-0 text-xs md:text-xl font-serif">
            The Tech-combat is on, arm yourself in the Tech-filled room and
            prepare yourself for an exciting day. Get into the venue of
            exposure, a platform to showcase your technical skills. Have your
            ticket to the tech World.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 50 }} // Initial animation state (bottom to top)
            animate={{ opacity: 1, y: 0 }} // Animation when it's visible
            transition={{ duration: 0.5, delay: 0.5 }} // Animation duration with a delay
            className="md:ml-6 p-3 text-xs border rounded-xl"
            onClick={() => router("/events")}
          >
            Explore
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Initial animation state (right to left)
          animate={{ opacity: 1, x: 0 }} // Animation when it's visible
          transition={{ duration: 1 }} // Animation duration
          className="flex justify-center p-3 md:w-full"
        >
          <img
            src="https://res.cloudinary.com/e-compractice/image/upload/v1693764811/vidyuimages/guessing2_nc1jwm.jpg"
            className="w-[100%] h-full md:w-1/2 lg:h-3/4 self-center"
            alt="Reload Again"
          />
        </motion.div>
      </section> */}
      <section
        className="flex flex-col md:w-[80%] md:p-12 md:flex-row border rounded-3xl m-10 md:mt-16"
        style={{
          WebkitBackdropFilter: "blur(3px)",
          backdropFilter: "blur(10px)",
          backgroundColor: "",
        }}
      >
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="  text-2xl font-bold p-6 pb-0 mb-4">Technical</h1>
          <p className="text-white p-6 pt-0 text-xs md:text-xl font-serif">
            The Tech-combat is on, arm yourself in the Tech-filled room and
            prepare yourself for an exciting day. Get into the venue of
            exposure, a platform to showcase your technical skills. Have your
            ticket to the tech World.
          </p>
          <button
            className="md:ml-6 p-3 text-xs border rounded-xl"
            onClick={() => router("/events")}
          >
            Explore
          </button>
        </div>

        <div className="flex justify-center p-3 md:w-1/2">
          <img
            src="https://res.cloudinary.com/e-compractice/image/upload/v1693764811/vidyuimages/guessing2_nc1jwm.jpg"
            className="w-[80px] h-50 md:w-[300px] md:h-[300px] "
            alt="Reload Again"
          />
        </div>
      </section>
      <section
        className="flex flex-col md:w-[80%] md:p-12 md:flex-row border rounded-3xl m-10 md:mt-16"
        style={{
          WebkitBackdropFilter: "blur(3px)",
          backdropFilter: "blur(10px)",
          backgroundColor: "",
        }}
      >
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="  text-2xl font-bold p-6 pb-0 mb-4">Non-Technical</h1>
          <p className="text-white p-6 pt-0 text-xs md:text-xl font-serif">
            Let the inner child in you peek out for a moment. Events that never
            miss to mystify you, lets play without your brain being drained,
            maybe a perspective a little different this time? Turn the tables,
            trace the pattern, and find that out to bring it up.
          </p>
          <button
            className="md:ml-6 p-3 text-xs border rounded-xl"
            onClick={() => router("/events")}
          >
            Explore
          </button>
        </div>

        <div className="flex justify-center p-3 md:w-1/2">
          <img
            src="https://res.cloudinary.com/e-compractice/image/upload/v1693764810/vidyuimages/anime_quiz_footj1.jpg"
            className="w-[80px] h-50 md:w-[300px] md:h-[300px] "
            alt="Reload Again"
          />
        </div>
      </section>
    </>
  );
};

export default Section;
