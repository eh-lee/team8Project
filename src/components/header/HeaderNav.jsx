/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import logo from "../../assets/icons/main-logo-icon-2.png";
function HeaderNav() {
  const navi = useNavigate();

  return (
    <StyledNav>
      <HeaderUl>
        <Header_Logo onClick={() => navi("/")} src={logo} />
        <Header_Box>
          <Header_Box_Item>
            <BiSearch
              size="1.75em"
              onClick={() => alert("구현 중인 기능입니다.")}
            />
          </Header_Box_Item>
          <Header_Box_Item>
            <BiBell
              size="1.75em"
              onClick={() => alert("구현 중인 기능입니다.")}
            />
          </Header_Box_Item>
          <Header_Box_Item>
            <BiUser size="1.75em" onClick={() => navi("/mypage")} />
          </Header_Box_Item>
        </Header_Box>
      </HeaderUl>
    </StyledNav>
  );
}

const Header_Logo = styled.img`
  height: 1.5rem;
  margin-top: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;
const Header_Box_Item = styled.div`
  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
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
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Header_Box = styled.div`
  gap: 0.75rem;
  padding: 0.75rem 0;
  display: flex;
  width: 10%;
  text-align: center;
  justify-content: flex-end;

  /* cursor: pointer; */
`;

const Header_Title_Box = styled.div`
  font-size: 1.25rem;
  display: flex;
  width: 15%;
  text-align: center;
  align-items: center;
  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }

  /* &::before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
  } */
`;

export default HeaderNav;
