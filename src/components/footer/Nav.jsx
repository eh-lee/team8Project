/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgHome } from "react-icons/cg";
import { TbHandFinger } from "react-icons/tb";
import { RiSwordLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

function Nav() {
  const navi = useNavigate();

  return (
    <StyledColumn>
      <StyledNav>
        <FooterUl>
          <Footer_Box onClick={() => navi("/")}>
            <Footer_Box_Column>
              <CgHome size="1.75em" />홈
            </Footer_Box_Column>
          </Footer_Box>
          <Footer_Box onClick={() => navi("/board")}>
            <Footer_Box_Column>
              <TbHandFinger size="1.75em" />
              훈수게시판
            </Footer_Box_Column>
          </Footer_Box>
          <Footer_Box onClick={() => navi("/battle")}>
            <Footer_Box_Column>
              <RiSwordLine size="1.75em" />
              훈수배틀
            </Footer_Box_Column>
          </Footer_Box>
          <Footer_Box onClick={() => navi("/write")}>
            <Footer_Box_Column>
              <HiOutlinePencil size="1.75em" />
              글쓰기
            </Footer_Box_Column>
          </Footer_Box>
        </FooterUl>
      </StyledNav>
      <FooCont>
        <FooBar />
      </FooCont>
    </StyledColumn>
  );
}

const FooCont = styled.div`
  height: 1.5rem;
  display: flex;
  justify-content: center;
`;

const FooBar = styled.div`
  width: 40%;
  height: 20%;
  border-radius: 2rem;
  margin-top: 0.75rem;
  background-color: rgb(80, 80, 80);
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  color: rgb(70, 70, 70);
`;

const FooterUl = styled.ul`
  display: flex;
  width: 100%;
  gap: 0.1rem;
`;

const Footer_Box = styled.div`
  /* background-color: rgba(217, 0, 0, 0.1); */
  padding: 1.5rem 0;
  display: flex;
  width: 25%;
  text-align: center;
  justify-content: space-evenly;
  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }

  /* cursor: pointer; */
`;

const Footer_Box_Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export default Nav;
