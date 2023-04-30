import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaVoteYea } from "react-icons/fa";
import { ReactComponent as Camera } from "../../assets/icons/common/camera.svg"
import PollModal from "../modal/PollModal";
import ModalPortal from "../modal/ModalPortal";

function WriteFooterNav() {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const [imgs, setImgs] = useState([]);
  const [preImgs, setPreImgs] = useState([]);

  // const imgInputRef = useRef(null);

  // const handleClick = () => {
  //   imgInputRef.current.click();
  // };

  const imgOnchangeHandler = (event) => {
    console.log("이미지 업로드 어떻게 되지요?=======>", event.target.files)
    // console.log("filesArr type======>", typeof event.target.files);
    const fileList = event.target.files;
    setImgs(fileList);
    localStorage.setItem('isWritingImg', true);
  };
  console.log("여러장 저장되나?", imgs);

  const pollModalOpenHandler = () => {
    setIsPollModalOpen(true);
  };
  const pollModalCloseHandler = () => {
    setIsPollModalOpen(false);
  };

  return (
    <>
      <StyledColumn>
        <StyledNav>
          <StyledPoll onClick={() => pollModalOpenHandler()}>
            <FaVoteYea />
            투표 생성
          </StyledPoll>
          <StyledImageCont>
            <StImageInput
              type="file"
              accept="image/*"
              multiple
              // ref={imgInputRef}
              onChange={imgOnchangeHandler}
            />
            {/* <StImageIcon onClick={handleClick} /> */}
            <StImageIcon />
          </StyledImageCont>
        </StyledNav>
      </StyledColumn>

      <ModalPortal>
        <ModalCont>
          {isPollModalOpen && (
            <PollModal open={isPollModalOpen} close={pollModalCloseHandler} />
          )}
        </ModalCont>
      </ModalPortal>
    </>
  );
}

const ModalCont = styled.div`
  width: 400px;
  margin: 0 auto;
`;

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
  margin: 0 7.5%;
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
  border: 1px solid #3a3a59;
  border-radius: 2rem;
  background-color: white;
  color: #3a3a59;
  font-size: 0.825rem;

  &:hover {
    color: white;
    background-color: #3a3a59;
    outline: none;
    cursor: pointer;
  }
`;

const StyledImageCont = styled.label`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 0;
  justify-content: flex-end;
  outline: none;
  font-size: 20px;
  border: none;
  background-color: transparent;
`;

const StImageIcon = styled(Camera)`
  width: 100%;
  height: 100%;
&:hover {
  cursor: pointer;
  path:nth-child(1), path:nth-child(2) {
    stroke: #3a3a59;
  }};
`;

const StImageInput = styled.input`
  display: none;
`

export default WriteFooterNav;