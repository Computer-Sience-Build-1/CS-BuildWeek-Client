import React from "react";

import "./Directions.css"

// We use up down left right arrow image to overlay on the divs
const Directions = ({ handleMove }) => {
  return (
    <div className="movement-arrows">
      <div className="arrow-div" onClick={() => handleMove("e")} />
      <div className="arrow-div" onClick={() => handleMove("s")} />
      <div className="arrow-div" onClick={() => handleMove("n")} />
      <div className="arrow-div" onClick={() => handleMove("w")} />
    </div>
  );
};

export default Directions;
Directions.defaultProps = {
  handleMove: () => "moved"  
};