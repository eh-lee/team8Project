import styled from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";


// 댓글 정보
const ReplyInfoWrap = styled.ul`
  height: 34px;
  margin: 0 7.5% 0 7.5%;
  display: flex;
  flex-direction: row;
`;

const InfoProfileCont = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 14px;
`;

const InfoUserLvImg = styled.img`
  background-color: #e1e2e4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const UserInfoWrap = styled.ul`
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
`;

const UserInfoCont = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* 정렬 어디로하지? align-items: center; */
  gap: 5px;
`;

const InfoNickname = styled.li`
  font-size: 14px;
`;

const InfoUserLevel = styled.li`
  font-size: 10px;
  color: #f26581;
`;

const UserInfoCreatedAt = styled.li`
  font-size: 10px;
  /* color: #8a8a8a; */
  color: rgb(100, 100, 100);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReplyDelete = styled.div`
  display: flex;
  font-size: 10px;
  cursor: pointer;
  margin-left: 3px;
`;

const IconTrash = styled(Trash)`
  width: 10px;
  height: 12px;
  &:hover {
    cursor: pointer;
    path:nth-child(1) {
      stroke: #3a3a59;
    }
  }
`;

// 답글
const CommentReplyWrap = styled.div`
  margin-left: 7.5%;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

const CommentReply = styled.div`
  width: 210px;
  min-height: 14px;
  border-radius: 0px 10px 10px 10px;
  margin-left: 40px;
  font-size: 14px;
`;

export {
    ReplyInfoWrap,
    InfoProfileCont,
    InfoUserLvImg,
    UserInfoWrap,
    UserInfoCont,
    InfoNickname,
    InfoUserLevel,
    UserInfoCreatedAt,
    ReplyDelete,
    IconTrash,
    CommentReplyWrap,
    CommentReply,
}