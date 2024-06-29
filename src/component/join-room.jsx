import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/component-style.css";

const JoinRoom = ({ setRoomId, roomId, userName }) => {
  const [isInvalidRoomId, setIsInvalidRoomId] = useState(false);
  const navigate = useNavigate();

  const handleJoin = () => {
    const req = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomId, userName }),
    };

    fetch("/join-room", req).then((res) => {
      if (res.status == 400) {
        setIsInvalidRoomId(true);
        return;
      }

      navigate("/room");
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <div className="card">
        <div className="displayFlexColumnStyle">
          <label htmlFor="roomId" className="lableStyle">
            Room Id
          </label>
          <input
            type="text"
            id="roomId"
            onChange={(event) => {
              setRoomId(event.target.value);
            }}
          />
          <p style={{ color: "red", height: "1rem" }}>
            {isInvalidRoomId ? "* Room Id is invalid." : ""}
          </p>
        </div>

        <button type="button" onClick={handleJoin}>
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinRoom;
