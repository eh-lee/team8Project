import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { instance, instanceWithAuth } from "../../api/axios";
import MobileLayout from "../../layout/MobileLayout";
import { ReactComponent as VerticalDots } from "../../assets/icons/common/verticaldots.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/common/back.svg";
import DetailPostContents from "../../components/detail/DetailPostContents";
import DetailPostCommentsList from "../../components/detail/DetailPostCommentsList";
import ModalPortal from "../../components/modal/ModalPortal";
import DetailMenuModal from "../../components/modal/DetailMenuModal";
import ProCon from "../../components/poll/ProCon";

const DetailPost = () => {
  const nav = useNavigate();

  const { postIdx } = useParams();

  // 메뉴바 모달 관리
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const menuModalOpenHandler = () => {
    setIsMenuModalOpen(true);
  };

  const menuModalCloseHandler = () => {
    setIsMenuModalOpen(false);
  };

  // 상세 게시글 카테고리 관리
  const [detailPostCat, setDetailPostCat] = useState([]);

  // 상세 게시글 카테고리 get
  useEffect(() => {
    const getDetailPost = async () => {
      const { data } = await instance.get(
        `/postCards/post/category/${postIdx}`
      );
      setDetailPostCat(data);
      console.log("진짜 데이터를 좀 보자", data);
    };
    getDetailPost();
  }, []);

  // 상세 투표
  const [detailPoll, setDetailPoll] = useState({});

  useEffect(() => {
    const getDetailPoll = async () => {
      const { data } = await instanceWithAuth.get(
        `/postCards/post/contents/${postIdx}`
      );
      setDetailPoll(data.contents);
    };
    getDetailPoll();
  }, [postIdx]);

  return (
    <>
      <MobileLayout>
        {/* ================== Wirte페이지와 공용으로 사용되는 Header로 Refactoring 예정 ==================== */}
        {/* 상세 게시글 페이지 헤더 */}

        <DetailPost_Header>
          <DetailPost_HeaderCont>
            <DetailPost_BackBtn
              onClick={() => {
                nav(-1);
              }}
            >
              <BackIcon />
            </DetailPost_BackBtn>
            <DetailPost_Category>
              {detailPostCat.maincategory}◦{detailPostCat.category}
            </DetailPost_Category>
            <DetailPost_MenuBtn onClick={menuModalOpenHandler}>
              <StVerticalDots />
            </DetailPost_MenuBtn>
          </DetailPost_HeaderCont>
        </DetailPost_Header>
        {/* ================== Wirte페이지와 공용으로 사용되는 Header로 Refactoring 예정 ==================== */}
        {/* 메뉴모달 */}

        <ModalPortal>
          <ModalCont>
            {isMenuModalOpen && (
              <DetailMenuModal
                open={isMenuModalOpen}
                close={menuModalCloseHandler}
                postIdx={postIdx}
                detailPostCat={detailPostCat}
              />
            )}
          </ModalCont>
        </ModalPortal>
        {/* 상세페이지 내용 */}
        <DetailPostContents />

        {/* 상세페이지 투표 */}
        <DetailPoll>
          {detailPoll.pollType === "proCon" ? (
            <ProCon
              detailPostIdx={postIdx}
              parentProInputValue={detailPoll.proInputValue}
              parentConInputValue={detailPoll.conInputValue}
              detailPollTitle={detailPoll.pollTitle}
              detailProCount={detailPoll.proCount}
              detailConCount={detailPoll.conCount}
            />
          ) : null}
          {/* {pollType === select ? <> </> : null} */}
        </DetailPoll>

        {/* 댓글, 답글 */}
        <DetailPostCommentsList postIdx={postIdx} />
      </MobileLayout>
    </>
  );
};

export default DetailPost;

const StVerticalDots = styled(VerticalDots)`
  &:hover {
    cursor: pointer;
  }
`;

const DetailPoll = styled.div`
  width: 100%;
`;

// 상세 게시글 페이지 헤더
const DetailPost_Header = styled.header`
  background-color: white;
  position: fixed;
  /* top: 0; */

  width: 100%;
  min-width: 200px;
  max-width: 400px;
  height: 48px;
  /* height: 5vh; */
  /* HEADER 높이 맞추기 */
  z-index: 1;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
`;

const DetailPost_HeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;

  height: 48px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 7.5%;
`;

const DetailPost_BackBtn = styled.div`
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

const DetailPost_Category = styled.div`
  /* border: 1px solid blue; */
  letter-spacing: 0.0125em;
  height: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: rgb(70, 70, 70);
`;

const DetailPost_MenuBtn = styled.div`
  /* border: 1px solid burlywood; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: rgb(180, 180, 180);
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const ModalCont = styled.div`
  width: 164px;
  height: 80px;
`;
