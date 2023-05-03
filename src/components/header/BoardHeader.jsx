import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardCategorySlider from "../board/BoardCategorySlider";
import * as St from "./BoardHeader.style";

const BoardHeader = () => {
  const navi = useNavigate();
  const location = useLocation();
  const BoardCallback = (x, y, z) => {
    setPrevCategory(x);
    setCategory(y);
    setPage(z);
  };
  const [prevCategory, setPrevCategory] = useState("전체");
  const [category, setCategory] = useState("전체");
  const [page, setPage] = useState(1);

  return (
    <St.Header>
      <St.Wrap>
        <St.Title>훈수게시판</St.Title>
        <St.Row>
          <St.MainCategory
            isActive={location.pathname === "/totalboard"}
            onClick={() => navi("/totalboard")}
          >
            전체
          </St.MainCategory>
          <St.MainCategory
            isActive={location.pathname === "/humourboard"}
            onClick={() => navi("/humourboard")}
          >
            유머
          </St.MainCategory>
          <St.MainCategory
            isActive={location.pathname === "/seriousboard"}
            nClick={() => navi("/seriousboard")}
          >
            진지
          </St.MainCategory>
        </St.Row>
        <BoardCategorySlider parentFunction={BoardCallback} />
      </St.Wrap>
    </St.Header>
  );
};

export default BoardHeader;
