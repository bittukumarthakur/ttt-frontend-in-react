const UserIcon = ({ roomId }) => {
  return (
    <div className="userIconContainer">
      <span style={{ fontSize: "1.5rem" }}>
        {roomId ? `Room Id: ${roomId}` : ""}
      </span>
      <div className="userIcon"></div>
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
    <header className="headerBar">
      <span
        style={{
          fontSize: "2rem",
          textAlign: "center",
          gridColumnStart: "2",
          padding: "1rem",
        }}
      >
        Tic Tac Toe
      </span>
      <UserIcon roomId={roomId} />
    </header>
  );
};

export default HeaderBar;
