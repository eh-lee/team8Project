import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <FooterUl>
        <FooterLi>
          <FooterLink to="/">홈</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink to="/">검색</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink to="/">글쓰기</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink to="/board">게시판</FooterLink>
        </FooterLi>
        <FooterLi>
          <FooterLink to="/mypage">마이페이지</FooterLink>
        </FooterLi>
      </FooterUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const FooterUl = styled.ul`
  display: flex;
  width: 100%;
`;

const FooterLi = styled.li`
  width: 20%;
  text-align: center;
  font-size: 1rem;
`;

const FooterLink = styled(Link)`
  color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

export default Nav;
