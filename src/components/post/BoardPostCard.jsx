import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import * as St from "./BoardPostCard.style"

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
    <St.PostCardWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
    >
      <St.PostCardTitleBox>
        <St.PostCardRow>
          <St.PostCardCatBtn>
            {mainCategory}&nbsp;
            {categoryIconsMap[category]}
          </St.PostCardCatBtn>
        </St.PostCardRow>

        <St.PostCardRow>
          <St.PostCardTitle>{title}</St.PostCardTitle>
          <St.PostCardTitleIcon></St.PostCardTitleIcon>
          {pollType !== "" ? (
            <>
              <St.PostCardTitleIcon>
                <St.IconVote />
              </St.PostCardTitleIcon>
            </>
          ) : null}
        </St.PostCardRow>
      </St.PostCardTitleBox>

      <St.PostCardContentBox>
        <St.PostCardContent>{content}</St.PostCardContent>
      </St.PostCardContentBox>
      <St.PostCardInfoBox>
        <St.DetailPostContent>
          <St.DetailPostContentIcon>
            <St.IconLike />
          </St.DetailPostContentIcon>
          <St.DetailPostContentCount>{likesCount}</St.DetailPostContentCount>
        </St.DetailPostContent>
        <St.DetailPostContent>
          <St.DetailPostContentIcon>
            <St.IconView />
          </St.DetailPostContentIcon>
          <St.DetailPostContentCount>{viewCount}</St.DetailPostContentCount>
        </St.DetailPostContent>
        <St.DetailPostContent>
          <St.DetailPostContentIcon>
            <St.IconComment />
          </St.DetailPostContentIcon>
          <St.DetailPostContentCount>{commentCount}</St.DetailPostContentCount>
        </St.DetailPostContent>
      </St.PostCardInfoBox>
    </St.PostCardWrap>
  );
};

export default BoardPostCard;