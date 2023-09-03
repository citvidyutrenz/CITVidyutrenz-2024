import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Events } from "../data/data.js";
import { motion } from "framer-motion";

const SingleEventPage = () => {
  const transition = { type: "spring", duration: 2.5 };
  const router = useNavigate();
  const { id } = useParams();

  //   const event = {
  //     id: 2,
  //     name: "ELECTROMAZE",
  //     description:
  //       "ELECTROMAZE is a circuit redesigning event. Circuit diagram will be displayed once and participants have to redesign it within a stipulated time.",
  //     rules: [
  //       "Team size: 2 per team.",
  //       "Event time: 3 min",
  //       "Teams with top scores will be qualified.",
  //       "Participants should redesign the circuit in Tinkercad.",
  //     ],
  //     rounds: [
  //       "Round 1: In the preliminary round, the participants are asked to redesign a circuit by picking a circuit from the bunch of circuits displayed.",
  //       "Round 2: Participants shortlisted from round 1 are allowed for round 2 where they will be given a much more complicated circuit to redesign.",
  //     ],
  //     judgingCriteria: [
  //       "Participants who can design a circuit faster and with accuracy of circuits can be considered as a winner.",
  //     ],
  //     imgUrl:
  //       "https://res.cloudinary.com/e-compractice/image/upload/v1691301921/lumos/Career1_c6qalm.svg",
  //     tag: "tech",
  //   };
  const event = Events.find((event) => event.id === Number(id));
  return (
    <>
      <main className="text-white flex justify-center items-center h-full w-full py-[2rem] overflow-hidden">
        {/* <div
          className="blur w-full h-full -z-10 bg-[#ffffff1a] backdrop-blur-md "
          style={{
            // backgroundImage: `url(${cd})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // filter: "blur(10px)",
            // zIndex: -1,
            // position: "absolute",
            width: "100%",
            height: "100%",
          }}
        ></div> */}
        <div
          className="wrap w-[80%] bg-[#ffffff1a] backdrop-blur-md shadow-2xl pb-5 shadow-slate-500/50 rounded-lg"
          style={{
            background: "#00000066",
          }}
        >
          <section className="top flex justify-between px-3 py-5">
            <h1 className="text-lg md:text-[1.5rem]">
              # {event.tag.toUpperCase()}
            </h1>
            <h1 className="text-lg md:text-[1.5rem]">
              <button onClick={() => router("/events")}>BACK</button>
            </h1>
          </section>
          <hr />
          <section className="bottom flex flex-col md:flex-row">
            <div className="left w-full md:w-[40%] flex flex-col justify-around items-center py-[5vw] gap-5 border-r-[1px] border-r-white/75">
              <motion.img
                className="w-[60%]"
                src={event.imgUrl}
                alt="event-img"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 1 }}
                transition={transition}
              />
              <div className="hidden md:block">
                <motion.a
                  className="reg-btn px-[60px] md:px-[80px] py-3 bg-white text-black rounded-md"
                  href={event.link}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 1 }}
                  transition={transition}
                >
                  Register
                </motion.a>
              </div>
            </div>
            <div className="right w-full p-3 md:p-4 flex flex-col gap-5 md:w-[60%]">
              <div className="title">
                <motion.h1
                  className=" text-2xl md:text-[2rem] py-5 border-b-2 border-b-white flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 1 }}
                  transition={transition}
                >
                  {event.name}
                </motion.h1>
              </div>

              <div className="desc text-justify flex flex-col items-start">
                <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                  DESCRIPTION
                </h2>
                <motion.p
                  className="text-[10px] text-slate-300"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: 0 }}
                  transition={transition}
                >
                  {event.description}
                </motion.p>
              </div>
              {event.preReq && (
                <div className="rounds text-justify flex flex-col items-start">
                  <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                    PRE REQ
                  </h2>
                  {event.preReq.map((pre, index) => {
                    return (
                      <motion.li
                        className="text-[10px] text-slate-300 mb-3"
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 1, x: 0 }}
                        transition={{ transition, duration: index }}
                      >
                        {/* {"ROUND : " + Number(index + 1)} */}
                        &nbsp;&nbsp;
                        {pre}
                      </motion.li>
                    );
                  })}
                </div>
              )}

              {event.rules && (
                <div className="rules text-justify flex flex-col items-start">
                  <h2 className="text-[1rem] mb-2  relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                    RULES
                  </h2>
                  {/* <li className="text-[12px]">Lorem, ipsum dolor.</li>
                <li className="text-[12px]">Lorem, ipsum dolor.</li>
                <li className="text-[12px]">Lorem, ipsum dolor.</li> */}
                  {event.rules &&
                    event.rules.map((rule, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 1, x: 0 }}
                          transition={{ transition, duration: index * 0.75 }}
                          className="text-[10px] text-slate-300 mb-2"
                        >
                          {rule}
                        </motion.li>
                      );
                    })}
                </div>
              )}
              {event.rounds && (
                <div className="rounds text-justify flex flex-col items-start">
                  <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                    ROUNDS
                  </h2>
                  {event.rounds.map((round, index) => {
                    return (
                      <motion.li
                        className="text-[10px] text-slate-300 mb-3"
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 1, x: 0 }}
                        transition={{ transition, duration: index * 0.75 }}
                      >
                        {"ROUND : " + Number(index + 1)}
                        &nbsp;&nbsp;
                        {round}
                      </motion.li>
                    );
                  })}
                </div>
              )}
              {event.judgingCriteria && (
                <div className="judging-criteria text-justify flex flex-col items-start">
                  <h2 className="text-[1rem] mb-2 relative before:w-[105%] before:h-[2px] before:bg-slate-500 before:absolute before:top-[100%] before:rounded-full before:opacity-50">
                    JUDGING CRITERIA
                  </h2>
                  <p className="text-[10px] text-slate-300">
                    {event.judgingCriteria &&
                      event.judgingCriteria.map((criteria, index) => {
                        return (
                          <motion.li
                            className="text-[10px] text-slate-300 mb-3"
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: 0 }}
                            transition={{ transition, duration: index * 0.75 }}
                          >
                            {"CRITERIA : " + Number(index + 1)}
                            &nbsp;&nbsp;
                            {criteria}
                          </motion.li>
                        );
                      })}
                  </p>
                </div>
              )}
              {/* <div className="others mt-5 pt-2 md:p-5 flex w-full justify-between items-start border-t-2 border-t-white">
                <div className="rewards">
                  <h2 className="text-[1rem] mb-2">REWARDS</h2>
                  <p className="text-[10px]">Lorem, ipsum dolor.</p>
                </div>
                <div className="details">
                  <h2 className="text-[1rem] mb-2">DETAILS</h2>
                  <p className="text-[10px]">Type: Non-Tech</p>
                  <p className="text-[10px]">Date: 21-09-2023</p>
                  <p className="text-[10px]">Time: 9:00AM</p>
                </div>
                <div className="contact">
                  <h2 className="text-[1rem] mb-2">CONTACT</h2>
                  <p className="text-[10px]">Co-ordinator: Sreedhar V</p>
                  <p className="text-[10px]">Phone: 8610540677</p>
                </div>
              </div> */}
              <hr />
              <div className="reg mt-5 flex justify-center items-center md:hidden">
                <motion.a
                  className="reg-btn px-[60px] md:px-[80px] py-3 bg-white text-black rounded-md"
                  href={event.link}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 1 }}
                  transition={transition}
                >
                  Register
                </motion.a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleEventPage;