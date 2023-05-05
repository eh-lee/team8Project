import React, { useEffect, useState } from "react";
import DetailPostComment from "./DetailPostComment";
import { instanceWithAuth } from "../../api/axios";
import * as St from "./DetailPostCommentsList.style"

const DetailPostCommentsList = ({ postIdx }) => {

  // 댓글 관리
  const [commentList, setCommentList] = useState(null);

  // 새 댓글 관리
  const [newComment, setNewComment] = useState('');

  // isComment 상태 관리
  const [isComment, setIsComment] = useState(true);

  // 댓글 get요청
  useEffect(() => {
    const getCommentList = async () => {
      const { data } = await instanceWithAuth.get(`/comment/${postIdx}`);
      setCommentList([...data.comments].reverse());
    };
    getCommentList();
  }, []);

  // 새 댓글 핸들러
  const newCommentHandler = (e) => {
    setNewComment(e.target.value);
  };

  // 댓글 작성 핸들러
  const newCommentsubmitHandler = async (e) => {
    e.preventDefault();

    try{
    const response = await instanceWithAuth.post(`/comment/${postIdx}`, { comment: newComment })  
    setCommentList((prev) => [...prev, response?.data]);
    } catch(error) {
      console.error("댓글작성", error);
    };
    setNewComment("");
  };

  return (
    <St.DetailPostCommentsWrap>
      {/* ========================== 댓글 리스트 ========================== */}
      {commentList?.map((comment) => (
        <DetailPostComment key={comment.commentIdx} comment={comment} setIsComment={setIsComment} isComment={isComment} />
      ))}

      {/* ========================== 댓글 입력 푸터 ========================== */}
      {isComment && (
        <St.FooterWrap>
          <St.FooterInputCont
            onSubmit={(e) => newCommentsubmitHandler(e)}
          >
            <St.Input
              required
              type="text"
              placeholder="훈수를 남겨보세요.(100자 이내)"
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