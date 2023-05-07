import React, { useEffect, useState } from "react";
import Like from "../like/Like";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=72.png";
import DetailPostCommentReply from "./DetailPostCommentReply";
import { instanceWithAuth } from "../../api/axios";
import { useFormattingDate } from "../hook/useFormattingDate";
import { useNavigate } from "react-router-dom";
import * as St from "./DetailPostComment.style";

const DetailPostComment = ({ comment, isComment, setIsComment }) => {
  const curNickname = localStorage.getItem("hoonsoo_nickname");

  const nav = useNavigate();

  // =============================================== 댓글 ===============================================
  // 댓글 작성한 시간
  const [createdDate, formattingDate] = useFormattingDate(comment.createdAt);

  useEffect(() => {
    formattingDate();
  }, []);

  // 댓글 삭제 관리
  const [isDelete, setIsDelete] = useState(false);

  // 댓글 삭제 요청
  const deleteCommentHandler = async () => {
    try {
      await instanceWithAuth.delete(
        `comment/${comment.postIdx}/${comment.commentIdx}`
      );
      setIsDelete(true);
    } catch (error) {
      console.error("댓글삭제", error.response.data.errorMessage);
      console.error(error);
    }
  };

  // 댓글 좋아요 관리 state
  const [commentLikesCount, setCommentLikesCount] = useState(
    comment.likesCount
  );
  const [islike, setIslike] = useState(comment.isLiked);

  // 댓글 좋아요 버튼
  const clickCommentLike = () => {
    if (curNickname) {
      instanceWithAuth.put(
        `/commentLike/${comment.postIdx}/${comment.commentIdx}`
      );
      setIslike((prev) => !prev);
      setCommentLikesCount((prev) => (islike ? prev - 1 : prev + 1));
    } else {
      alert("로그인 후 이용해주세요!");
    }
  };

  // =============================================== 답훈수 ===============================================

  // 답훈수 관리 state
  const [replyList, setReplyList] = useState([]);

  // 답훈수 더 보기 관리 state
  const [replyisActive, setReplyIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // 새 답훈수 관리 state
  const [newReply, setNewReply] = useState();
  const [curCommentIdx, setCurCommentIdx] = useState("초기값");

  // 답훈수 get요청
  useEffect(() => {
    const getReplyList = async () => {
      const { data } = await instanceWithAuth.get(
        `/reply/${comment.postIdx}/${comment.commentIdx}`
      );
      setReplyList([...data.replys].reverse());
    };
    getReplyList();
  }, [comment]);

  // 답훈수 달기 버튼 핸들러
  const replyCreateHandler = () => {
    setCurCommentIdx(comment.commentIdx);
    setIsComment(false);
  };

  // 답훈수 더 보기 핸들러
  const ReplyisActiveHandler = () => {
    setReplyIsActive(!replyisActive);
    setIsHidden(!isHidden);
  };

  // 새로운 답훈수 핸들러
  const newReplyHandler = (e) => {
    setNewReply(e.target.value);
  };

  // 답훈수 등록 버튼 핸들러
  const newReplysubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instanceWithAuth.post(
        `/reply/${comment.postIdx}/${curCommentIdx}`,
        { comment: newReply }
      );
      setIsComment(!isComment);
      setReplyList((prev) => [...prev, data]);
      setNewReply("");
    } catch (error) {
      console.error("답훈수작성", error);
    }
  };

  return (
    !isDelete && (
      <>
        {/* ======================= 댓글 ======================= */}
        {/* 유저정보(프로필사진, 찬반여부, 닉네임, 레벨, 작성시간 */}
        <St.CommentInfoWrap>
          <St.CommentInfoProfileCont>
            <St.CommentInfoUserLvImg src={level1} alt="댓글 작성 유저 레벨 이미지" />
            {comment.proInputValue ? (
              <St.CommentInfoUserSide>찬성</St.CommentInfoUserSide>
            ) : comment.conInputValue ? (
              <St.CommentInfoUserSide>반대</St.CommentInfoUserSide>
            ) : null}
          </St.CommentInfoProfileCont>
          <St.CommentInfoUserInfoWrap>
            <St.CommentInfoUserInfoCont>
              <St.CommentInfoNickname>
                {" "}
                {comment.nickname}{" "}
              </St.CommentInfoNickname>
              <St.CommentInfoUserLevel> 레벨 </St.CommentInfoUserLevel>
            </St.CommentInfoUserInfoCont>
            <St.CommentInfoUserInfoCreatedAt>
              {createdDate}
              <St.CommentDelete onClick={deleteCommentHandler}>
                {comment.nickname === curNickname ? <St.IconTrash /> : null}
              </St.CommentDelete>
            </St.CommentInfoUserInfoCreatedAt>
          </St.CommentInfoUserInfoWrap>
        </St.CommentInfoWrap>

        {/* 댓글, 댓글 좋아요 */}
        <St.CommentWrap>
          <St.Comment> {comment.comment} </St.Comment>
          <St.CommentLikeCont>
            <St.CommentLikeIcon pointerOn="on" onClick={clickCommentLike}>
              <Like islike={islike} size={16} />
            </St.CommentLikeIcon>
            <St.CommentLikeCount>{commentLikesCount}</St.CommentLikeCount>
          </St.CommentLikeCont>
        </St.CommentWrap>
        {/* ======================= 댓글 ======================= */}

        {/* ======================= 답훈수 ======================= */}
        <St.ReplyWrap>
          <St.ReplyCreateToggle onClick={replyCreateHandler}>
            답훈수 달기
          </St.ReplyCreateToggle>

          {/* 답훈수 더 보기 버튼 */}
          {replyList.length > 0 && !isHidden && (
            <St.ReplyMore
              onClick={ReplyisActiveHandler}
              isHidden={isHidden}
              isActive={replyisActive}
            >
              ――― 답훈수 더 보기
            </St.ReplyMore>
          )}

          {/* 답훈수 리스트 */}
          {replyisActive && (
            <St.ReplyListCont>
              {replyList?.map((reply) => (
                <DetailPostCommentReply
                  key={reply.replyIdx}
                  reply={reply}
                  curNickname={curNickname}
                />
              ))}
            </St.ReplyListCont>
          )}
        </St.ReplyWrap>
        {/* ========================== 답훈수 ========================== */}

        {/* ========================== 답글 입력 푸터 ========================== */}
        {curCommentIdx !== "초기값" && !isComment ? (
          <St.Footer>
            <St.ReplyInputCont onSubmit={newReplysubmitHandler}>
              <St.ReplyInput
                required
                type="text"
                placeholder="답훈수를 남겨보세요.(100자 이내)"
                value={newReply}
                onChange={newReplyHandler}
                autoFocus
                maxLength="100"
              />
              <St.ReplyInputBtn type="submit">등록</St.ReplyInputBtn>
            </St.ReplyInputCont>
          </St.Footer>
        ) : null}
      </>
    )
  );
};

export default DetailPostComment;
