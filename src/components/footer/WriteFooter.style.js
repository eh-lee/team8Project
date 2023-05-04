import styled from "styled-components";
import { ReactComponent as Camera } from "../../assets/icons/common/camera.svg"
import { ReactComponent as VoteIcon } from "../../assets/icons/common/vote.svg"

const PrevImgCont = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: column;
  padding: 16px 44px;
  /* border-top: 1px solid #BDBDC9; */
  /* border-bottom: 1px solid #BDBDC9; */
  border-top: 1px solid #F4F4F5;
  border-bottom: 1px solid #F4F4F5;
`;

const CancleBtn = styled.span`
    /* border: 1px solid orange; */
    font-size: 14px;
    color: #BDBDC9;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
    &:hover {
      cursor: pointer;
      color: #EF3F61;
    }
`;

const PrevImgs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 400px;
  /* StMobileLayout의 width와 동일하게 처리 */
  border-top: 0.01rem solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255);
`;

const ModalCont = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-start;
  min-height: 30px;
  height: 7vh;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  margin: 0 7.5%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: rgb(70, 70, 70);
`;

const Poll = styled.button`
  gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  min-width: 113px;
  padding: 3px 5px;
  border: 1px solid #C4C4C4;
  border-radius: 2rem;
  background-color: white;
  color: #3A3A59;
  font-size: 14px;

  &:hover {
    color: white;
    background-color: #3a3a59;
    outline: none;
    cursor: pointer;
    path {
      stroke: white;
    }
  }
`;

const ImageCont = styled.label`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 0;
  justify-content: flex-end;
  outline: none;
  font-size: 20px;
  border: none;
  background-color: transparent;

  &:hover {
    & > span {
      visibility: visible;
      opacity: 0.8;
    }
  }
`;

const InfoText = styled.span`
  padding: 10px;
  border-radius: 30px 30px 0 30px;
  background-color: #EF3F61;
  color: white;
  position: absolute;
  bottom: 55px;
  right: 40px;
  font-size: 16px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageIcon = styled(Camera)`
  width: 100%;
  height: 100%;
&:hover {
  cursor: pointer;
  path:nth-child(1), path:nth-child(2) {
    stroke: #3a3a59;
  }};
`;


export {
  PrevImgCont,
  Footer,
  Column,
  Nav,
  Poll,
  ImageCont,
  CancleBtn,
  PrevImgs,

  InfoText,

  ImageInput,
  ImageIcon,
  VoteIcon,
  ModalCont,
}


// PollModal.style
const PollWriteWrap = styled.div`
  position: fixed;
  z-index: 1001;
  /* WriteForm의 poll 아이콘 보다 크게 */
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: white;
`;

const PollWriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const PollWriteHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 5vh;
  // *============ HEADER 높이 ===============*
`;

const PollWriteCanc = styled.div`
  /* border: 1px solid red; */
  margin-left: 7.5%;

  &:hover {
    cursor: pointer;
    color: rgb(175, 175, 175);
  }
`;

const PollWriteCategory = styled.div`
  /* border: 1px solid gray; */
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const PollWirteTitle = styled.div`
  height: 24px;
  font-weight: 600;
  font-size: 18px;
`;

const PollMarginRight = styled.div`
  width: 0.9rem;
  margin-right: 10%;
`;

const PollWriteMain = styled.form`
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  min-height: 400px;
  overflow-y: scroll;
`;


const PollType = styled.div`
`;

const PollTypeText = styled.div`
  margin: 10px 20px;
`;

const PollRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
`;

const PollProConType = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 7.5px 0;
  width: 180px;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  color: ${(props) => (props.isClicked ? "white" : "black")};
  background-color: ${(props) => (props.isClicked ? "#3A3A59" : "white")};

  &:hover {
    cursor: pointer;
  }
`;

const PollSelectType = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 7.5px 0;
  width: 180px;
  text-align: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  color: ${(props) => (props.isClicked ? "white" : "black")};
  background-color: ${(props) => (props.isClicked ? "#3A3A59" : "white")};

  &:hover {
    cursor: pointer;
  }
`;

const PollTitle = styled.div``;

const PollTitleText = styled.div`
  margin: 10px 20px;
`;

const PollButton = styled.button`
  /* margin-top: 50%; */
  position: fixed;
  /* width: 47.8%; */
  width: 360px;
  bottom: 0;
  padding: 16px 8px;
  margin: 20px;
  color: white;
  background-color: #ef3f61;
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: center;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const PollInput = styled.input`
  border-radius: 0.5rem;
  height: 40px;
  width: 340px;
  padding: 5px 10px;
  margin: 10px 20px;
  border: 0.1rem solid rgb(220, 220, 220);

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    background-color: rgba(200, 200, 200, 0.2);
    outline: none;
  }
`;

const PollSelect = styled.div``;

const PollSelectText = styled.div`
  margin: 10px 20px;
`;

const PollCandid = styled.input`
  border-radius: 0.5rem;
  height: 40px;
  width: 340px;
  padding: 5px 10px;
  margin: 10px 20px;
  border: 0.1rem solid rgb(220, 220, 220);

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    background-color: rgba(200, 200, 200, 0.2);
    outline: none;
  }
`;

const Gap = styled.div`
  &::before {
    content: "";
    display: block;
    min-height: 200px; /* 원하는 높이 값으로 조정 */
  }
`;

export {
  PollWriteWrap,
  PollWriteHeader,
  PollWriteHeaderCont,
  PollWriteCanc,
  PollWriteCategory,
  PollWirteTitle,
  PollMarginRight,
  PollWriteMain,
  PollType,
  PollTypeText,
  PollRow,
  PollProConType,
  PollSelectType,
  PollTitle,
  PollTitleText,
  PollButton,
  PollInput,
  PollSelect,
  PollSelectText,
  PollCandid,
  Gap,
}