import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "http://127.0.0.1:3001";

const App = () => {
  const [socket, setSocket] = useState(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [maxParty, setMaxParty] = useState(0);

  useEffect(() => {
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    newSocket.on("testConnect", (msg) => {
      console.log(msg);
    });

    newSocket.on("message", ({ user, text }) => {
      console.log(user.text);
    });

    newSocket.on("sessionId", ({ sessionId, text }) => {
      console.log(sessionId, text);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleJoin = (e) => {
    e.preventDefault();

    if (name && room && maxParty) {
      console.log("Emitting join event with:", { name, room, maxParty });
      socket.emit("join", { name, room, maxParty });
    } else {
      alert("모든 정보를 입력해주세요.");
    }
  };

  const handleMessage = (e) => {
    e.preventDefault();

    if (message) {
      console.log("submit을 눌렀습니다.");
      console.log(
        "message=============================>",
        e.name,
        e.room,
        e.maxParty
      );
      socket.emit("message", { room, msg: message });
      setMessage("");
    }
  };

  return (
    <div>
      <h1>React Socket.IO Client</h1>
      <form onSubmit={handleJoin}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Party"
          value={maxParty}
          onChange={(e) => setMaxParty(e.target.value)}
        />
        <button type="submit">Join</button>
      </form>
      <form onSubmit={handleMessage}>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
