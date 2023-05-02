import React, { useEffect, useState } from "react";
import Like from "../like/Like";
import DetailPostCommentReply from "./DetailPostCommentReply";
import { instanceWithAuth } from "../../api/axios";
import { cookies } from "../../api/cookies";
import { useFormattingDate } from "../hook/useFormattingDate";
import { useDispatch, useSelector } from "react-redux";
import { setIsComment } from "../../app/modules/detailSlice";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=Default.png";
import * as St  from "./DetailPostComment.style";

const DetailPostComment = ({ comment }) => {
  // API명세
  // postIdx: UUID,
  // commentIdx: UUID,
  // nickname: STRING,
  // createdAt: DATE,
  // comment: STRING,
  // isLike: BOOLEAN,
  // likesCount: NUMBER,
  // proInputValue: BOOLEAN(아직),
  // conInputValue: BOOLEAN(아직),

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
  const [isLike, setIsLike] = useState(null);

  // 댓글 좋아요 버튼
  const clickCommentLike = () => {
    instanceWithAuth.put(
      `/commentLike/${comment.postIdx}/${comment.commentIdx}`
    );
    setIsLike((prev) => !prev);
    setCommentLikesCount((prev) => (isLike ? prev - 1 : prev + 1));
  };

  // =============================================== 답훈수 ===============================================

  // isComment 불러오기
  const { isComment } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  // 답훈수 관리 state
  const [replyList, setReplyList] = useState([]);

  // 답훈수 더 보기 관리 state
  const [replyisActive, setReplyIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // const replyInputRef = useRef(null);

  // new답훈수 관리 state
  const [curNickname, setCurNickname] = useState("");
  const [newReply, setNewReply] = useState();
  const [curCommentIdx, setCurCommentIdx] = useState("초기값");
  // const [newReplyTime, setNewReplyTime] = useState('');
  // nickname=>지금은 쿠키에, 작성시간=>newTime으로 만들기, 레벨=>지금은 없어, newComment까지.

  // 답훈수 get요청
  useEffect(() => {
    const getReplyList = async () => {
      const { data } = await instanceWithAuth.get(
        `/reply/${comment.postIdx}/${comment.commentIdx}`
      );
      setReplyList([...data.replys].reverse());
    };
    getReplyList();
    const nickname = cookies.get("nickname");
    setCurNickname(nickname);
  }, [comment]);

  // 답훈수 달기 버튼 핸들러
  const replyCreateHandler = () => {
    setCurCommentIdx(comment.commentIdx);
    dispatch(setIsComment(true));
    // replyInputRef.current.focus();
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
  const newReplysubmitHandler = (e) => {
    e.preventDefault();

    //답훈수 작성시간
    const curTime = new Date();

    // 새로운 답훈수 객체 생성
    const newReplyData = {
      comment: newReply,
      // 임의로 달아줄 random한 key값 생성
      createdAt: curTime,
      nickname: curNickname,
      postIdx: comment.postIdx,
      commentIdx: comment.postIdx,
      replyIdx: Math.random().toString(36).substring(2, 15),
    };

    instanceWithAuth
      .post(`/reply/${comment.postIdx}/${curCommentIdx}`, { comment: newReply })
      .then((response) => {
        dispatch(setIsComment(!isComment));
        setReplyList((prev) => [...prev, newReplyData]);
        setNewReply("");
      })
      .catch((error) => {
        console.error("답훈수작성", error);
      });
  };

  return (
    !isDelete && (
      <>
        {/* ======================= 댓글 ======================= */}
        {/* 유저정보(프로필사진, 찬반여부, 닉네임, 레벨, 작성시간 */}
        <St.CommentInfoWrap>
          <St.CommentInfoProfileCont>
            <St.CommentInfoUserLvImg src={level1} />
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
                <St.IconTrash />
              </St.CommentDelete>
            </St.CommentInfoUserInfoCreatedAt>
          </St.CommentInfoUserInfoWrap>
        </St.CommentInfoWrap>

        {/* 댓글, 댓글 좋아요 */}
        <St.CommentWrap>
          <St.Comment> {comment.comment} </St.Comment>
          <St.CommentLikeCont>
            <St.CommentLikeIcon pointerOn="on" onClick={clickCommentLike}>
              <Like isLike={isLike} size={16} />
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
              ----- 답훈수 더 보기
            </St.ReplyMore>
          )}

          {/* 답훈수 리스트 */}
          {replyisActive && (
            <St.ReplyListCont>
              {replyList?.map((reply) => (
                <DetailPostCommentReply key={reply.replyIdx} reply={reply} />
              ))}
            </St.ReplyListCont>
          )}
        </St.ReplyWrap>
        {/* ========================== 답훈수 ========================== */}

        {/* ========================== 답글 입력 푸터 ========================== */}
        {curCommentIdx !== "초기값" && isComment ? (
          <St.Footer>
            <St.ReplyInputCont
              onSubmit={newReplysubmitHandler}
            >
              <St.ReplyInput
                required
                type="text"
                placeholder="답훈수를 남겨주세요.(100자 이내)"
                value={newReply}
                onChange={newReplyHandler}
                autoFocus
                maxLength="100"
              />
              <St.ReplyInputBtn type="submit">
                등록
              </St.ReplyInputBtn>
            </St.ReplyInputCont>
          </St.Footer>
        ) : null}
      </>
    )
  );
};

export default DetailPostComment;