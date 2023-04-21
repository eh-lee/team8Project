import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";

const HotPostCard = ({
  mainCategory,
  category,
  title,
  content,
  likesCount,
  viewCount,
  commentCount,
  postIdx,
}) => {
  const navigate = useNavigate();

  console.log("likesCount=========================##", likesCount);

  return (
    <PostCardWrap
      mainCategory={mainCategory}
      category={category}
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
      // className="no-hover"
    >
      <PostCard_TitleBox>
        <PostCard_MainCategory>
          {mainCategory}🌝{category}
        </PostCard_MainCategory>
        <PostCard_Title>{title}</PostCard_Title>

        {/* 투표 유무 이미지 표시 */}
        {/* <PostCardRow>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardTitleIcon></PostCardTitleIcon>
          {pollType !== "" ? (
            <>
              <PostCardTitleIcon>
                <MdOutlineHowToVote />
              </PostCardTitleIcon>
            </>
          ) : null}
        </PostCardRow> */}
        {/* 투표 유무 이미지 표시 */}
      </PostCard_TitleBox>

      <PostCard_ContentBox>
        <PostCard_Content>{content}</PostCard_Content>
      </PostCard_ContentBox>
      <PostCard_InfoBox>
        {/* 좋아요수 */}
        <PostCard_Info_Content>
          <PostCard_Info_Content_Icon>
            <AiOutlineHeart />
          </PostCard_Info_Content_Icon>
          <PostCard_Info_Content_Count>
            {likesCount}
          </PostCard_Info_Content_Count>
        </PostCard_Info_Content>
        {/* 조회수 */}
        <PostCard_Info_Content>
          <PostCard_Info_Content_Icon>
            <AiOutlineEye />
          </PostCard_Info_Content_Icon>
          <PostCard_Info_Content_Count>{viewCount}</PostCard_Info_Content_Count>
        </PostCard_Info_Content>
        {/* 댓글 버튼, 개수 */}
        <PostCard_Info_Content>
          <PostCard_Info_Content_Icon>
            <IoChatbubbleOutline />
          </PostCard_Info_Content_Icon>
          <PostCard_Info_Content_Count>
            {commentCount}
          </PostCard_Info_Content_Count>
        </PostCard_Info_Content>
      </PostCard_InfoBox>
    </PostCardWrap>
  );
};

export default HotPostCard;

const PostCardWrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 0.75rem;
  background-color: #ffffff;

  width: 280px;
  height: 100px;

  padding: 1rem 0 0.55rem 0;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PostCard_TitleBox = styled.ul`
  /* border: 1px solid orange; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 15.5rem; */
  width: 248px;
  height: 2.5rem;

  gap: 0.5rem;

  margin-left: 1rem;

  margin-bottom: 0.3rem;
`;

const PostCard_MainCategory = styled.li`
  /* border: 1px solid black; */
  font-size: 0.6rem;
  color: gray;
`;

const PostCard_Title = styled.li`
  /* border: 1px solid black; */
  font-size: 1.5rem;
`;

const PostCard_ContentBox = styled.div`
  /* border: 1px solid blue; */
  max-height: 30vh;
  /* height을 안 정해서 스크롤이 안 먹힌 것 */
  width: 15.5rem;
  overflow-y: scroll;
  word-wrap: break-word;
  /* 줄바꿈 기능 */
  display: flex;
  margin-bottom: 0.5rem;
  margin-left: 1rem;

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PostCard_Content = styled.div`
  /* border: 1px solid black; */
  color: gray;
  display: flex;
`;

const PostCard_InfoBox = styled.ul`
  /* border: 1px solid green; */
  border-top: 1px solid #e1e2e4;

  width: 15.5rem;
  height: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.9rem;
  margin-left: 1rem;
`;

const PostCard_Info_Content = styled.li`
  /* border: 1px solid tomato; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: gray;
`;

const PostCard_Info_Content_Icon = styled.div`
  /* border: 1px solid tomato; */
  font-size: 1rem;

  ${({ pointerOn }) => {
    if (pointerOn === "on") {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

const PostCard_Info_Content_Count = styled.div`
  /* border: 1px solid tomato; */
`;
