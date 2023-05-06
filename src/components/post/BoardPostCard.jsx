import React, { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import * as St from "./BoardPostCard.style";
import Categories from "../elem/Categories";
import Icons from "../elem/Icons";

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
  const [isImgs, setIsImgs] = useState(false);

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

  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const res = await instance.get(`/postCards/post/imgs/${postIdx}`);
        if (res.data.imgs[0]) {
          setIsImgs(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchImgs();
  }, []);

  const categories = Categories;
  const icons = Icons;

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
          {isImgs ? (
            <>
              <St.PostCardTitleIcon>
                <St.IconImg />
              </St.PostCardTitleIcon>
            </>
          ) : null}
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
        <St.PostCardContent>
          {content?.length > 50 ? content.substring(0, 50) + "..." : content}
        </St.PostCardContent>
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
