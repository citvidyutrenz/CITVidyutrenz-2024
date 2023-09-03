const AnimateVariant = {
    offscreen: {
      opacity:0,
      y:100,
      transition: {
        type: "smooth",
        duration: 1.5,
        delay:0.1
      }
    },
    onscreen: {
      opacity:1,
      y:0,
      transition: {
        type: "smooth",
        duration: 1.5,
        delay:0.9
      }
    }
  };
  

export default AnimateVariant;