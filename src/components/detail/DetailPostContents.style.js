import styled, { css } from "styled-components";


// ========= 상세 게시글 정보 =========
const InfoWrap = styled.div`
  margin: 9.5vh 7.5% 0 7.5%;
  display: flex;
  flex-direction: row;
`;

const UserInfoLvImg = styled.img`
  background-color: #e1e2e4;
  margin: 0 0.7rem 0 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserInfoCont = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const UserInfoNickname = styled.li`
  font-size: 14px;
`;

const UserInfoLevel = styled.li`
  font-size: 10px;
  color: red;
`;

const UserInfoCreatedAt = styled.div`
  font-size: 10px;
  color: rgb(100, 100, 100);
`;

// ========= 상세 게시글 내용 =========
const ContentWrap = styled.ul`
  border-bottom: 1px solid lightgray;
  margin: 2rem 0 0 0;
  padding: 0 7.5% 2rem 7.5%;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.li`
  border-bottom: 1px solid lightgray;
  display: flex;
  font-size: 24px;
  padding-bottom: 15px;
`;

const ContentDesc = styled.li`
  display: flex;
  margin: 20px 0 40px 0;
  font-size: 16px;
`;

const ImgWrap = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 16px;
`;

const ContentInfo = styled.li`
  display: flex;
  height: 24px;
  flex-direction: row;
  gap: 12px;
  justify-content: flex-end;
`;

const ContentIconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: #8a8a8a; */
  color: rgb(100, 100, 100);
`;

const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  font-size: 20px;

  ${({ pointerOn }) => {
    if (pointerOn === "on") {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

const StDetailPostContentImg = styled.img`
  height: 24px;
  width: 24px;
`;

const ContentCount = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 18px;
  font-size: 14px;
`;

export {
    InfoWrap,
    UserInfoLvImg,
    InfoCont,
    UserInfoCont,
    UserInfoNickname,
    UserInfoLevel,
    UserInfoCreatedAt,
    ContentWrap,
    ContentTitle,
    ContentDesc,
    ImgWrap,
    ContentInfo,
    ContentIconCont,
    ContentIcon,
    StDetailPostContentImg,
    ContentCount,
};