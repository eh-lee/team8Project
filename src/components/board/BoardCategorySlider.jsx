import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const BoardCategorySlider = ({ parentFunction }) => {
  const [prevCategory, setPrevCategory] = useState("전체");
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);

  const categories = [
    "전체",
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

  //   버튼 css 적용
  //   넘치는 거 지우기

  return (
    <div>
      <StCatLeftButton onClick={moveLeftHandler}>❮</StCatLeftButton>
      <StCatSliderWrap>
        <CategorySlider
          ref={categorySliderRef}
          currentPosition={currentPosition}
        >
          {categories.map((item, index) => (
            <StCatButton
              key={index}
              index={index}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </StCatButton>
          ))}
        </CategorySlider>
      </StCatSliderWrap>
      <StCatRightButton onClick={moveRightHandler}>❯</StCatRightButton>
    </div>
  );
};

export default BoardCategorySlider;

const StCatButton = styled.button`
  margin-left: ${(props) => (props.index === 0 ? "30px" : "10px")};
`;

const StCatSliderWrap = styled.div`
  width: 400px;
  overflow-x: hidden;
`;
const StCatLeftButton = styled.button`
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 1;
  top: 124px;
  left: 10px;
  border-radius: 50%;
  background-color: rgba(46, 46, 71, 0.3);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const StCatRightButton = styled.button`
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 1;
  top: 124px;
  left: 365px;
  border-radius: 50%;
  background-color: rgba(46, 46, 71, 0.3);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const CategorySlider = styled.div`
  padding: 5% 0;
  width: 1600px;
  background-color: rgb(220, 220, 220, 0.35);
  transform: translateX(${(props) => props.currentPosition}px);

  & > button {
    display: inline-block;
    color: #ef3f61;
    background-color: white;
    border: 0.1rem solid rgb(180, 180, 180);
    border-radius: 1.75rem;
    padding: 0.3rem 1rem;
  }

  & > button:focus {
    background-color: rgb(239, 63, 97);
    /* theme color */
    color: white;
    border: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
