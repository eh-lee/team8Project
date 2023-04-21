import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { BsTrash } from "react-icons/bs";
import { instanceWithAuth } from '../../api/axios';
import { useFormattingDate } from '../hook/useFormattingDate';

const DetailPostCommentReply = ({reply}) => {
    // API명세
    // postIdx
    // commentIdx,
    // replyIdx,
    // createdAt,
    // nickname,
    // comment,

    // 답훈수 삭제 관리 
    const [isDelete, setIsDelete] = useState(false);

    // 답훈수 작성한 시간
    const [createdDate, formattingDate] = useFormattingDate(reply.createdAt)

    useEffect(()=> {
        formattingDate();
    },[]);

    // 답글 삭제 요청
    const deleteReplytHandler = async () => {
        try {
            await instanceWithAuth.delete(`reply/${reply.postIdx}/${reply.commentIdx}/${reply.replyIdx}`);
            setIsDelete(true);
        } catch(error) {
            console.error(error)
        };
    };

    return !isDelete && (
        <>
            {/* 유저정보(프로필사진, 닉네임, 레벨, 작성시간 */}
            <CommentReply_InfoWrap>
                <CommentReply_Info_ProfileCont>
                    <CommentReply_Info_UserLvImg>  </CommentReply_Info_UserLvImg>
                </CommentReply_Info_ProfileCont>
                <CommentReply_Info_UserInfoWrap>
                    <CommentReply_Info_UserInfoCont>
                        <CommentReply_Info_Nickname> {reply.nickname} </CommentReply_Info_Nickname>
                        <CommentReply_Info_UserLevel> 레벨 </CommentReply_Info_UserLevel>
                    </CommentReply_Info_UserInfoCont>
                    <CommentReply_Info_UserInfo_CreatedAt> 
                        {createdDate} 
                        <ReplyDelete onClick={deleteReplytHandler}>
                            <BsTrash />
                        </ReplyDelete>
                    </CommentReply_Info_UserInfo_CreatedAt>
                </CommentReply_Info_UserInfoWrap>
            </CommentReply_InfoWrap>

            {/* 댓글, 댓글 좋아요 */}
            <CommentReplyWrap>
                <CommentReply> {reply.comment} </CommentReply>
            </CommentReplyWrap>
        </>
    )
}

export default DetailPostCommentReply;


// 댓글 정보
const CommentReply_InfoWrap = styled.ul`
    /* border: 1px solid green; */
    height: 34px;
    margin: 0 7.5% 0 7.5%;
    display: flex;
    flex-direction: row;
`;

const CommentReply_Info_ProfileCont = styled.li`
    /* border: 1px solid violet; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 14px;
`;

const CommentReply_Info_UserLvImg = styled.div`
    /* border: 1px solid gray; */
    background-color: #E1E2E4;
    border-radius: 50%;
    width: 20px;
    height: 20px;
`;

const CommentReply_Info_UserInfoWrap = styled.ul`
    /* border: 1px solid violet; */
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7px;
`;

const CommentReply_Info_UserInfoCont = styled.ul`
    /* border: 1px solid orange; */
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    /* 정렬 어디로하지? align-items: center; */
    gap: 5px;
`;

const CommentReply_Info_Nickname = styled.li`
    /* border: 1px solid black; */
    font-size: 14px;
`;

const CommentReply_Info_UserLevel = styled.li`
    /* border: 1px solid black; */
    font-size: 10px;
    color: #F26581;
`;

const CommentReply_Info_UserInfo_CreatedAt = styled.li`
    /* border: 1px solid black; */
    font-size: 10px;
    color: #8A8A8A;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ReplyDelete = styled.div`
    /* border: 1px solid violet; */
    display: flex;
    font-size: 10px;
    cursor: pointer;
    margin-left: 3px;
`;

// 답글
const CommentReplyWrap = styled.div`
    /* border: 1px solid purple; */
    margin-left: 7.5%;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-end;
    gap: 20px;
`;

const CommentReply = styled.div`
    /* border: 1px solid purple; */
    width: 210px;
    min-height: 14px;
    border-radius: 0px 10px 10px 10px;
    margin-left: 40px;
    font-size: 14px;
`;