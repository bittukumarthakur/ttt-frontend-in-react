const Cell = ({ id, onClick, text }) => {
  const style = {
    height: "80px",
    width: "80px",
    fontSize: "2em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div id={`cell-id-${id}`} style={style} key={id} onClick={onClick}>
      {text}
    </div>
  );
};

export default Cell;
