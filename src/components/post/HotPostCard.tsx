import React from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../elem/Categories";
import Icons from "../elem/Icons";
import * as St from "./HotPostCard.style";

interface HotPostCardProps {
  mainCategory: string;
  category: string;
  title: string;
  content: string;
  likesCount: number;
  viewCount: number;
  commentCount: number;
  postIdx: number;
  isImg: boolean;
}

const HotPostCard: React.FC<HotPostCardProps> = ({
  mainCategory,
  category,
  title,
  content,
  likesCount,
  viewCount,
  commentCount,
  postIdx,
  isImg,
}) => {
  const navigate = useNavigate();

  const categories = Categories;
  const icons = Icons;

  const categoryIconsMap: Record<string, React.ReactNode> = categories.reduce(
    (acc, cur, idx) => {
      acc[cur] = icons[idx];
      return acc;
    },
    {}
  );

  return (
    <St.PostCardWrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
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
            {title?.length > 20 ? title.substring(0, 20) + "..." : title}
            {isImg ? <St.IconImg /> : null}
          </St.Title>
        </St.TitleBox>

        <St.ContentBox>
          <St.Content>
            {content?.length > 50 ? content.substring(0, 50) + "..." : content}
          </St.Content>
        </St.ContentBox>
        <St.InfoBox>
          {/* 좋아요수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              <St.IconLike />
            </St.InfoContentIcon>
            <St.InfoContentCount>{likesCount}</St.InfoContentCount>
          </St.InfoContent>
          {/* 조회수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
              <St.IconView />
            </St.InfoContentIcon>
            <St.InfoContentCount>{viewCount}</St.InfoContentCount>
          </St.InfoContent>
          {/* 댓글 버튼, 개수 */}
          <St.InfoContent>
            <St.InfoContentIcon>
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
