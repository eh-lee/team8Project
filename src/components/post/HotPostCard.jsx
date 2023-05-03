import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./HotPostCard.style"

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
    <St.PostCardWrap
      mainCategory={mainCategory}
      category={category}
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
      // className="no-hover"
    >
      <St.PostCardCont>
        <St.TitleBox>
          <St.MainCategory>
            {/* =========== Cat. Label =============== */}
            <St.CatBtn>
              {mainCategory}&nbsp;
              {categoryIconsMap[category]}
            </St.CatBtn>
            {/* =========== Cat. Label =============== */}
          </St.MainCategory>
          <St.Title>
            {title}
            {/* <St.PostCardIsImgIn src={imgIcon} /> */}
            <St.IconImg />
          </St.Title>
        </St.TitleBox>

        <St.ContentBox>
          <St.Content>{content}</St.Content>
        </St.ContentBox>
        <St.InfoBox>
          {/* 좋아요수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              {/* <St.PostCardInfoContentImg src={like} /> */}
              <St.IconLike />
            </St.InfoContentIcon>
            <St.InfoContentCount>
              {likesCount}
            </St.InfoContentCount>
          </St.InfoContent>
          {/* 조회수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              {/* <StPostCardInfoContentImg src={view} /> */}
              <St.IconView />
            </St.InfoContentIcon>
            <St.InfoContentCount>
              {viewCount}
            </St.InfoContentCount>
          </St.InfoContent>
          {/* 댓글 버튼, 개수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              {/* <StPostCardInfoContentImg src={comment} /> */}
              <St.IconComment />
            </St.InfoContentIcon>
            <St.InfoContentCount>
              {commentCount}
            </St.InfoContentCount>
          </St.InfoContent>
        </St.InfoBox>
      </St.PostCardCont>
    </St.PostCardWrap>
  );
};

export default HotPostCard;