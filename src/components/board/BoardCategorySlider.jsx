import React, { useState } from "react";
import Categories from "../elem/WholeCategories";
import { useRef } from "react";
import * as St from "./BoardCategorySlider.style";

const BoardCategorySlider = ({ parentFunction }) => {
  const [prevCategory, setPrevCategory] = useState("전체");
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);

  const categories = Categories;

  const handleCategoryClick = (category) => {
    setPrevCategory(prevCategory);
    setCategory(category);
    setPage(1);
  };

  parentFunction(prevCategory, category, page);

  const categorySliderRef = useRef(null);

  const [currentPosition, setCurrentPosition] = useState(0);

  const moveLeftHandler = () => {
    if (currentPosition >= 0) {
      return;
    } else {
      return setCurrentPosition((prev) => prev + 400);
    }
  };

  const moveRightHandler = () => {
    if (currentPosition <= -1200) {
      return;
    } else {
      return setCurrentPosition((prev) => prev - 400);
    }
  };

  return (
    <>
      <St.CatLeftButton onClick={moveLeftHandler}>❮</St.CatLeftButton>
      <St.CatSliderWrap>
        <St.CategorySlider
          ref={categorySliderRef}
          currentPosition={currentPosition}
        >
          {categories.map((item, index) => (
            <St.CatButton
              key={index}
              index={index}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </St.CatButton>
          ))}
        </St.CategorySlider>
      </St.CatSliderWrap>
      <St.CatRightButton onClick={moveRightHandler}>❯</St.CatRightButton>
    </>
  );
};

export default BoardCategorySlider;
