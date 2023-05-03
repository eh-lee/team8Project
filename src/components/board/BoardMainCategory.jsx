import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as St from "./BoardMainCategory.style";

const BoardMainCategory = () => {
  const navi = useNavigate();
  const location = useLocation();

  return (
    // board 통합하기 pseudo
    // onClick에 각각의 board를 인식할 수 있는 state를 넣어 주고, 해당 state가 클릭되었을 때
    // isActive를 실행시키기.

    <St.Around>
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
        onClick={() => navi("/seriousboard")}
      >
        진지
      </St.MainCategory>
    </St.Around>
  );
};

export default BoardMainCategory;
