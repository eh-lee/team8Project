import React, { useState, ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRoomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoom(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!name || !room) {
      event.preventDefault();
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading"></h1>
        <div>
          <input
            style={{ border: "1px solid red", backgroundColor: "red" }}
            placeholder="이름"
            className="joinInput"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            placeholder="채팅방"
            className="joinInput mt-20"
            type="text"
            onChange={handleRoomChange}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(e: MouseEvent<HTMLAnchorElement>) =>
            !name || !room ? e.preventDefault() : null
          }
        >
          <button className="button mt-20" type="submit" onClick={handleClick}>
            가입
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
