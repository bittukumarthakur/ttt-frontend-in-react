const Players = ({ playerDetails, currentPlayerName }) => {
  if (!playerDetails) {
    return;
  }

  const style = {
    display: "flex",
    justifyContent: "space-between",
  };

  const playerWithSymbol = playerDetails.map((player, index) => {
    return player.name === currentPlayerName ? (
      <h1 style={{ color: "green" }} key={index}>
        {player.symbol} : {player.name}
      </h1>
    ) : (
      <h1 key={index}>
        {player.symbol} : {player.name}
      </h1>
    );
  });

  return <div style={style}>{playerWithSymbol}</div>;
};

export default Players;
