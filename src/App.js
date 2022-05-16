import React, { useEffect, useState } from "react";
import Game from "./components/Game.js";
import Score from "./components/Score";
import ReactModal from "react-modal";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.incrementScore = this.incrementScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);

    this.state = { score: 0, modalOpen: false };
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

  hideModal() {
    this.setState({
      modalOpen: false,
    });
  }

  showModal() {
    this.setState({ modalOpen: true });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <ReactModal
          className="lose-modal"
          isOpen={this.state.modalOpen}
          ariaHideApp={false}
        >
          <span>You Lose</span>
          <button type="button" onClick={this.hideModal}>
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
          reset={this.resetScore}
          showModal={this.showModal}
        />
        <button onClick={this.showModal}></button>
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
