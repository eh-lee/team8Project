import styled from "styled-components";


const MessageContEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 400px;
  margin-top: 16px;
  font-size: 14px;
`;


const NameRight = styled.p`
  display: flex;
  align-items: center;
  color: #828282;
  letter-spacing: 0.3px;
  padding-right: 10px;
`;

const MsgBoxMargenta = styled.div`
  border-radius: 10px 0 10px 10px;
  padding: 8px 12px;
  display: inline-block;
  max-width: 65%;
  background: #ef3f61;
  margin-right: 25px;
`;

const MsgTextWhite = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  word-wrap: break-word;
  color: white;
`;

const MessageContStart = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 400px;
  margin: 16px 10px 0 25px;
  font-size: 14px;
  flex-direction: column;
  /* border: 1px solid green; */
`;

const ChatInfoProfileCont = styled.div`
  // border: 1px solid violet;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: relative;
  max-width: 280px;
  height: 32px;
`;

const ChatInfoUserLvImg = styled.img`
  /* border: 1px solid gray; */
  // border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const NameLeft = styled.p`
  display: flex;
  align-items: center;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
`;

const MsgBoxLight = styled.div`
  /* border: 1px solid green; */
  background: white;
  border-radius: 0 10px 10px 10px;
  padding: 8px 12px;
  display: inline-block;
  max-width: 65%;
  margin-left: 40px;
`;

const MsgTextDark = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  word-wrap: break-word;
  color: #353535;
`;

export {
    MessageContEnd,
    NameRight,
    MsgBoxMargenta,
    MsgTextWhite,
    MessageContStart,
    ChatInfoProfileCont,
    ChatInfoUserLvImg,
    NameLeft,
    MsgBoxLight,
    MsgTextDark,
}