const Cell = ({ id, onClick, text }) => {
  return (
    <div id={`cell-id-${id}`} className="cell" key={id} onClick={onClick}>
      {text}
    </div>
  );
};

export default Cell;
