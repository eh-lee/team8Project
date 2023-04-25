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

const Battle = () => {
  const nav = useNavigate();

  const [nickname, setNickname] = useState("");
  const [roomName, setRoomName] = useState("");

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
          "/chat/hunsuChat?splitNumber=4&splitPageNumber=1"
        );
        // maxParty
        // nicknmae
        // roomName
        // chatIdx
        console.log("data===========>", res.data.result);
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
      <MobileLayout>
        {/* 배틀 페이지 헤더 */}
        <BattleHeader>
          <BattleHeaderCont>
            <BattleBackBtn
              onClick={() => {
                nav(-1);
              }}
            >
              <MdArrowBackIosNew size="1rem" />
            </BattleBackBtn>
          </BattleHeaderCont>
        </BattleHeader>
        {/* 배틀 페이지 헤더 */}

        {/* 채팅 리스트 */}
        {/* <ChatCardCont ref={postCardContRef}> */}
        <ChatCardCont>
          {chattingList?.map((item, idx) => (
            <ChatCard
              key={idx}
              chatIdx={item.chatIdx}
              roomName={item.roomName}
              nickname={item.nickname}
              maxParty={item.maxParty}
              // isFirst={idx === 0}
            />
          ))}
        </ChatCardCont>

        {/* 채팅 리스트 */}

        {/* ====== 채팅방 개설 버튼 ====== */}
        <BtnCont>
          <Link
            onClick={(e) =>
              !nickname || !roomName ? e.preventDefault() : null
            }
            to={`/battle/chat?nickName=${nickname}&roomName=${roomName}`}
          >
            <button
              onClick={createChatModalOpenHandler}
              // title={title}
              type="submit"
            >
              채팅방 개설
            </button>
          </Link>
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
  bottom: 100px;
  position: fixed;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
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

const BattleHeader = styled.header`
  background-color: white;
  position: fixed;
  /* top: 0; */

  width: 100%;
  min-width: 200px;
  max-width: 400px;
  height: 48px;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
`;

const BattleHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;

  height: 48px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.5%;
`;

const BattleBackBtn = styled.div`
  /* border: 1px solid green; */
  color: rgb(180, 180, 180);
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;
