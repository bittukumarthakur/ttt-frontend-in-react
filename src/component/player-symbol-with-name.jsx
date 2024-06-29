const PlayerSymbolWithName = ({ name, symbol, isCurrentPlayer }) => {
  const background = isCurrentPlayer
    ? "rgba(90, 154, 168, 1)"
    : "rgba(217, 217, 217, 0.94)";

  return (
    <div className="playerSymbol" style={{ background }}>
      <div className="fontSize1-5rem">{name}</div>
      <div className="verticalLine"></div>
      <div className="fontSize1-5rem">{symbol}</div>
    </div>
  );
};

export default PlayerSymbolWithName;
