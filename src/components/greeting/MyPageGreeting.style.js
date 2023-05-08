import styled from "styled-components";

const Column = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 5px;
height: 88px;
`;

const Between = styled.div`
display: flex;
justify-content: space-between;
max-width: 400px;
`;

const ImgBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
`;

const LevelImg = styled.img`
height: 72px;
width: 72px;
`;

const UserInfoCont = styled.ul`
margin-left: 16px;
height: 68px;
display: flex;
gap: 7px;
flex-direction: column;
justify-content: center;
`;

const Nickname = styled.li`
color: white;
font-size: 24px;
`;

const Level = styled.li`
/* color: #f26581; */
color: rgb(255, 10, 10);
font-size: 14px;
font-weight: bold;
`;

const Email = styled.li`
color: white;
font-size: 10px;
`;

const Wrap = styled.div`
  background-color: #3a3a59;
  height: 160px;
  border-bottom-right-radius: 40px;
  margin-top: 48px;
  padding: 16px 25px;
`;

export { Wrap, Column, Level, LevelImg, UserInfoCont, Nickname, Email, Between, ImgBox }


const SubWrap = styled.div`
width: 340px;
height: 42px;
display: flex;
`;

const Row = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const Text = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: stretch;
letter-spacing: 0.025rem;
`;

const Cont = styled.div`
display: flex;
justify-content: row;
align-items: center;
height: 18px;
margin-bottom: 4px;
`;

const LvImgBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 1.3rem;
aspect-ratio: 1;
border-radius: 50%;
overflow: hidden;
margin-right: 0.25rem;
`;

const Img = styled.img`
height: 100%;
border: none;
`;

const Text1 = styled.div`
margin-left: 4px;
font-size: 14px;
line-height: 18px;
font-weight: bold;
/* color: #ef3f61; */
color: rgb(255, 40, 10);
`;

const Text2 = styled.div`
font-size: 14px;
line-height: 18px;
color: #f4f4f5;
letter-spacing: 0rem;
`;

const ExpBarBG = styled.div`
width: 90%;
/* width: ${(props) => props.goalExp}%; */
height: 0.5rem;
background-color: rgb(230, 230, 230);
border-radius: 2rem;
position: relative;
display: flex;
align-items: center;
top: 0.18rem;
`;

const ExpBar = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
background-color: #ef3f61;
border-radius: 2rem;
width: ${(props) => props.exp}%;
`;

const Baseline = styled.div`
height: 34px;
display: flex;
align-items: baseline;
`;

const LvPoint1 = styled.div`
display: flex;
align-items: center;
font-weight: 700;
font-size: 28px;
color: white;
`;

const LvPoint2 = styled.div`
display: flex;
align-items: center;
color: #c4c4c4;
font-size: 24px;
`;

export { LvPoint1, LvPoint2, Baseline, ExpBar, ExpBarBG, Text1, Text2, Img, LvImgBox, Cont, Text, Row, SubWrap }