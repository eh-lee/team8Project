import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { instance } from "../../api/axios";
import { useState } from "react";
import { ReactComponent as Vote } from "../../assets/icons/common/vote.svg";
import { ReactComponent as View } from "../../assets/icons/common/eye.svg";
import { ReactComponent as Like } from "../../assets/icons/common/like.svg";
import { ReactComponent as Comment } from "../../assets/icons/common/comment.svg";

const BoardPostCard = ({
  mainCategory,
  category,
  title,
  content,
  viewCount,
  commentCount,
  postIdx,
  likesCount,
  nickname,
  // isFirst,
  // 자식의 자식이 돼 벌임
}) => {
  const navigate = useNavigate();

  //  포스트 투표 등 GET

  const [pollData, setPollData] = useState({});
  const [pollType, setPollType] = useState("");

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const res = await instance.get(`/postCards/post/contents/${postIdx}`);
        setPollData(res.data.contents);
        setPollType(res.data.contents.pollType);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPoll();
  }, []);

  // console.log("data=====>", pollData);

  // 여기서 pollType이 ""이 아니면 투표 이미지 뜨게.

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
    "👰🏼‍♀️",
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

  return (
    <PostCardWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
    >
      <PostCardTitleBox>
        <PostCardRow>
          <PostCardCatBtn>
            {mainCategory}&nbsp;
            {categoryIconsMap[category]}
          </PostCardCatBtn>
        </PostCardRow>

        <PostCardRow>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardTitleIcon></PostCardTitleIcon>
          {pollType !== "" ? (
            <>
              <PostCardTitleIcon>
                <StIconVote />
              </PostCardTitleIcon>
            </>
          ) : null}
        </PostCardRow>
      </PostCardTitleBox>

      <PostCardContentBox>
        <PostCardContent>{content}</PostCardContent>
      </PostCardContentBox>
      <PostCardInfoBox>
        <DetailPostContent>
          <DetailPostContentIcon>
            <StIconLike />
          </DetailPostContentIcon>
          <DetailPostContentCount>{likesCount}</DetailPostContentCount>
        </DetailPostContent>
        <DetailPostContent>
          <DetailPostContentIcon>
            <StIconView />
          </DetailPostContentIcon>
          <DetailPostContentCount>{viewCount}</DetailPostContentCount>
        </DetailPostContent>
        <DetailPostContent>
          <DetailPostContentIcon>
            <StIconComment />
          </DetailPostContentIcon>
          <DetailPostContentCount>{commentCount}</DetailPostContentCount>
        </DetailPostContent>
      </PostCardInfoBox>
    </PostCardWrap>
  );
};

export default BoardPostCard;

const StIconView = styled(View)`
  path:nth-child(1),
  path:nth-child(2) {
    stroke-width: 2.25px;
  }
`;

const StIconLike = styled(Like)`
  path:nth-child(1) {
    stroke-width: 2.25px;
  }
`;

const StIconComment = styled(Comment)`
  path:nth-child(1) {
    stroke-width: 2.25px;
  }
`;

const StIconVote = styled(Vote)`
  path:nth-child(1),
  path:nth-child(2) {
    stroke: #c4c4c4;
    stroke-width: 2px;
  }
`;

const DetailPostContentCount = styled.div`
  /* border: 1px solid tomato; */
  margin-left: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 18px;
  height: 18px;
  font-size: 14px;
`;

const DetailPostContentIcon = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  font-size: 20px;
`;

const DetailPostContent = styled.li`
  /* border: 1px solid tomato; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8a8a8a;
`;

const PostCardCatBtn = styled.button`
  color: white;
  background: #3a3a59;
  border-radius: 100px;
  padding: 0 4px 0px 6px;
  border: none;
  font-size: 0.5rem;
`;

const PostCardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostCardTitleIcon = styled.div`
  width: 5.5%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8a8a8a;
`;

const PostCardWrap = styled.div`
  /* border: 1px solid red; */
  background-color: white;
  padding: 8% 0 5% 7%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({ isFirst }) => isFirst && `border-top-radius: 1rem;`};

  &:hover {
    cursor: pointer;
  }
`;

const PostCardTitleBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  /* 아이콘 10% 10% */
  gap: 0.5rem;
  /* border: 1px solid green; */
`;

const PostCardMainCategory = styled.li`
  font-size: 0.75rem;
  color: gray;
  max-width: 20%;
`;

const PostCardTitle = styled.li`
  width: 80%;
  font-size: 1.25rem;
`;

const PostCardContentBox = styled.div`
  max-height: 3vh;
  /* max-height: 1%; */
  /* 최대 2줄 */
  width: 90%;
  margin-top: 2.5%;
  overflow-y: scroll;

  word-wrap: break-word;
  display: flex;
  margin-bottom: 5%;

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PostCardContent = styled.div`
  color: #8a8a8a;
  display: flex;
`;

const PostCardInfoBox = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  color: gray;
`;

const PostCardCount = styled.li`
  /* border: 1px solid black; */
  height: 15%;
`;
