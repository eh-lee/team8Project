import React from "react";
import styled from "styled-components";
import { FaVoteYea } from "react-icons/fa"
import { AiOutlineCamera } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

function WriteFooterNav() {
  const navi = useNavigate();
  const makePollHandler = () => {
    navi("/write/pollwrite");
  }

  return (
    <StyledColumn>
      <StyledNav>
        <StyledPoll onClick={()=>makePollHandler()}>
          <FaVoteYea />투표 생성
        </StyledPoll>
        <StyledImageBtn>
          <AiOutlineCamera />
        </StyledImageBtn>
      </StyledNav>
    </StyledColumn>
  );
}

const StyledColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-start;
  min-height: 30px;
  height: 7vh;
  align-items: center;
`;

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 5vw;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: rgb(70, 70, 70);
`;

const StyledPoll = styled.button`
  gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.5vh;
  min-width: 11vh;
  padding: 3px 5px;
  border: 1px solid #3A3A59;
  border-radius: 2rem;
  background-color: white;
  color:#3A3A59;
  font-size: 0.7rem;

  &:hover {
    color: white;
    background-color: #3A3A59;
    outline: none;
    cursor: pointer;
  }

`;

const StyledImageBtn = styled.button`
  width: 30px;
  display: flex;
  padding: 0;
  justify-content: flex-end;
  outline: none;
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: #D8D8DE;

  &:hover {
    cursor: pointer;
    color: #3A3A59;
  }
  
`

export default WriteFooterNav;
