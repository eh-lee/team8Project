import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components';
import Like from '../like/Like';
import DetailPostCommentReply from './DetailPostCommentReply';
import { instanceWithAuth } from '../../api/axios';
import { BsTrash } from "react-icons/bs";
import { cookies } from '../../api/cookies';
import { FiEdit } from "react-icons/fi"
import { useFormattingDate } from '../hook/useFormattingDate';
import { useDispatch, useSelector } from 'react-redux';
import { setIsComment } from '../../app/modules/detailSlice'

const DetailPostComment = ({comment}) => {
    // postIdx: UUID,
    // commentIdx: UUID,
    // nickname: STRING,
    // createdAt: DATE,
    // comment: STRING,
    // isLike: BOOLEAN,
    // likesCount: NUMBER,
    // proInputValue: BOOLEAN(아직),
    // conInputValue: BOOLEAN(아직),

    // ======================= 댓글 =======================
    // 댓글 작성한 시간
    const [createdDate, formattingDate] = useFormattingDate(comment.createdAt);

    useEffect(()=> {
        formattingDate();
    },[]);

    // 댓글 삭제 요청
    const deleteCommentHandler = async () => {
        try {
            // const response = await instanceWithAuth.delete(`comment/${comment.postIdx}/${comment.commentIdx}`);
            await instanceWithAuth.delete(`comment/${comment.postIdx}/${comment.commentIdx}`);
        } catch(error) {
            // console.error("댓글삭제", error.response.data.errorMessage);
            console.error(error)
        };
    };


    // 댓글 좋아요 관리 state
    const [commentLikesCount ,setCommentLikesCount] = useState(comment.likesCount);
    const [isLike, setIsLike] = useState(null);

    // 댓글 좋아요 버튼
    const clickCommentLike = () => {
        instanceWithAuth.put(`/commentLike/${comment.postIdx}/${comment.commentIdx}`);
        setIsLike((prev) => !prev)
        setCommentLikesCount((prev) => (isLike ? prev - 1 : prev + 1));
    };

    // ======================= 답훈수 =======================

    // isComment 불러오기
    const { isComment } = useSelector ((state) => state.detail);
    const dispatch = useDispatch();

    // 답훈수 관리 state
    const [replyList, setReplyList] = useState([]);

    // 답훈수 더 보기 관리 state
    const [replyisActive, setReplyIsActive] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // const replyInputRef = useRef(null);

    // new답훈수 관리 state
    const [newReply, setNewReply] = useState();
    const [newReplyTime, setNewReplyTime] = useState('');
    const [curNickname, setCurNickname] = useState('');
    const [curCommentIdx, setCurCommentIdx] = useState('초기값');
    // nickname=>지금은 쿠키에, 작성시간=>newTime으로 만들기, 레벨=>지금은 없어, newComment까지.

    // 답훈수 get요청
    useEffect(() => {
        const getReplyList = async () => {
            const { data } = await instanceWithAuth.get(`/reply/${comment.postIdx}/${comment.commentIdx}`);
            setReplyList(data.replys);
        };
        const nickname = cookies.get("nickname")
        getReplyList();
        setCurNickname(nickname);
    }, []);

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

    // 답훈수 작성 핸들러
    const newReplysubmitHandler = (e) => {
        e.preventDefault();

        //답훈수 작성시간
        const currentTime = new Date().toLocaleString('ko-KR', { hour12: false }).replace(/\. /g, '. 0');
        setNewReplyTime(currentTime);

        instanceWithAuth.post(`/reply/${comment.postIdx}/${curCommentIdx}`, { comment: newReply })
            .then(response => {
                dispatch(setIsComment(!isComment))
                console.log("댓글작성", response.data);
            })
            .catch(error => {
                console.error("댓글작성", error);
            });
    };


    return (
        <>
            {/* ======================= 댓글 ======================= */}
            {/* 유저정보(프로필사진, 찬반여부, 닉네임, 레벨, 작성시간 */}
            <Comment_InfoWrap>
                <Comment_Info_ProfileCont>
                    <Comment_Info_UserLvImg>  </Comment_Info_UserLvImg>
                    {
                        comment.proInputValue ?
                            <Comment_Info_UserSide>
                                찬성
                            </Comment_Info_UserSide> 
                            :
                            comment.conInputValue ?
                                <Comment_Info_UserSide>
                                    반대
                                </Comment_Info_UserSide> 
                                :
                                null
                    }
                </Comment_Info_ProfileCont>
                <Comment_Info_UserInfoWrap>
                    <Comment_Info_UserInfoCont>
                        <Comment_Info_Nickname> {comment.nickname} </Comment_Info_Nickname>
                        <Comment_Info_UserLevel> 레벨 </Comment_Info_UserLevel>
                    </Comment_Info_UserInfoCont>
                    <Comment_Info_UserInfo_CreatedAt>
                        {createdDate}
                        <CommentDelete onClick={deleteCommentHandler}>
                            <BsTrash />
                        </CommentDelete>
                        <CommentEdit>
                            <FiEdit />
                        </CommentEdit>
                    </Comment_Info_UserInfo_CreatedAt>
                </Comment_Info_UserInfoWrap>
            </Comment_InfoWrap>

            {/* 댓글, 댓글 좋아요 */}
            <CommentWrap>
                <Comment> {comment.comment} </Comment>
                <CommentLikeCont>
                    <CommentLikeIcon 
                    pointerOn="on"
                    onClick={clickCommentLike}
                    >
                        <Like 
                            isLike={isLike} 
                        />
                    </CommentLikeIcon>
                    <CommentLikeCount>
                        {commentLikesCount}
                    </CommentLikeCount>
                </CommentLikeCont>
            </CommentWrap>
            {/* ======================= 댓글 ======================= */}

            {/* ======================= 답훈수 ======================= */}
            <DetailPostCommentReplyWrap>
                <DetailPostCommentReplyCreate onClick={replyCreateHandler} >
                    답훈수 달기
                </DetailPostCommentReplyCreate>

                {/* 답훈수 더 보기 버튼 */}
                {
                    (replyList.length > 0) &&
                    !isHidden && (
                        <DetailPostCommentReplyMore
                            onClick={ReplyisActiveHandler}
                            isHidden={isHidden}
                            isActive={replyisActive}
                        >
                            ----- 답훈수 더 보기
                        </DetailPostCommentReplyMore >
                    )
                }

                {/* 답훈수 리스트 */}
                {
                    replyisActive &&
                    <DetailPostCommentReplyList >
                        {
                            replyList?.map((reply) => (
                                <DetailPostCommentReply
                                    key={reply.replyIdx}
                                    reply={reply}
                                />
                            ))
                        }
                    </DetailPostCommentReplyList>
                }
            </DetailPostCommentReplyWrap>
            {/* ========================== 답훈수 ========================== */}

            {/* ========================== 답글 입력 푸터 ========================== */}
            { ( curCommentIdx !== '초기값' && isComment) ?
                < DetailPostComments_Footer >
                <DetailPostComments_FooterInputCont onSubmit={(e) => newReplysubmitHandler(e)}>
                    <DetailPostComments_Input
                        required
                        type='text'
                        placeholder='답훈수를 남겨주세요.'
                        value={newReply}
                        onChange={(e) => newReplyHandler(e)}
                        autoFocus
                    // maxLength=
                    />
                    <DetailPostComments_InputBtn
                        type='submit'
                        onClick={(e) => newReplysubmitHandler(e)}
                    >
                        등록
                    </DetailPostComments_InputBtn>
                </DetailPostComments_FooterInputCont>
                    </DetailPostComments_Footer >
                : null
            }

        </>
    );
};

