import React, { useState } from "react";
import Card from "Card.js";

function Game(props) {
  const images = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const [cards, setCards] = useState(getCards());

  function getCards() {
    let cards = [];
    for (let i = 0; i < 12; i++) {
      setCards(cards.concat(<Card image={images[i]} />));
    }
    return cards;
  }

  return <div className="game">{cards}</div>;
}

export default Game;
