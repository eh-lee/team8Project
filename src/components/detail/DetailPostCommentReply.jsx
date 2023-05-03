import React, { useEffect, useState } from "react";
import { instanceWithAuth } from "../../api/axios";
import { useFormattingDate } from "../hook/useFormattingDate";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=18.png";
import * as St from "./DetailPostCommentReply.style"

const DetailPostCommentReply = ({ reply }) => {
  
  // 답훈수 삭제 관리
  const [isDelete, setIsDelete] = useState(false);

  // 답훈수 작성한 시간
  const [createdDate, formattingDate] = useFormattingDate(reply.createdAt);

  useEffect(() => {
    formattingDate();
  }, []);

  // 답글 삭제 요청
  const deleteReplytHandler = async () => {
    try {
      await instanceWithAuth.delete(
        `reply/${reply.postIdx}/${reply.commentIdx}/${reply.replyIdx}`
      );
      setIsDelete(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    !isDelete && (
      <>
        {/* 유저정보(프로필사진, 닉네임, 레벨, 작성시간 */}
        <St.ReplyInfoWrap>
          <St.InfoProfileCont>
            <St.InfoUserLvImg src={level1} />
          </St.InfoProfileCont>
          <St.UserInfoWrap>
            <St.UserInfoCont>
              <St.InfoNickname>
                {" "}
                {reply.nickname}{" "}
              </St.InfoNickname>
              <St.InfoUserLevel> 레벨 </St.InfoUserLevel>
            </St.UserInfoCont>
            <St.UserInfoCreatedAt>
              {createdDate}
              <St.ReplyDelete onClick={deleteReplytHandler}>
                <St.IconTrash />
              </St.ReplyDelete>
            </St.UserInfoCreatedAt>
          </St.UserInfoWrap>
        </St.ReplyInfoWrap>

        {/* 댓글, 댓글 좋아요 */}
        <St.CommentReplyWrap>
          <St.CommentReply> {reply.comment} </St.CommentReply>
        </St.CommentReplyWrap>
      </>
    )
  );
};

export default DetailPostCommentReply;