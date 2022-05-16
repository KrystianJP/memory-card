import React, { useEffect, useState } from "react";
import Game from "./components/Game.js";
import Score from "./components/Score";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.incrementScore = this.incrementScore.bind(this);
    this.resetScore = this.resetScore.bind(this);

    this.state = { score: 0 };
  }

  incrementScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  resetScore() {
    this.setState({
      score: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Memory Card Game</h1>
          <Score value={this.state.score} />
        </div>
        <Game
          score={this.state.score}
          increment={this.incrementScore}
          reset={this.resetScore}
        />
      </div>
    );
  }
}

// function App() {
//   const [score, setScore] = useState(0);

//   function incrementScore() {
//     setScore(score + 1);
//     console.log(score);
//   }

//   return (
//     <div className="App">
//       <div className="header">
//         <h1>Memory Card Game</h1>
//         <Score value={score} />
//       </div>
//       <Game score={score} increment={incrementScore} />
//       <button onClick={incrementScore}></button>
//     </div>
//   );
// }

export default App;
