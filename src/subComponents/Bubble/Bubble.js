import React from "react";
import "./style.css";

const Bubble = ({ pop }) => {
  return <div className="bubble" onClick={pop} onTouchStart={pop} />;
};

export default Bubble;
