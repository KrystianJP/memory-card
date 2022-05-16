import React, { useState, useEffect } from "react";
import "../styles/score.css";

function Score(props) {
  return <div className="score-container">Score: {props.value}</div>;
}

export default Score;
