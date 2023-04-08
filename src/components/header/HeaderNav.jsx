/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

function HeaderNav() {
  const navi = useNavigate();

  return (
    <StyledNav>
      <HeaderUl>
        <Header_Title_Box onClick={() => navi("/")}>훈수</Header_Title_Box>
        <Header_Box>
          <Header_Box_Item>
            <BiSearch size="1.75em" />
          </Header_Box_Item>
          <Header_Box_Item>
            <BiBell size="1.75em" />
          </Header_Box_Item>
          <Header_Box_Item>
            <BiUser size="1.75em" onClick={() => navi("/mypage")} />
          </Header_Box_Item>
        </Header_Box>
      </HeaderUl>
    </StyledNav>
  );
}

const Header_Box_Item = styled.div`
  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
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
`;

export default HeaderNav;
