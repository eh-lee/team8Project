/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./FooterNav.style";

function FooterNav() {
  const navi = useNavigate();

  return (
    <St.Column>
      <St.Nav>
        <St.FooterUl>
          <St.FooterBox onClick={() => navi("/")}>
            <St.FooterBoxColumn>
              <St.FooterNavIcon icon="Home" />홈
            </St.FooterBoxColumn>
          </St.FooterBox>
          <St.FooterBox onClick={() => navi("/board")}>
            <St.FooterBoxColumn>
              <St.FooterNavIcon icon="Board" />
              훈수게시판
            </St.FooterBoxColumn>
          </St.FooterBox>
          <St.FooterBox onClick={() => navi("/battle")}>
          {/* <St.FooterBox onClick={() => alert('현재 점검 중인 기능입니다.')}> */}
            <St.FooterBoxColumn>
              <St.FooterNavIcon icon="Battle" />
              훈수배틀
            </St.FooterBoxColumn>
          </St.FooterBox>
          <St.FooterBox onClick={() => navi("/write")}>
            <St.FooterBoxColumn>
              <St.FooterNavIcon icon="Write" />
              글쓰기
            </St.FooterBoxColumn>
          </St.FooterBox>
        </St.FooterUl>
      </St.Nav>
    </St.Column>
  );
}

export default FooterNav;
