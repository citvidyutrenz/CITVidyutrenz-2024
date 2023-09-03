import { useState } from "react";
import cd from "../assets/cit.png";
import { useNavigate } from "react-router-dom";

const Card = ({ Event }) => {
  const router = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    position: "relative",
    maxWidth: "300px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "filter 0.3s",
    borderRadius: "10px",
  };

  const imageStyle = {
    width: "100%",
    filter: hovered ? "blur(25px)" : "none",
    transition: "filter 0.3s",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    display: hovered ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.9",
  };

  const overlayTextStyle = {
    color: "white",
    textAlign: "center",
    // marginTop: "230px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: "relative" }}>
        <img
          style={imageStyle}
          src={Event.imgUrl}
          alt="Description of the Image"
        />
        <div style={overlayStyle}>
          <h1
            className="mt-[190px] md:mt-[230px] font-bold backdrop-blur-lg w-full"
            style={overlayTextStyle}
          >
            {Event.name}
          </h1>
        </div>
      </div>

      <div style={{ display: hovered ? "block" : "none" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="font-semibold">{Event.name}</h1>
          <p
            className="font-semibold p-2 font-serif tracking-wide text-slate-200"
            style={{ textAlign: "center", fontSize: "10px" }}
          >
            {Event.description}
          </p>
          <button
            onClick={() => router(`/events/${Event.id}`)}
            className="p-3 text-xs border rounded-xl"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
