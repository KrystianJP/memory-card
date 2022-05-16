import React, { useState } from "react";
import Card from "./Card.js";
import "../styles/game.css";

function Game(props) {
  const images = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const [cards, setCards] = useState(getCards());

  function getCards() {
    let tempCards = [];
    for (let i = 0; i < 12; i++) {
      tempCards = tempCards.concat(<Card image={images[i]} key={images[i]} />);
    }
    return tempCards;
  }

  return <div className="game">{cards}</div>;
}

export default Game;
