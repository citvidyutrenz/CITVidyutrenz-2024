import React from "react";
import white_logo_pngg from "../assets/white_logo_pngg.png";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  border: "none",
  background: "#fff",
  borderRadius: "5px",
  marginTop: "20px",
  fontWeight: "600",
  fontSize: "15px",
  color: "#333",
  width: "100px",
  padding: "0",
  marginRight: "500px",
  marginBottom: "30px",
  transition: "0.3s",
};

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
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="  text-2xl font-bold p-6 pb-0 mb-4">Workshop</h1>
          <p className="text-white p-6 pt-0 text-xs font-serif">
            A chance to have a glimpse of hardware infrastructure to enhance
            your technical skillset. Workshop gives insights into emerging and
            existing fields of technology and also provides interactive learning
            experiences. You can develop technical and network skills aiding in
            career advancement.
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
            src={white_logo_pngg}
            className="w-[80px] h-50 md:w-[300px] md:h-50 "
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
          <h1 className="  text-2xl font-bold p-6 pb-0 mb-4">Technical</h1>
          <p className="text-white p-6 pt-0 text-xs font-serif">
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
            src={white_logo_pngg}
            className="w-[80px] h-50 md:w-[300px] md:h-50 "
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
          <p className="text-white p-6 pt-0 text-xs font-serif">
            Let the inner child in you peek out for a moment. Events that never
            miss to mystify you, let's play without your brain being drained,
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
            src={white_logo_pngg}
            className="w-[80px] h-50 md:w-[300px] md:h-50 "
            alt="Reload Again"
          />
        </div>
      </section>
    </>
  );
};

export default Section;
