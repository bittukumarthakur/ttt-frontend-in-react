import React, { useState } from "react";

import HeaderBar from "./component/header";
import Home from "./component/home";
import JoinRoom from "./component/join-room";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Room from "./component/room";

const App = () => {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState();

  return (
    <div>
      <HeaderBar roomId={roomId}></HeaderBar>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setUserName={setUserName}
                  userName={userName}
                  setRoomId={setRoomId}
                />
              }
            />
            <Route
              path="/join-room"
              element={
                <JoinRoom
                  setRoomId={setRoomId}
                  userName={userName}
                  roomId={roomId}
                />
              }
            />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
