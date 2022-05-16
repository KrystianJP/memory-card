import React, { useState } from "react";

function Card(props) {
  const img = <img src={props.image} alt="memory card"></img>;

  return <div className="card">{img}</div>;
}

export default Card;
