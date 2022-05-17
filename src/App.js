import React, { useEffect, useState } from "react";
import Game from "./components/Game.js";
import Score from "./components/Score";
import ReactModal from "react-modal";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.incrementScore = this.incrementScore.bind(this);
    this.lose = this.lose.bind(this);

    this.state = { score: 0, loseModalOpen: false, winModalOpen: false };
  }

  incrementScore() {
    let nextScore = this.state.score + 1;
    this.setState(
      {
        score: this.state.score + 1,
      },
      () => {
        if (nextScore === 12) {
          this.setState({ winModalOpen: true });
          this.resetScore();
        }
      },
    );
  }

  lose() {
    this.savedScore = this.state.score;
    this.setState(
      {
        loseModalOpen: true,
      },
      () => {
        this.resetScore();
      },
    );
  }

  resetScore() {
    this.setState({
      score: 0,
    });
  }

  render() {
    return (
      <div className="App">
        <ReactModal
          className="modal"
          isOpen={this.state.loseModalOpen}
          ariaHideApp={false}
        >
          <span className="lose-text">You Lose</span>
          <span className="score">Score: {this.savedScore}</span>
          <button
            type="button"
            onClick={() => {
              this.setState({ loseModalOpen: false });
            }}
          >
            Try Again
          </button>
        </ReactModal>
        <ReactModal
          className="modal"
          isOpen={this.state.winModalOpen}
          ariaHideApp={false}
        >
          <span>You Win</span>
          <button
            type="button"
            onClick={() => {
              this.setState({ winModalOpen: false });
            }}
          >
            Try Again
          </button>
        </ReactModal>
        <div className="header">
          <h1>Memory Card Game</h1>
          <Score value={this.state.score} />
        </div>
        <Game
          score={this.state.score}
          increment={this.incrementScore}
          lose={this.lose}
          showModal={this.showModal}
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
