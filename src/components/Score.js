import React, { useState, useEffect } from "react";
import "../styles/score.css";

function Score(props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(props.score);
  }, [props]);

  return <div className="score-container">Score: {score}</div>;
}

export default Score;
