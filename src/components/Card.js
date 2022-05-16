import React, { useState } from "react";
import "../styles/card.css";

function Card(props) {
  const img = <img src={props.image} alt="memory card"></img>;

  return <div className="card">{img}</div>;
}

export default Card;
