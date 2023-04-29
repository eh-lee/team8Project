import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewPostCard = ({ postIdx, mainCategory, category, title, content }) => {
  const navigate = useNavigate();

  //* =========== Cat. Label ===============
  const categories = [
    "패션/뷰티",
    "맛집/요리/음식",
    "경제/재테크",
    "썸/연애",
    "취미/운동",
    "스포츠",
    "여행",
    "결혼",
    "게임",
    "반려동물",
    "가족",
    "취업/자격증",
    "일상",
    "기타",
  ];

  const icons = [
    "👗",
    "🍱",
    "💰",
    "💘",
    "🎨",
    "⚽️",
    "✈️",
    "👩‍❤️‍👨",
    "🎮",
    "🐶",
    "👨‍👩‍👧‍👦",
    "💼",
    "💬",
    "🎸",
  ];

  const categoryIconsMap = categories.reduce((acc, cur, idx) => {
    acc[cur] = icons[idx];
    return acc;
  }, {});

  //* =========== Cat. Label ===============
  return (
    <PostCardJrWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
    >
      <PostCardJr_TitleBox>
        <PostCardJr_MainCategory>
          {/* //* =========== Cat. Label =============== */}
          <PostCardCatBtn>
            {mainCategory}&nbsp;
            {categoryIconsMap[category]}
          </PostCardCatBtn>
          {/* //* =========== Cat. Label =============== */}
        </PostCardJr_MainCategory>
        <PostCardJr_Title>{title?.slice(0, 20)}</PostCardJr_Title>
      </PostCardJr_TitleBox>
      <PostCardJr_ContentBox>
        {content}
      </PostCardJr_ContentBox>
    </PostCardJrWrap>
  );
};

export default NewPostCard;

const PostCardJrWrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  background-color: white;

  width: 166px;
  height: 132px;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PostCardJr_TitleBox = styled.ul`
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 134px;
  height: 70px;

  gap: 4px;

  margin: 12px 16px 4px 16px;

`;

const PostCardJr_MainCategory = styled.li`
  /* border: 1px solid black; */
  height: 18px;
  font-size: 10px;
  color: gray;
`;

//* =========== Cat. Label ===============
const PostCardCatBtn = styled.button`
  color: white;
  background: #3a3a59;
  border-radius: 100px;
  padding: 0 4px 0px 6px;
  border: none;
  font-size: 10px;
`;
//* =========== Cat. Label ===============

const PostCardJr_Title = styled.li`
  /* border: 1px solid black; */
  font-size: 18px;
  color: #2D2D2D;
  height: 48px;

  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  word-wrap: break-word;
`;

const PostCardJr_ContentBox = styled.div`
  /* border: 1px solid black; */

  max-height: 10vh;
  width: 134px;
  height: 36px;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  word-wrap: break-word;

  margin-left: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #8A8A8A;
  font-size: 14px;
`;

