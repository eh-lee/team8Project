import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/axios";
import * as St from "./LiveBattleCard.style";

const LiveBattleCard = () => {
  const nav = useNavigate();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    const getLiveBattle = async () => {
      try {
        const { data } = await instance.get("chat/hunsuChat/live");
        setRoomName(data.roomName);
      } catch (error) {
        const errorMsg = error.response.data.message;
        console.error("LiveBattle Get", error);
      }
    };
    getLiveBattle();
  }, []);

  const battleInHandler = () => {
    alert("현재 점검 중인 기능입니다.");
    // nav(`/battle/chat?name=${nickname}&room=${roomName}`);
  };

  return (
    <XXXNewChattingCont>
      <XXXPostCardSliderInfo title="실시간 훈수 배틀" more="더 보기" on="on" />
      <St.LiveBattleCardWrap>
        <St.TitleCont>
          <St.TitleText>Q. {roomName.slice(0, 20)}</St.TitleText>
        </St.TitleCont>
        <St.BtnCont>
          <St.Btn onClick={battleInHandler}>참여하기</St.Btn>
        </St.BtnCont>
      </St.LiveBattleCardWrap>
    </XXXNewChattingCont>
  );
};

const XXXNewChattingCont = styled.div``;

const XXXPostCardSliderInfo = ({ colored, title, more, on }) => {
  const nav = useNavigate();
  return (
    <XXXPostCardSliderInfoXXX>
      <XXXPostCardSliderTitle>
        <span className="colored">{colored}</span>
        {title}
      </XXXPostCardSliderTitle>
      <XXXPostCardSliderMore
        onClick={() => {
          if (on !== "on") {
            nav("/board");
          } else {
            nav("/battle");
          }
        }}
      >
        {more}
      </XXXPostCardSliderMore>
    </XXXPostCardSliderInfoXXX>
  );
};

const XXXPostCardSliderInfoXXX = styled.div`
  /* border: 1px solid olivedrab; */
  width: 350px;
  height: 26px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const XXXPostCardSliderTitle = styled.h1`
  /* border: 1px solid red; */
  font-weight: 600;
  font-size: 20px;
  color: #2d2d2d;

  /* colored에 스타일주기 */
  span.colored {
    color: #ef3f61;
  }
`;

const XXXPostCardSliderMore = styled.span`
  /* border: 1px solid blue; */
  color: #ef3f61;
  font-size: 0.8rem;
  cursor: pointer;
`;

export default LiveBattleCard;
