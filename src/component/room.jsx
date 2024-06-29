import { useEffect, useState } from "react";
import PlayerSymbolWithName from "./player-symbol-with-name";
import Cells from "./tic-tac-toe-board";

// {
//   board: [],
//   players: [
//     { name: "", symbol: "X" },
//     { name: "", symbol: "O" },
//   ],
// }

const useTicTakToe = () => {
  const [gameStatus, setGameStatus] = useState();

  useEffect(() => {
    setInterval(() => {
      fetch("/status")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          return res;
        })
        .then(setGameStatus);
    }, 2000);
  }, []);

  return [gameStatus, setGameStatus];
};

const Room = () => {
  const [state, setState] = useTicTakToe();
  console.log("state", state);
  if (!state || !state.players) return <h1>waiting for other player ...</h1>;

  const [p1, p2] = state.players;

  return (
    <div className="roomContainer">
      <div className="roomHeader">
        <PlayerSymbolWithName
          name={p1.name}
          symbol={p1.symbol}
          isCurrentPlayer={state.currentPlayerName === p1.name}
        />
        <PlayerSymbolWithName
          name={p2.name}
          symbol={p2.symbol}
          isCurrentPlayer={state.currentPlayerName === p2.name}
        />
      </div>

      <div className="cellsContainer">
        <Cells state={state} setState={setState} />
      </div>
    </div>
  );
};

export default Room;
