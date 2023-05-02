import styled, { css } from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";

// ========================= 댓글 정보 =========================
const CommentInfoWrap = styled.ul`
  height: 43px;
  margin: 5% 7.5% 0 7.5%;
  display: flex;
  flex-direction: row;
`;

const CommentInfoProfileCont = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 32px;
`;

const CommentInfoUserLvImg = styled.img`
  background-color: #e1e2e4;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const CommentInfoUserSide = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  background-color: white;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 22px;

  font-size: 10px;
  top: 48.84%;
`;

const CommentInfoUserInfoWrap = styled.li`
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
`;

const CommentInfoUserInfoCont = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* 정렬 어디로하지? align-items: center; */
  gap: 5px;
`;

const CommentInfoNickname = styled.li`
  font-size: 14px;
`;

const CommentInfoUserLevel = styled.li`
  font-size: 10px;
  color: #f26581;
`;

const CommentInfoUserInfoCreatedAt = styled.ul`
  font-size: 10px;
  color: #8a8a8a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CommentDelete = styled.li`
  display: flex;
  font-size: 10px;
  cursor: pointer;
  margin-left: 4px;
`;

const IconTrash = styled(Trash)`
  width: 15px;
  height: 15px;
  &:hover {
    cursor: pointer;
    path:nth-child(1) {
      stroke: #3a3a59;
    }
  }
`;

// ========================= 댓글 =========================
const CommentWrap = styled.div`
  margin-left: 7.5%;
  margin-right: 5px;
  display: flex;
  align-items: flex-end;
  gap: 15px;
`;

const Comment = styled.div`
  width: 224px;
  min-height: 14px;
  background-color: white;
  border-radius: 0px 10px 10px 10px;
  margin-left: 40px;
  font-size: 14px;
  padding: 10px;
`;

const CommentLikeCont = styled.div`
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: #8a8a8a;
`;

const CommentLikeIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-items: center;
  align-items: center;

  ${({ pointerOn }) => {
    if (pointerOn === "on") {
      return css`
        cursor: pointer;
      `;
    }
  }}
`;

const CommentLikeCount = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  font-size: 12px;
`;

// ========================= 답훈수 =========================

const ReplyWrap = styled.div`
  margin-left: 7.5%;
`;

const ReplyCreateToggle = styled.div`
  width: 100px;
  font-size: 12px;
  display: flex;
  color: #8a8a8a;
  margin: 10px 0 20px 40px;
  cursor: pointer;
  &:active {
    color: #3A3A59;
  }
`;

const ReplyMore = styled.div`
  width: 100px;
  font-size: 12px;
  display: flex;
  color: #8a8a8a;
  margin: 10px 0 0 40px;
  cursor: pointer;
  /* &:active {
    color: #3A3A59;
  } */
`;

const ReplyListCont = styled.div`
  // 애니메이션 주기는 다음에 다시 시도!
  /* ${({ isActive }) =>
    !isActive &&
    css`
      height: auto;
      width: 100px;
    `} */
`;

// ========================= 답훈수 입력 푸터 =========================

const Footer = styled.footer`
  background-color: white;
  max-width: 400px;
  min-height: 30px;
  height: 64px;

  // footer 위에만 그림자 주기
  box-shadow: rgba(100, 100, 111, 0.4) 0px -5px 15px -5px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const ReplyInputCont = styled.form`
  /* border: 1px solid green; */
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 7.5%;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
`;

const ReplyInput = styled.textarea`
  resize: none;
  background-color: #f2f2f7;
  border: none;
  border-radius: 20px;
  width: 260px;
  height: 22px;
  display: flex;
  padding: 10px 16px 0 16px;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ReplyInputBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #dddde4;
  width: 32px;
  height: 24px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  cursor: pointer;
  &:hover {
    color: #3a3a59;
  }
`;

export {
    CommentInfoWrap,
    CommentInfoProfileCont,
    CommentInfoUserLvImg,
    CommentInfoUserSide,
    CommentInfoUserInfoWrap,
    CommentInfoUserInfoCont,
    CommentInfoNickname,
    CommentInfoUserLevel,
    CommentInfoUserInfoCreatedAt,
    CommentDelete,
    IconTrash,
    CommentWrap,
    Comment,
    CommentLikeCont,
    CommentLikeIcon,
    CommentLikeCount,
    ReplyWrap,
    ReplyCreateToggle,
    ReplyMore,
    ReplyListCont,
    Footer,
    ReplyInputCont,
    ReplyInput,
    ReplyInputBtn,
};