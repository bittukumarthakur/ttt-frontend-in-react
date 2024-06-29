const WinnerDetails = ({ winner }) => {
  if (!winner || !winner.player) return;
  const { player } = winner;

  return (
    <h1>
      Winner is {player.symbol} : {player.name}
    </h1>
  );
};

export default WinnerDetails;