export default DetailPostComment;

// ========================= 댓글 정보 =========================
const Comment_InfoWrap = styled.ul`
  /* border: 1px solid green; */
  height: 43px;
  margin: 5% 7.5% 0 7.5%;
  display: flex;
  flex-direction: row;
`;

const Comment_Info_ProfileCont = styled.li`
  /* border: 1px solid violet; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 32px;
`;

const Comment_Info_UserLvImg = styled.div`
  /* border: 1px solid gray; */
  background-color: #e1e2e4;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const Comment_Info_UserSide = styled.div`
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

const Comment_Info_UserInfoWrap = styled.li`
  /* border: 1px solid violet; */
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7px;
`;

const Comment_Info_UserInfoCont = styled.ul`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* 정렬 어디로하지? align-items: center; */
  gap: 5px;
`;

const Comment_Info_Nickname = styled.li`
  /* border: 1px solid black; */
  font-size: 14px;
`;

const Comment_Info_UserLevel = styled.li`
  /* border: 1px solid black; */
  font-size: 10px;
  color: #f26581;
`;

const Comment_Info_UserInfo_CreatedAt = styled.ul`
  /* border: 1px solid black; */
  font-size: 10px;
  color: #8a8a8a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CommentDelete = styled.li`
  /* border: 1px solid violet; */
  display: flex;
  font-size: 10px;
  cursor: pointer;
  margin-left: 4px;
`;

const CommentEdit = styled.li`
  display: flex;
  font-size: 10px;
  cursor: pointer;
  margin-left: 4px;
`;

// ========================= 댓글 =========================
const CommentWrap = styled.div`
  /* border: 1px solid purple; */
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
  /* border: 1px solid black; */
  height: 16px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: #8a8a8a;
`;

const CommentLikeIcon = styled.div`
  /* border: 1px solid tomato; */
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
  /* border: 1px solid violet; */
  /* width: 26px; */
  width: 16px;
  height: 16px;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  font-size: 12px;
`;

// ========================= 답훈수 =========================

const DetailPostCommentReplyWrap = styled.div`
  margin-left: 7.5%;
`;

const DetailPostCommentReplyCreate = styled.div`
  /* border: 1px solid blueviolet; */
  width: 100px;
  font-size: 12px;
  display: flex;
  color: #8a8a8a;
  margin: 10px 0 20px 40px;
  cursor: pointer;
  /* &:active {
    color: #3A3A59;
  } */
`;

const DetailPostCommentReplyMore = styled.div`
  /* border: 1px solid blueviolet; */
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

const DetailPostCommentReplyList = styled.div`
  /* height: 0;
  width: 0;
  overflow: hidden;
  transition: height 0.5s ease-out; */
  display: flex;
  flex-direction: column;

  // 애니메이션 주기는 다음에 다시 시도!
  /* ${({ isActive }) =>
    !isActive &&
    css`
      height: auto;
      width: 100px;
    `} */
`;

// ========================= 답훈수 입력 푸터 =========================

const DetailPostComments_Footer = styled.footer`
  /* border: 1px solid green; */
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

const DetailPostComments_FooterInputCont = styled.form`
  /* border: 1px solid green; */
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 7.5%;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
`;

const DetailPostComments_Input = styled.textarea`
  resize: none;
  background-color: #f2f2f7;
  border: none;
  border-radius: 20px;
  width: 260px;
  height: 22px;
  /* 나중에 댓글수에 따라 input창 늘려볼까요? */
  /* max-height: 300px; */
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

const DetailPostComments_InputBtn = styled.button`
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
