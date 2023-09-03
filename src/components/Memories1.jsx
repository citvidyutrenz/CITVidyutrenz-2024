import React, { useState } from 'react';
import Vidyu1 from '../assets/Vidyu1.mp4';

const CardWithVideo = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    position: 'relative',
    maxWidth: '300px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'filter 0.3s',
    borderRadius: '10px',
  };

  const videoStyle = {
    width: '100%',
    filter: hovered ? 'blur(5px)' : 'none',
    transition: 'filter 0.3s',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    display: hovered ? 'none' : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.9s',
  };

  const overlayTextStyle = {
    color: 'white',
    textAlign: 'center',
    marginTop: '50%',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: 'relative' }}>
        <video
          style={videoStyle}
          src={Vidyu1}
          alt="Video Background"
          autoPlay
          muted
          loop
        />
        <div style={overlayStyle}>
          <p className="mt-[48]" style={overlayTextStyle}>
            Video Title
          </p>
        </div>
      </div>

      <div style={{ display: hovered ? 'block' : 'none' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ color: 'white', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithVideo;
