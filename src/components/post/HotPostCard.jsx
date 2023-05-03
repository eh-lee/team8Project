import React from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../elem/Categories";
import Icons from "../elem/Icons";
import * as St from "./HotPostCard.style";

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

  const categories = Categories;
  const icons = Icons;

  const categoryIconsMap = categories.reduce((acc, cur, idx) => {
    acc[cur] = icons[idx];
    return acc;
  }, {});

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
            <St.InfoContentCount>{likesCount}</St.InfoContentCount>
          </St.InfoContent>
          {/* 조회수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              {/* <StPostCardInfoContentImg src={view} /> */}
              <St.IconView />
            </St.InfoContentIcon>
            <St.InfoContentCount>{viewCount}</St.InfoContentCount>
          </St.InfoContent>
          {/* 댓글 버튼, 개수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              {/* <StPostCardInfoContentImg src={comment} /> */}
              <St.IconComment />
            </St.InfoContentIcon>
            <St.InfoContentCount>{commentCount}</St.InfoContentCount>
          </St.InfoContent>
        </St.InfoBox>
      </St.PostCardCont>
    </St.PostCardWrap>
  );
};

export default HotPostCard;
