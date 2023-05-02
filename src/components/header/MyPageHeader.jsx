import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./MyPageHeader.style";

const MyPageHeader = () => {
  const navi = useNavigate();

  return (
    <St.Header>
      <St.HeaderCont>
        <St.BtnBox
          onClick={() => {
            navi(-1);
          }}
        >
          <St.BackIcon />
        </St.BtnBox>
        <St.Title>마이페이지</St.Title>
        <St.FooBtn />
      </St.HeaderCont>
    </St.Header>
  );
};

export default MyPageHeader;
