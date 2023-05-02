import styled from "styled-components";

const ChatCardWrap = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  flex-direction: column;
  /* ${({ isFirst }) => isFirst && `border-top-radius: 1rem;`}; */

  &:hover {
    cursor: pointer;
  }
`;

const InfoCont = styled.ul`
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoTitleBox = styled.li`
  display: flex;
  align-items: flex-start;
  width: 70%;
  margin: 16px 25px;
`;

const TitleImg = styled.img`
  height: 56px;
  width: 56px;
`;

const Title = styled.h2`
  margin: 2px 0 0 8px;
  display: flex;
  justify-content: flex-start;
  width: 90%;
  font-size: 16px;
`;

const InfoPartyBox = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 11%;
  margin: 16px 25px;
`;

const InfoParty = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 18px;
  display: flex;
  font-size: 14px;
`;

export { 
    ChatCardWrap, 
    InfoCont, 
    InfoTitleBox, 
    TitleImg, 
    Title, 
    InfoPartyBox, 
    InfoParty };