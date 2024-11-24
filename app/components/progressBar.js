import React from "react";
import "nes.css/css/nes.min.css";

const ProgressBar = () => {
  return (
    <div className="nes-container with-title is-centered mt-6">
      <p className="title">Loading...</p>
      <progress className="nes-progress is-primary" value="50" max="100">
        50%
      </progress>
      <span className="ml-2">50%</span>
    </div>
  );
};

export default ProgressBar;
