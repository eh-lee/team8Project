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
