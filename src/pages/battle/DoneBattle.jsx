import React, { useState } from "react";
import styled from "styled-components";
import ChatCard from "../../components/chat/ChatCard";
import FooterNav from "../../components/footer/FooterNav";
import MobileLayout from "../../layout/MobileLayout.tsx";
import { instance } from "../../api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Battle = () => {
  const nav = useNavigate();
  useEffect(() => {
    document.title = "훈수 - 지난 배틀";
  }, []);

  const [chattingList, setChattingList] = useState([]);

  const isRealTime = false;

  useEffect(() => {
    const doneChatGet = async () => {
      try {
        const res = await instance.get("/chat/doneChat");

        // setChattingList(res.data.sth)
        // setChatSaveIdx(res.data.sth.sth);
      } catch (error) {
        console.error("채팅get실패", error);
      }
    };
    doneChatGet();
  }, []);

  // 1. 전체 채팅 목록 (roomName, chatSaveIndx) => doneBattle
  // /api/chat/doneChat

  // maxParty: number,
  // nickname: string,
  // roomName: string,
  // chatIdx: UUID

  // /chat/hunsuChat/{chatIdx}

  return (
    <>
      <MobileLayout>
        {/* 배틀 페이지 헤더 */}
        <StBattleHeaderWrap>
          <StBattleHeaderSub>
            <StBattleTitle>훈수 배틀</StBattleTitle>
            <StBattleCategoryCont>
              <StBattleCategory onClick={() => nav("/battle")}>
                실시간 배틀
              </StBattleCategory>
              <StBattleCategory isActive onClick={() => nav("/donebattle")}>
                지난 배틀
              </StBattleCategory>
            </StBattleCategoryCont>
            <StBattleBackground></StBattleBackground>
          </StBattleHeaderSub>
        </StBattleHeaderWrap>
        {/* 배틀 페이지 헤더 */}

        {/* 채팅 리스트 */}
        <ChatCardCont>
          {chattingList?.map((item, idx) => (
            <ChatCard
              key={idx}
              idx={idx}
              chatSaveIdx={item.chatSaveIdx}
              roomName={item.roomName}
            />
          ))}
        </ChatCardCont>
        {/* 채팅 리스트 */}

        {/* ====== 푸터 ======= */}
        <StyledFooter>
          <FooterNav />
        </StyledFooter>
        {/* ====== 푸터 ======= */}
      </MobileLayout>
    </>
  );
};

export default Battle;

const ChatCardCont = styled.div`
  margin-top: 146px;
  /* === 헤더 높이 === */
  height: 45.28rem;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 400px;
  /* StMobileLayout의 width와 동일하게 처리 */
  border-top: 0.01rem solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255);
  /* opacity: ${({ isOpaque }) => (isOpaque ? 1 : 0)}; */
  /* transition: opacity 0.3s ease-in-out; */
`;

// ================= header ====================

const StBattleHeaderWrap = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  padding-top: 16px;
  width: 100%;
  max-width: 400px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(70, 70, 70);
`;

const StBattleHeaderSub = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;

const StBattleTitle = styled.div`
  height: 48px;
  border-bottom: 1px solid #e1e2e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBattleCategoryCont = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StBattleCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-decoration: none;

  color: ${(props) =>
    props.isActive ? "rgb(70, 70, 70)" : "rgb(180, 180, 180)"};
  border-bottom: ${(props) =>
    props.isActive
      ? "0.2rem solid rgb(70, 70, 70)"
      : "0.1rem solid rgb(180, 180, 180)"};

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: rgb(70, 70, 70);
    border-bottom: 0.2rem solid rgb(70, 70, 70);
  }
`;

const StBattleBackground = styled.div`
  padding: 5% 0;
  width: 400px;
  height: 12px;
  background-color: #f2f2f7;
`;
