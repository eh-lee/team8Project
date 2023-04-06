import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <FooterUl>
        <Footer_Box>
          {/* <FooterLi> */}
          <FooterLink to="/">홈</FooterLink>
          {/* </FooterLi> */}
        </Footer_Box>
        <Footer_Box>
          {/* <FooterLi> */}
          <FooterLink to="/">훈수게시판</FooterLink>
          {/* </FooterLi> */}
        </Footer_Box>
        <Footer_Box>
          {/* <FooterLi> */}
          <FooterLink to="/">훈수배틀</FooterLink>
          {/* </FooterLi> */}
        </Footer_Box>
        <Footer_Box>
          {/* <FooterLi> */}
          <FooterLink to="/board">글쓰기</FooterLink>
          {/* </FooterLi> */}
        </Footer_Box>
      </FooterUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 2rem 1rem;
`;

const FooterUl = styled.ul`
  display: flex;
  width: 100%;
  gap: 1%;
`;

const Footer_Box = styled.div`
  display: flex;
  /* flex-direction: column;아이콘 추가 시 */
  width: 25%;
  text-align: center;
  justify-content: space-evenly;
`;

// const FooterLi = styled.li`
//   width: 25%;
//   text-align: center;
// `;

const FooterLink = styled(Link)`
  color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

export default Nav;
