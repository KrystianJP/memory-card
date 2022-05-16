import React, { useState } from "react";
import Card from "./Card.js";
import "../styles/game.css";

class Game extends React.Component {
  #images = [
    "https://imgs.search.brave.com/Nxf32vr1f8pVVb2eJy8ygp0oP409xKbBkuzRZMkmVrI/rs:fit:1200:1199:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly05QnRydDN1TGtm/WS9WazlHTlBkemJN/SS9BQUFBQUFBQXNV/NC9vbzZzTFh3R2hG/VS9zMTYwMC9fRFND/NTU4NS5KUEc",
    "https://imgs.search.brave.com/VnTywObniOtRGhynVKGx7i8qylVrEZyBQEXZGIlCZjQ/rs:fit:1018:738:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0xSmdMUkZMaFlP/OC9VRGQ5MW45RnFB/SS9BQUFBQUFBQUVT/WS80LW1uTzBUNFhf/by9zMTYwMC9ZZWxs/b3ctRHVjay0zLmpw/Zw",
    "https://imgs.search.brave.com/C903NuycM51YVmQ6KkXWWeGOSBAq4Q9RCTIgVsYWLfo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/TktqTjNaaWd0bkd3/dW9fNFZoeHB3SGFF/SyZwaWQ9QXBp",
    "https://imgs.search.brave.com/M9X3cvaF1zrPg-2zfKO76ns21Ix0DPM3nrWKZ3imOTk/rs:fit:1200:1170:1/g:ce/aHR0cDovL3d3dy5j/YXB0YWlubWl0Y2hz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9iaWdz/dG9jay1Qb3J0cmFp/dC1PZi1BLU11c2Nv/dnktRHVjay1jYS0y/NjY3MjMzMDguanBn",
    "https://imgs.search.brave.com/0M4fTb0oDFbvVqyhhZBZuBOY_jZMglR_hImtyVzYJHs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Y2FwdGFpbm1pdGNo/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDEvd29v/ZC1kdWNrLVBGWUhW/Wk4uanBn",
    "https://imgs.search.brave.com/z3NmBGJs9fWHUmjF-7gjgdpsABoUI8U2TuSNTLvH_nU/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZm94dHYuY29t/L3N0YXRpYy5mb3gy/ZGV0cm9pdC5jb20v/d3d3LmZveDJkZXRy/b2l0LmNvbS9jb250/ZW50L3VwbG9hZHMv/MjAyMC8xMi8xMjgw/LzcyMC9yYW5keXR1/Y2tlci5qcGc_dmU9/MSZ0bD0x",
    "https://imgs.search.brave.com/dEQEuwgMVbAcZ495jA8LeLWepSlm9HDmZjDDXgs9Jkg/rs:fit:1200:799:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS9fdlNNamVWTWtC/ZG8vUzY3c2RoVngx/Z0kvQUFBQUFBQUFB/R2Mvc3ByZEhvc1Vf/QjgvczE2MDAvX0RT/QzAxODErKFdvb2Qr/RHVjaykuanBn",
    "https://imgs.search.brave.com/E1PY_5_ML8GKEEivhH-E_0Z-HFgt_xO2LSLIGQej3Uo/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9tZWRp/YS5kaXN0cmFjdGlm/eS5jb20vYnJhbmQt/aW1nL1oxY3NnZzgv/MHgwL2R1Y2stMTQ5/MzQwNTI0MTA2Mi5q/cGc",
    "https://imgs.search.brave.com/rMl3emfFqNHWwaT_F71tcagzDvxbudq9kg_NRwrxIDA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzQw/MDAwL3ZlbGthL2Vl/bmQtMTM2Nzk1NDQy/N2JPVi5qcGc",
    "https://imgs.search.brave.com/WxV-YH8qvXBtRWQfC1kgNdrA5uCXkeUkGS5Ljl0XNgU/rs:fit:1024:679:1/g:ce/aHR0cHM6Ly9mYXJt/YW5pbWFscGV0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy9mX2Iyd2Jr/Z18wLTEwMjR4Njc5/LmpwZw",
    "https://imgs.search.brave.com/ljlsOxlYQ-iku3XUnRv5tU4JFtHnEtJKhEp-kr_BT2g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z2tjYW01Z3hwbG4y/MS5qcGc_YXV0bz13/ZWJwJnM9NWYxZDAw/YTE0NTAxOWZmM2Mx/MjlhNWQ4MzZhODcy/NjM0MGZjZjZmZQ",
    "https://imgs.search.brave.com/nShbRhEMuDKy8WuGMATdjEiX_dKvdyd08epyBbKjAn8/rs:fit:1024:576:1/g:ce/aHR0cHM6Ly93d3cu/bGVhcm5uYXR1cmFs/ZmFybWluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvQ2F5dWdhLWR1/Y2stMTAyNHg1NzYu/anBn",
  ];

  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);

    this.state = { cards: this.getCards(), chosenKeys: [] };
  }

  clicked(key) {
    if (this.state.chosenKeys.includes(key)) {
      this.setState({ chosenKeys: [] });
      this.props.reset();
      this.props.showModal();
      return;
    }
    this.props.increment();
    this.setState({
      chosenKeys: this.state.chosenKeys.concat(key),
    });
  }

  getCards() {
    let tempCards = [];
    for (let i = 0; i < 12; i++) {
      tempCards = tempCards.concat(
        <Card
          image={this.#images[i]}
          key={this.#images[i]}
          keyValue={this.#images[i]}
          clickFunction={this.clicked}
        />,
      );
    }
    return tempCards;
  }

  render() {
    return <div className="game">{this.state.cards}</div>;
  }
}

// function Game(props) {
//   const images = [
//     "https://imgs.search.brave.com/Nxf32vr1f8pVVb2eJy8ygp0oP409xKbBkuzRZMkmVrI/rs:fit:1200:1199:1/g:ce/aHR0cDovLzEuYnAu/YmxvZ3Nwb3QuY29t/Ly05QnRydDN1TGtm/WS9WazlHTlBkemJN/SS9BQUFBQUFBQXNV/NC9vbzZzTFh3R2hG/VS9zMTYwMC9fRFND/NTU4NS5KUEc",
//     "https://imgs.search.brave.com/VnTywObniOtRGhynVKGx7i8qylVrEZyBQEXZGIlCZjQ/rs:fit:1018:738:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0xSmdMUkZMaFlP/OC9VRGQ5MW45RnFB/SS9BQUFBQUFBQUVT/WS80LW1uTzBUNFhf/by9zMTYwMC9ZZWxs/b3ctRHVjay0zLmpw/Zw",
//     "https://imgs.search.brave.com/C903NuycM51YVmQ6KkXWWeGOSBAq4Q9RCTIgVsYWLfo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/TktqTjNaaWd0bkd3/dW9fNFZoeHB3SGFF/SyZwaWQ9QXBp",
//     "https://imgs.search.brave.com/M9X3cvaF1zrPg-2zfKO76ns21Ix0DPM3nrWKZ3imOTk/rs:fit:1200:1170:1/g:ce/aHR0cDovL3d3dy5j/YXB0YWlubWl0Y2hz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9iaWdz/dG9jay1Qb3J0cmFp/dC1PZi1BLU11c2Nv/dnktRHVjay1jYS0y/NjY3MjMzMDguanBn",
//     "https://imgs.search.brave.com/0M4fTb0oDFbvVqyhhZBZuBOY_jZMglR_hImtyVzYJHs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Y2FwdGFpbm1pdGNo/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDEvd29v/ZC1kdWNrLVBGWUhW/Wk4uanBn",
//     "https://imgs.search.brave.com/z3NmBGJs9fWHUmjF-7gjgdpsABoUI8U2TuSNTLvH_nU/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZm94dHYuY29t/L3N0YXRpYy5mb3gy/ZGV0cm9pdC5jb20v/d3d3LmZveDJkZXRy/b2l0LmNvbS9jb250/ZW50L3VwbG9hZHMv/MjAyMC8xMi8xMjgw/LzcyMC9yYW5keXR1/Y2tlci5qcGc_dmU9/MSZ0bD0x",
//     "https://imgs.search.brave.com/dEQEuwgMVbAcZ495jA8LeLWepSlm9HDmZjDDXgs9Jkg/rs:fit:1200:799:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS9fdlNNamVWTWtC/ZG8vUzY3c2RoVngx/Z0kvQUFBQUFBQUFB/R2Mvc3ByZEhvc1Vf/QjgvczE2MDAvX0RT/QzAxODErKFdvb2Qr/RHVjaykuanBn",
//     "https://imgs.search.brave.com/E1PY_5_ML8GKEEivhH-E_0Z-HFgt_xO2LSLIGQej3Uo/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9tZWRp/YS5kaXN0cmFjdGlm/eS5jb20vYnJhbmQt/aW1nL1oxY3NnZzgv/MHgwL2R1Y2stMTQ5/MzQwNTI0MTA2Mi5q/cGc",
//     "https://imgs.search.brave.com/rMl3emfFqNHWwaT_F71tcagzDvxbudq9kg_NRwrxIDA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzQw/MDAwL3ZlbGthL2Vl/bmQtMTM2Nzk1NDQy/N2JPVi5qcGc",
//     "https://imgs.search.brave.com/WxV-YH8qvXBtRWQfC1kgNdrA5uCXkeUkGS5Ljl0XNgU/rs:fit:1024:679:1/g:ce/aHR0cHM6Ly9mYXJt/YW5pbWFscGV0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy9mX2Iyd2Jr/Z18wLTEwMjR4Njc5/LmpwZw",
//     "https://imgs.search.brave.com/ljlsOxlYQ-iku3XUnRv5tU4JFtHnEtJKhEp-kr_BT2g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z2tjYW01Z3hwbG4y/MS5qcGc_YXV0bz13/ZWJwJnM9NWYxZDAw/YTE0NTAxOWZmM2Mx/MjlhNWQ4MzZhODcy/NjM0MGZjZjZmZQ",
//     "https://imgs.search.brave.com/nShbRhEMuDKy8WuGMATdjEiX_dKvdyd08epyBbKjAn8/rs:fit:1024:576:1/g:ce/aHR0cHM6Ly93d3cu/bGVhcm5uYXR1cmFs/ZmFybWluZy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvQ2F5dWdhLWR1/Y2stMTAyNHg1NzYu/anBn",
//   ];
//   const [cards, setCards] = useState(getCards());
//   const [chosenKeys, setChosenKeys] = useState([]);

//   function clicked(key) {
//     console.log(chosenKeys);
//     if (chosenKeys.includes(key)) {
//       alert("lose");
//       return;
//     }
//     props.increment();
//     console.log(chosenKeys.concat(key));
//     setChosenKeys(chosenKeys.concat(key));
//   }

//   function getCards() {
//     let tempCards = [];
//     for (let i = 0; i < 12; i++) {
//       tempCards = tempCards.concat(
//         <Card
//           image={images[i]}
//           key={images[i]}
//           keyValue={images[i]}
//           clickFunction={clicked}
//         />,
//       );
//     }
//     return tempCards;
//   }

//   return <div className="game">{cards}</div>;
// }

export default Game;
