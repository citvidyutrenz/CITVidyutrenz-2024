import React from "react";
import Card from "../components/Card";

const AllEvents = () => {
  const Techs = [
    {
      id: 1,
      name: "EUREKATHON",
      description:
        "A paper presentation event, where students from various colleges gather to present their research papers before the judges.",
      rules: [
        "The applicant must turn in their abstract prior to the deadline.",
        "Only two people can be on a team at once.",
        "It is required to send a soft copy of the presentation while registering.",
        "Each team will have a maximum time constraint of 5 to 8 minutes.",
        "Finality will be accorded to the jury's judgement.",
      ],
      imgUrl:
        "https://res.cloudinary.com/e-compractice/image/upload/v1691301921/lumos/Career1_c6qalm.svg",
    },
    {
      id: 2,
      name: "ELECTROMAZE",
      description:
        "ELECTROMAZE is a circuit redesigning event. Circuit diagram will be displayed once and participants have to redesign it within a stipulated time.",
      rules: [
        "Team size: 2 per team.",
        "Event time: 3 min",
        "Teams with top scores will be qualified.",
        "Participants should redesign the circuit in Tinkercad.",
      ],
      rounds: [
        "Round 1: In the preliminary round, the participants are asked to redesign a circuit by picking a circuit from the bunch of circuits displayed.",
        "Round 2: Participants shortlisted from round 1 are allowed for round 2 where they will be given a much more complicated circuit to redesign.",
      ],
      judgingCriteria:
        "Participants who can design a circuit faster and with accuracy of circuits can be considered as a winner.",
      imgUrl:
        "https://res.cloudinary.com/e-compractice/image/upload/v1691301921/lumos/Career1_c6qalm.svg",
    },
    {
      id: 3,
      name: "DEBUGCON",
      description:
        "It is a two members circuit debugging game in which a defective circuit will be given and the game is to find the defect and make the circuit work in the given time by the team mates.",
      rules: [
        "Team size: 2",
        "Game time: 2 min.",
        "Number of rounds: 2 rounds event.",
        "Round 1 will be with moderate difficulty and round 2 has some twists in the circuit.",
        "Teams performing well and scoring points can go to the next level.",
      ],
      judgingCriteria:
        "Teams find the defect in a short span of time will be given maximum marks and teams completing further will be given some minimum marks. At the end, teams having the maximum score will be considered as winners.",
      imgUrl:
        "https://res.cloudinary.com/e-compractice/image/upload/v1691301921/lumos/Career1_c6qalm.svg",
    },
    {
      id: 4,
      name: "THEATROTECH",
      description:
        "A two members word-guessing event meant to identify the words related to electronics and communication. Each participant from a team will be given a clue card with few words written on it. The task is to find the correct word using that clue card.",
      rules: [
        "Team size: 2 per team.",
        "Game time: 2 mins.",
        "Participants can skip and move to the next word.",
        "Teams with top scores will be qualified for the next round.",
        "Negative markings will be included in further rounds.",
      ],
      judgingCriteria:
        "The team which finds the correct answer within a short span of time will be awarded with points. At last, the team with more points will be considered as winners.",
    },
    {
      id: 5,
      name: "INNOVESTA",
      description:
        "Innovesta is a project presentation event where participants can display their work. Typically, the event consists of a number of presentations, with each presenter exhibiting their work and outlining their objectives, processes, and outcomes.",
      rules: [
        "Ensure the team is limited to 3 members.",
        "The electronics and communication domains should be the focus of the project.",
        "To ensure that all teams participate, each team is given a specified time window of between 8 and 10 minutes.",
        "Following each presentation, there is a viva session in which the participants will be questioned about their work. Marks will be assigned based on the response given, and these marks will be counted towards the final evaluation.",
        "Working prototype is mandatory.",
        "Hardcopy of abstract and prototype must be brought.",
        "The decision of the Adjudication Panel is final.",
      ],
    },
  ];
  return (
    <main className="text-white">
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto p-3 md:p-[3rem] bg-[#ffffff1a] rounded-lg backdrop-blur-md">
        <section className="w-full flex justify-center md:justify-start mb-5 ">
          <h1 className="text-[30px]">TECH EVENTS</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3" style={{gap:'5rem'}}>
          {Techs.map((Tech, index) => (
            <Card key={index} Tech={Tech} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default AllEvents;