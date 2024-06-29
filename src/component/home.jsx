import { useNavigate } from "react-router-dom";
import "../style/component-style.css";

const Home = ({ setUserName, userName, setRoomId }) => {
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    navigate("/join-room");
  };

  const handleCreateRoom = () => {
    fetch(`/api/create-room?hostName=${userName}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setRoomId(res.roomId);
        navigate("/room");
      });
  };

  return (
    <div className="card">
      <div className="displayFlexColumnStyle">
        <label htmlFor="nameField" className="lableStyle">
          Your Name
        </label>
        <input
          type="text"
          id="nameField"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>

      <button type="button" onClick={handleCreateRoom}>
        Create Room
      </button>

      <button type="button" onClick={handleJoinRoom}>
        Join Room
      </button>
    </div>
  );
};

export default Home;
