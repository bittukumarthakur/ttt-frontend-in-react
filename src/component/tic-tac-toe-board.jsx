import Cell from "./cell";
import "../style/component-style.css";

const Cells = ({ state, setState }) => {
  const cells = state.board.map((text, id) => {
    const onClick = () => {
      fetch(`/api/mark?position=${id}`)
        .then((x) => x.json())
        .then((x) => {
          setState(x);
        });
    };

    return Cell({ id, onClick, text });
  });

  return <div className="cells">{cells}</div>;
};

export default Cells;
