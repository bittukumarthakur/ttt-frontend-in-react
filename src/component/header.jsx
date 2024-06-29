const UserIcon = ({ roomId }) => {
  const style = {
    background: "rgba(217, 217, 217, 1)",
    height: "3.5rem",
    width: "3.5rem",
    border: "2px solid black",
    borderRadius: "50%",
    marginRight: "1rem",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        justifyContent: "flex-end",
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>
        {roomId ? `Room Id: ${roomId}` : ""}
      </span>
      <div style={style}></div>
    </div>
  );
};

const HeaderBar = ({ roomId }) => {
  const style = {
    display: "inline-grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    background: "rgba(90, 154, 168, 1)",
    borderRadius: "12px 12px 0px 0px",
    height: "4.5rem",
    width: "100%",
  };

  return (
    <header style={style}>
      <span
        style={{
          fontSize: "3.5rem",
          textAlign: "center",
          gridColumnStart: "2",
        }}
      >
        Tic Tac Toe
      </span>
      <UserIcon roomId={roomId} />
    </header>
  );
};

export default HeaderBar;
