import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as View } from "../../assets/icons/common/eye.svg";
import { ReactComponent as Img } from "../../assets/icons/common/img.svg";
import { ReactComponent as Like } from "../../assets/icons/common/like.svg";
import { ReactComponent as Comment } from "../../assets/icons/common/comment.svg";

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
    <PostCardWrap
      mainCategory={mainCategory}
      category={category}
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
      // className="no-hover"
    >
      <StPostCardCont>
        <PostCard_TitleBox>
          <PostCard_MainCategory>
            {/* =========== Cat. Label =============== */}
            <PostCardCatBtn>
              {mainCategory}&nbsp;
              {categoryIconsMap[category]}
            </PostCardCatBtn>
            {/* =========== Cat. Label =============== */}
          </PostCard_MainCategory>
          <PostCard_Title>
            {title}
            {/* <StPostCardIsImgIn src={imgIcon} /> */}
            <StIconImg />
          </PostCard_Title>
        </PostCard_TitleBox>

        <PostCard_ContentBox>
          <PostCard_Content>{content}</PostCard_Content>
        </PostCard_ContentBox>
        <PostCard_InfoBox>
          {/* 좋아요수 */}
          <PostCard_Info_Content>
            <PostCard_Info_Content_Icon>
              {/* <StPostCardInfoContentImg src={like} /> */}
              <StIconLike />
            </PostCard_Info_Content_Icon>
            <PostCard_Info_Content_Count>
              {likesCount}
            </PostCard_Info_Content_Count>
          </PostCard_Info_Content>
          {/* 조회수 */}
          <PostCard_Info_Content>
            <PostCard_Info_Content_Icon>
              {/* <StPostCardInfoContentImg src={view} /> */}
              <StIconView />
            </PostCard_Info_Content_Icon>
            <PostCard_Info_Content_Count>
              {viewCount}
            </PostCard_Info_Content_Count>
          </PostCard_Info_Content>
          {/* 댓글 버튼, 개수 */}
          <PostCard_Info_Content>
            <PostCard_Info_Content_Icon>
              {/* <StPostCardInfoContentImg src={comment} /> */}
              <StIconComment />
            </PostCard_Info_Content_Icon>
            <PostCard_Info_Content_Count>
              {commentCount}
            </PostCard_Info_Content_Count>
          </PostCard_Info_Content>
        </PostCard_InfoBox>
      </StPostCardCont>
    </PostCardWrap>
  );
};

export default HotPostCard;

const StIconView = styled(View)`
  width: 14px;
  height: 10px;
  path:nth-child(1),
  path:nth-child(2) {
    stroke: #8a8a8a;
  }
`;

const StIconLike = styled(Like)`
  width: 12px;
  height: 11px;
  path:nth-child(1) {
    stroke: #8a8a8a;
  }
`;

const StIconComment = styled(Comment)`
  width: 12px;
  height: 12px;
  path:nth-child(1) {
    stroke: #8a8a8a;
  }
`;

const StIconImg = styled(Img)`
  width: 16px;
  height: 16px;
  path:nth-child(1) {
    stroke: #c4c4c4;
  }
`;

const PostCardWrap = styled.div`
  /* border: 1px solid black; */
  border-radius: 0.75rem;
  background-color: #ffffff;

  width: 340px;
  /* height: 130px; */
  height: 148px;

  /* padding: 12px 0; */

  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StPostCardCont = styled.div`
  /* border: 1px solid tomato; */
  height: 148px;
  display: flex;
  flex-direction: column;
  /* height: 148px; */
`;

const PostCard_TitleBox = styled.ul`
  /* border: 1px solid orange; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 308px;
  height: 46px;

  gap: 4px;

  margin: 12px 16px 0 16px;

  margin-bottom: 4px;
`;

const PostCard_MainCategory = styled.li`
  /* border: 1px solid black; */
  height: 18px;
`;

//* =========== Cat. Label ===============
const PostCardCatBtn = styled.button`
  height: 18px;
  color: white;
  background: #3a3a59;
  border-radius: 100px;
  padding: 0 4px 0px 6px;
  border: none;
  font-size: 10px;
`;
//* =========== Cat. Label ===============

const PostCard_Title = styled.li`
  /* border: 1px solid black; */
  font-size: 18px;
  width: 308px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StPostCardIsImgIn = styled.img`
  width: 16px;
  height: 16px;
`;

const PostCard_ContentBox = styled.div`
  /* border: 1px solid blue; */
  width: 308px;
  height: 49px;
  display: flex;
  margin-bottom: 4px;
  margin-left: 16px;
  border-bottom: 1px solid #e1e2e4;

  overflow-y: scroll;
  max-height: 30vh;
  word-wrap: break-word;
  /* 줄바꿈 기능 */
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
  font-size: 14px;
`;

const PostCard_InfoBox = styled.ul`
  /* border: 1px solid green; */

  width: 308px;
  height: 16px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.9rem;

  font-size: 10px;
  margin: 0 16px 12px 16px;
`;

const PostCard_Info_Content = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: gray;
`;

const PostCard_Info_Content_Icon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StPostCardInfoContentImg = styled.img`
  width: 16px;
  height: 16px;
`;

const PostCard_Info_Content_Count = styled.div`
  width: 24px;
`;
