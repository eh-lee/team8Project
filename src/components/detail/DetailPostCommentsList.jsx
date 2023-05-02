import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DetailPostComment from "./DetailPostComment";
import { instanceWithAuth } from "../../api/axios";
import { cookies } from "../../api/cookies";
import * as St from "./DetailPostCommentsList.style"

const DetailPostCommentsList = ({ postIdx }) => {
  // isComment 불러오기
  const { isComment } = useSelector((state) => state.detail);

  // 훈수 리스트 관리 state
  const [commentList, setCommentList] = useState(null);

  // new훈수 관리 state
  // nickname=>지금은 쿠키에, 작성시간=>newTime으로 만들기, 레벨=>지금은 없어, newComment까지.
  const [curNickname, setCurNickname] = useState("");
  const [newComment, setNewComment] = useState();

  // 댓글 get요청
  useEffect(() => {
    const getCommentList = async () => {
      const { data } = await instanceWithAuth.get(`/comment/${postIdx}`);
      setCommentList([...data.comments].reverse());
    };
    const nickname = cookies.get("nickname");
    getCommentList();
    setCurNickname(nickname);
  }, []);

  // 새로운 댓글 핸들러
  const newCommentHandler = (e) => {
    setNewComment(e.target.value);
  };

  // 댓글 작성 핸들러
  const newCommentsubmitHandler = async (e) => {
    e.preventDefault();

    // 댓글 작성시간
    const curTime = new Date();

    // 새로운 댓글 객체 생성
    const newCommentData = {
      comment: newComment,
      // 임의로 달아줄 random한 key값 생성
      commentIdx: Math.random().toString(36).substring(2, 15),
      createdAt: curTime,
      nickname: curNickname,
      postIdx: postIdx,
      likesCount: 0,
      // isLike: false,
      // proInputValue: BOOLEAN(아직),
      // conInputValue: BOOLEAN(아직),
    };

    await instanceWithAuth
      .post(`/comment/${postIdx}`, { comment: newComment })
      .then((response) => {
        setCommentList((prev) => [...prev, newCommentData]);
        setNewComment("");
      })
      .catch((error) => {
        console.error("댓글작성", error);
      });
  };

  return (
    <St.DetailPostCommentsWrap>
      {/* ========================== 댓글 리스트 ========================== */}
      {commentList?.map((comment) => (
        <DetailPostComment key={comment.commentIdx} comment={comment} />
      ))}

      {/* ========================== 댓글 입력 푸터 ========================== */}
      {!isComment && (
        <St.FooterWrap>
          <St.FooterInputCont
            onSubmit={(e) => newCommentsubmitHandler(e)}
          >
            <St.Input
              required
              type="text"
              placeholder="훈수를 남겨주세요.(100자 이내)"
              value={newComment}
              onChange={(e) => newCommentHandler(e)}
              maxLength="100"
            />
            <St.InputBtn
              type="submit"
              onClick={(e) => newCommentsubmitHandler(e)}
            >
              등록
            </St.InputBtn>
          </St.FooterInputCont>
        </St.FooterWrap>
      )}
    </St.DetailPostCommentsWrap>
  );
};

export default DetailPostCommentsList;