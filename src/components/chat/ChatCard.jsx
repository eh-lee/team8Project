import React from "react";
import { useNavigate } from "react-router-dom";
import battle1 from "../../assets/battle/battle1.png";
import battle2 from "../../assets/battle/battle2.png";
import { ReactComponent as MaxParty } from "../../assets/icons/common/maxParty.svg";
import * as St from "./ChatCard.style";

const ChatCard = ({ idx, roomName, maxParty, isRealTime }) => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem("hoonsoo_nickname");

  return (
    <St.ChatCardWrap
      onClick={() => {
        alert("현재 점검 중인 기능입니다.");
        // navigate(
        //   `/battle/chat?name=${nickname}&room=${roomName}&maxParty=${maxParty}`
        // );
      }}
    >
      <St.InfoCont>
        <St.InfoTitleBox>
          <St.TitleImg src={idx % 2 === 0 ? battle2 : battle1} />
          <St.Title>{roomName}</St.Title>
        </St.InfoTitleBox>
        {/* {currParty}\ */}
        <St.InfoPartyBox>
          <MaxParty />
          <St.InfoParty>{maxParty}</St.InfoParty>
        </St.InfoPartyBox>
      </St.InfoCont>
    </St.ChatCardWrap>
  );
};

export default ChatCard;
