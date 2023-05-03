import styled, { css } from "styled-components";

const FooBG = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ChatEndWrap = styled.ul`
  position: absolute;
  background-color: transparent;
  top: 35%;
  left: 7.5%;
  width: 340px;
  //   height: 176px;
`;

const ChatEndList = styled.ul`
  width: 340px;
  height: 56px;
  /* border: 1px solid darkorchid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #cccccc;
  background-color: white;
  color: #2d2d2d;
  border-radius: 10px 10px 0 0;
  ${({ cursor }) =>
    cursor &&
    css`
      cursor: pointer;
    `};

  ${({ isLogout }) =>
    isLogout &&
    css`
      color: #eb5147;
      border-bottom: none;
      border-radius: 0 0 10px 10px;
    `};

  ${({ topMargin }) =>
    topMargin &&
    css`
      margin-top: 8px;
      border-radius: 10px;
    `};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};

  ${({ medium }) =>
    medium &&
    css`
      height: 73px;
    `};

  ${({ large }) =>
    large &&
    css`
      height: 91px;
    `};
`;

const ButtonText = styled.li`
  font-size: 16px;
  font-weight: 600;
  ${({ Large: isLarge }) =>
    isLarge &&
    css`
      font-size: 18px;
    `};
`;

const ChatEndInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`;

export {
    FooBG,
    ChatEndWrap,
    ChatEndList,
    ButtonText,
    ChatEndInfo,
}