import React from 'react'
import styled, { css } from 'styled-components';
import Like from '../like/Like';

const DetailPostComment = () => {
    return (
        <>
            {/* 유저정보(프로필사진, 찬반여부, 닉네임, 레벨, 작성시간 */}
            <Comment_InfoWrap>
                <Comment_Info_ProfileCont>
                    <Comment_Info_UserLvImg>  </Comment_Info_UserLvImg>
                    <Comment_Info_UserSide> 찬성 </Comment_Info_UserSide>
                </Comment_Info_ProfileCont>
                <Comment_Info_UserInfoWrap>
                    <Comment_Info_UserInfoCont>
                        <Comment_Info_Nickname> 닉네임 </Comment_Info_Nickname>
                        <Comment_Info_UserLevel> 유저레벨 </Comment_Info_UserLevel>
                    </Comment_Info_UserInfoCont>
                    <Comment_Info_UserInfo_CreatedAt> 작성시간 </Comment_Info_UserInfo_CreatedAt>
                </Comment_Info_UserInfoWrap>
            </Comment_InfoWrap>

            {/* 댓글, 댓글 좋아요 */}
            <CommentWrap>
                <Comment>천방지축 어리둥절 빙글빙글 돌아가는</Comment>
                <CommentLikeCont>
                    <CommentLikeIcon pointerOn="on">
                        <Like />
                    </CommentLikeIcon>
                    <CommentLikeCount>
                        123
                    </CommentLikeCount>
                </CommentLikeCont>
            </CommentWrap>
        </>
    )
}

export default DetailPostComment

// 코멘트 정보
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

// 댓글
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