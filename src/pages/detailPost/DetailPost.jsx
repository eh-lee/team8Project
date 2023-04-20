import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { instance } from "../../api/axios";
import MobileLayout from "../../layout/MobileLayout";
import Footer from "../../components/footer/Footer";
import { FiMoreVertical } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import DetailPostContents from "../../components/detail/DetailPostContents";
import DetailPostCommentsList from "../../components/detail/DetailPostCommentsList";
import ProCon from "../../components/poll/ProCon";

const DetailPost = () => {
  const nav = useNavigate();

  const { postIdx } = useParams();

  // 상세 게시글을 담을 state
  const [detailPost, setDetailPost] = useState([]);

  useEffect(() => {
    const getDetailPost = async () => {
      const { data } = await instance.get(
        `/postCards/post/category/${postIdx}`
      );
      setDetailPost(data);
    };
    getDetailPost();
  }, []);

  const [detailPoll, setDetailPoll] = useState({});

  useEffect(() => {
    const getDetailPoll = async () => {
      const { data } = await instance.get(
        `/postCards/post/contents/${postIdx}`
      );
      setDetailPoll(data.contents);
    };
    getDetailPoll();
  }, [postIdx]);

  console.log("detailPoll=========>", detailPoll);
  console.log("pollType=========>", detailPoll.pollTitle);
  console.log("pollTitle=========>", detailPoll.pollType);
  console.log("tag=========>", detailPoll.tag);
  console.log("tag=========>", detailPoll.proCount);

  return (
    <>
      {/* Mobile Layout setting */}
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
              <MdArrowBackIosNew size="1rem" />
            </DetailPost_BackBtn>
            <DetailPost_Category>
              {detailPost.maincategory}🌝{detailPost.category}
            </DetailPost_Category>
            <DetailPost_MenuBtn
              onClick={() => {
                nav(-1);
              }}
            >
              <FiMoreVertical size="1rem" />
            </DetailPost_MenuBtn>
          </DetailPost_HeaderCont>
        </DetailPost_Header>
        {/* ================== Wirte페이지와 공용으로 사용되는 Header로 Refactoring 예정 ==================== */}

        {/* 상세페이지 내용 */}
        <DetailPostContents />

        <DetailPoll>
          {detailPoll.pollType === "proCon" ? (
            <ProCon
              detailPollTitle={detailPoll.pollTitle}
              detailProCount={detailPoll.proCount}
              detailConCount={detailPoll.conCount}
            />
          ) : null}
          {/* {pollType === select ? <> </> : null} */}
        </DetailPoll>

        {/* <DetailPoll postIdx={postIdx}></DetailPoll> */}
        {/* <DetailPostEtc postIdx={postIdx}></DetailPostEtc> */}
        {/* <ProCon postIdx={postIdx}></ProCon> */}
        {/* ======================= pseudo ======================= */}
        {/* <DetailPoll>에서 postIdx로 instance.post /api/postCards/post/contents/{postIdx} 해서
{ pollType === procon?  <></> : null }
{ pollType === select?  <></> : null }
*/}
        {/* ======================= pseudo ======================= */}

        {/* 댓글, 답글 */}
        <DetailPostCommentsList postIdx={postIdx} />
      </MobileLayout>
    </>
  );
};

export default DetailPost;

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
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const DetailPost_MenuBtn = styled.div`
  /* border: 1px solid burlywood; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;
