import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileLayout from "../../layout/MobileLayout";
import styled from "styled-components";
import FooterNav from "../../components/footer/FooterNav";
import { MdArrowBackIosNew } from "react-icons/md";
import ModalPortal from "../../components/modal/ModalPortal";
import CreateChatModal from "../../components/modal/CreateChatModal";
import { useEffect } from "react";
import { instance } from "../../api/axios";
import ChatCard from "../../components/chat/ChatCard";
import { Helmet } from "react-helmet";
import battleCreate from "../../assets/battle/battleCreate.png";

const Battle = () => {
  const nav = useNavigate();

  const [chattingList, setChattingList] = useState([]);

  const [isCreateChatModalOpen, setIsCreateChatModalOpen] = useState(false);

  const createChatModalOpenHandler = () => {
    setIsCreateChatModalOpen(true);
  };
  const createChatModalCloseHandler = () => {
    setIsCreateChatModalOpen(false);
  };

  useEffect(() => {
    const chatInfoGet = async () => {
      try {
        // const res = await instance.get(`/chat/hunsuChat?splitNumber=4&splitPageNumber=${page}`)
        const res = await instance.get(
          "/chat/hunsuChat?splitNumber=10&splitPageNumber=1"
        );
        // maxParty
        // nicknmae
        // roomName
        // chatIdx
        console.log("채팅리스트data===========>", res.data.result);
        setChattingList(res.data.result);
      } catch (error) {
        console.error("채팅get실패", error);
      }
    };
    chatInfoGet();
  }, []);

  // maxParty: number,
  // nickname: string,
  // roomName: string,
  // chatIdx: UUID

  // /chat/hunsuChat/{chatIdx}

  return (
    <>
      <Helmet>
        <title>훈수 — 훈수배틀</title>
      </Helmet>
      <MobileLayout>
        {/* 배틀 페이지 헤더 */}
        <StBattleHeaderWrap>
          <StBattleHeaderSub>
            <StBattleTitle>훈수 배틀</StBattleTitle>
            <StBattleCategoryCont>
              <StBattleCategory isActive onClick={() => nav("/battle")}>
                실시간 배틀
              </StBattleCategory>
              <StBattleCategory onClick={() => nav("/donebattle")}>
                지난 배틀
              </StBattleCategory>
            </StBattleCategoryCont>
            <StBattleBackground>
              {/* <div> 대충 배경자리 </div> */}
            </StBattleBackground>
          </StBattleHeaderSub>
        </StBattleHeaderWrap>
        {/* 배틀 페이지 헤더 */}

        {/* 채팅 리스트 */}
        {/* <ChatCardCont ref={postCardContRef}> */}
        <ChatCardCont>
          {chattingList?.map((item, idx) => (
            <ChatCard
              key={idx}
              roomName={item.roomName}
              idx={idx}
              maxParty={item.maxParty}
              // isFirst={idx === 0}
            />
          ))}
        </ChatCardCont>
        {/* 채팅 리스트 */}

        {/* ====== 채팅방 개설 버튼 ====== */}
        <BtnCont>
          <StBattleCreateBtn onClick={createChatModalOpenHandler} type="submit">
            <StBattleCreateImg src={battleCreate} />
          </StBattleCreateBtn>
        </BtnCont>
        {/* ====== 채팅방 개설 버튼 ====== */}

        {/* ====== 푸터 ======= */}
        <StyledFooter>
          <FooterNav />
        </StyledFooter>
        {/* ====== 푸터 ======= */}

        {/* ====== 채팅 생성 모달 ====== */}
        <ModalPortal>
          <ModalCont>
            {isCreateChatModalOpen && (
              <CreateChatModal
                open={isCreateChatModalOpen}
                close={createChatModalCloseHandler}
              />
            )}
          </ModalCont>
        </ModalPortal>
        {/* ====== 채팅 생성 모달 ====== */}
      </MobileLayout>
    </>
  );
};

export default Battle;

const ChatCardCont = styled.div`
  /* margin-top: 48px; */
  margin-top: 146px;
  /* === 헤더 높이 === */
  height: 45.28rem;
  /* height: 70vh; */
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ModalCont = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const BtnCont = styled.div`
  /* border: 1px solid tomato; */
  bottom: 100px;
  position: fixed;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const StBattleCreateImg = styled.img`
  height: 56px;
  width: 56px;
`;

const StBattleCreateBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
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
  padding-top: 0.75rem;
  width: 100%;
  /* width: 100vw; */
  max-width: 400px;
  font-size: 18px;
  color: rgb(70, 70, 70);
`;

const StBattleHeaderSub = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;

const StBattleTitle = styled.div`
  /* border: 1px solid tomato; */
  padding-bottom: 2rem;
  /* margin-bottom: 30px; */
  display: flex;
  justify-content: center;
`;

const StBattleCategoryCont = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StBattleCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 0.75rem;
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
  background-color: rgb(220, 220, 220, 0.35);
`;
