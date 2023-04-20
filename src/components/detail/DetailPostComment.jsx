import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import Like from '../like/Like';
import DetailPostCommentReply from './DetailPostCommentReply';
import { instanceWithAuth } from '../../api/axios';

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
    
    // 좋아요 수 관리
    const [isLike, setIsLike] = useState(null);

    // 답훈수 관리 state
    const [replyList, setReplyList] = useState([]);

    // 답훈수 더 보기 관리 state
    const [replyisActive, setReplyIsActive] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // 답훈수 get요청
    useEffect(()=> {
        const getReplyList = async () => {
            const {data} = await instanceWithAuth.get(`/reply/${comment.postIdx}/${comment.commentIdx}`);
            setReplyList(data.replys);
        };
        getReplyList();
    }, []);

    // 답훈수 더 보기 핸들러
    const ReplyisActiveHandler = () => {
        setReplyIsActive(!replyisActive);
        setIsHidden(!isHidden);
    };

    return (
        <>
            {/* ======================= 댓글 ======================= */}
            {/* 유저정보(프로필사진, 찬반여부, 닉네임, 레벨, 작성시간 */}
            <Comment_InfoWrap>
                <Comment_Info_ProfileCont>
                    <Comment_Info_UserLvImg>  </Comment_Info_UserLvImg>
                    <Comment_Info_UserSide>
                        찬성
                    </Comment_Info_UserSide>
                </Comment_Info_ProfileCont>
                <Comment_Info_UserInfoWrap>
                    <Comment_Info_UserInfoCont>
                        <Comment_Info_Nickname> {comment.nickname} </Comment_Info_Nickname>
                        <Comment_Info_UserLevel> 레벨 </Comment_Info_UserLevel>
                    </Comment_Info_UserInfoCont>
                    <Comment_Info_UserInfo_CreatedAt> {comment.createdAt}작성시간 </Comment_Info_UserInfo_CreatedAt>
                </Comment_Info_UserInfoWrap>
            </Comment_InfoWrap>

            {/* 댓글, 댓글 좋아요 */}
            <CommentWrap>
                <Comment> {comment.comment} </Comment>
                <CommentLikeCont>
                    <CommentLikeIcon pointerOn="on">
                        <Like isLike={isLike} />
                    </CommentLikeIcon>
                    <CommentLikeCount>
                        {/* {comment.likesCount} */}
                        123
                    </CommentLikeCount>
                </CommentLikeCont>
            </CommentWrap>
            {/* ======================= 댓글 ======================= */}

            {/* ======================= 답훈수 ======================= */}
            <DetailPostCommentReplyWrap>
                <DetailPostCommentReplyCreate >
                    답훈수 달기
                </DetailPostCommentReplyCreate>

                {/* 답훈수 더 보기 버튼 */}
                {
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

        </>
    )
}

export default DetailPostComment

// ========================= 코멘트 정보 =========================
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
    background-color: #E1E2E4;
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
`

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
    color: #F26581;
`;

const Comment_Info_UserInfo_CreatedAt = styled.div`
    /* border: 1px solid black; */
    font-size: 10px;
    color: #8A8A8A;
`;

// ========================= 댓글 =========================
const CommentWrap = styled.div`
    /* border: 1px solid purple; */
    margin-left: 7.5%;
    display: flex;
    align-items: flex-end;
    gap: 20px;
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
    color: #8A8A8A
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
    width: 26px;
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
  color: #8A8A8A;
  margin: 10px 0 20px 40px;
  cursor: pointer;
  /* &:active {
    color: #3A3A59;
  } */
`

const DetailPostCommentReplyMore = styled.div`
  /* border: 1px solid blueviolet; */
  width: 100px;
  font-size: 12px;
  display: flex;
  color: #8A8A8A;
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
  /* ${({isActive}) => 
    !isActive &&
    css`
      height: auto;
      width: 100px;
    `} */
`;