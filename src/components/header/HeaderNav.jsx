/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../assets/icons/common/searchIcon.png";
import alarmIcon from "../../assets/icons/common/alarm.png";
import mypageIcon from "../../assets/icons/common/myPage.png";
import logoWhite from "../../assets/icons/logo/main-logo-white.png";

function HeaderNav() {
  const navi = useNavigate();

  return (
    <StyledNav>
      <HeaderUl>
        <Header_Logo onClick={() => navi("/")} src={logoWhite} />
        <Header_Box>
          <Header_Box_Item>
            <StHeaderBoxIcon
              src={searchIcon}
              onClick={() => alert("구현 중인 기능입니다.")}
            />
          </Header_Box_Item>
          <Header_Box_Item>
            <StHeaderBoxIcon
              src={alarmIcon}
              onClick={() => alert("구현 중인 기능입니다.")}
            />
          </Header_Box_Item>
          <Header_Box_Item>
            <StHeaderBoxIcon src={mypageIcon} onClick={() => navi("/myPage")} />
          </Header_Box_Item>
        </Header_Box>
      </HeaderUl>
    </StyledNav>
  );
}

const Header_Logo = styled.img`
  width: 47px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;
const Header_Box_Item = styled.div`
  /* border: 1px solid white; */
  width: 24px;
  height: 24px;
  color: white;
  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

const StHeaderBoxIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0 7.5%;
  /* padding: 0 2rem; */
  // PostCard와 라인 정렬을 위해 padding값 수정
  color: rgb(70, 70, 70);
`;

const HeaderUl = styled.ul`
  /* border: 1px solid orange; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header_Box = styled.div`
  /* border: 1px solid white; */
  gap: 16px;
  padding: 0.75rem 0;
  display: flex;
  width: 104px;
  height: 24px;
  text-align: center;
  justify-content: flex-end;

  /* cursor: pointer; */
`;

export default HeaderNav;
