import React from "react";
import Icons from "../elem/Icons";
import Categories from "../elem/Categories";
import { useNavigate } from "react-router-dom";
import * as St from "./NewPostCard.style";

const NewPostCard = ({ postIdx, mainCategory, category, title, content }) => {
  const navigate = useNavigate();
  const categories = Categories;
  const icons = Icons;

  const categoryIconsMap = categories.reduce((acc, cur, idx) => {
    acc[cur] = icons[idx];
    return acc;
  }, {});

  return (
    <St.Wrap
      onClick={() => {
        navigate(`/board/${postIdx}`);
      }}
    >
      <St.TitleBox>
        <St.MainCat>
          <St.CatLabel>
            {mainCategory}&nbsp;
            {categoryIconsMap[category]}
          </St.CatLabel>
        </St.MainCat>
        <St.Title>{title?.length > 20 ? title.substring(0, 20) + "..." : title}</St.Title>
      </St.TitleBox>
      <St.Content>{content?.length > 20 ? content.substring(0, 20) + "..." : content}</St.Content>
    </St.Wrap>
  );
};

export default NewPostCard;
