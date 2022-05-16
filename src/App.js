import React from "react";
import Game from "./components/Game.js";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Memory Card Game</h1>
      </div>
      <Game />
    </div>
  );
}

export default App;
