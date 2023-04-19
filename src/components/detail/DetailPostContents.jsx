import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled, { css } from 'styled-components';
import { BiCommentDetail } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'
import Like from '../like/Like';
import { instanceWithAuth } from '../../api/axios';

const DetailPostContents = () => {
    const {postIdx} = useParams();

    // 상세 게시글을 담을 state
    const [detailPost, setDetailPost] = useState([]);
    
    // 게시글 작성한 시간
    // 참고: '\u00A0'는 공백을 표현하는 유니코드 문자
    const createdAt = `${detailPost.createdAt?.split('T')[0].replace(/-/g, ".")}\u00A0\u00A0${detailPost.createdAt?.split('T')[1].slice(0, 5)}`
    
    // 좋아요 관리 state
    const [postLikesCount, setPostLikesCount] = useState(0);
    const [isLike, setIsLike] = useState(null);
    
    
    // 상세 게시글 정보 불러오기
    useEffect(() => {
        const getDetailPost = async () => {
            const {data} = await instanceWithAuth.get(`/postCards/post/${postIdx}`);
            // const {data} = await instanceWithAuth.get(`/postCards/post/${postIdx}`);
            setDetailPost(data.post);
            setPostLikesCount(data.post.likesCount);
            setIsLike(data.post.IsLike);
        };
        getDetailPost();
    }, []);
    // console.log("변경 전 isLike###################", isLike)
    // console.log("detailPost", detailPost)
    
    // 좋아요 버튼
    const clickPostLike = () => {
        // console.log("좋아요 눌렀다고!!!")
        instanceWithAuth.put(`/postlike/post/${postIdx}`)
        setIsLike((prev)=>!prev)
        setPostLikesCount((prev) => (isLike ? prev - 1 : prev + 1));
    };
    
    // console.log("변경 후 isLike###################", isLike)

    return (
        <>
            {/* 상세 게시글 정보 */}
            <DetailPost_InfoWrap>
                {/* 차후에 User Lv image 들어갈 예정 */}
                <DetailPost_UserInfo_LvImg>
                    {/* <img src="img/testImg1.jpg"/> */}
                </DetailPost_UserInfo_LvImg>
                <DetailPost_InfoCont>
                    <DetailPost_UserInfoCont>
                        <DetailPost_UserInfo_Nickname>{detailPost.nickname}</DetailPost_UserInfo_Nickname>
                        <DetailPost_UserInfo_UserLevel>{detailPost.userLevel}레벨</DetailPost_UserInfo_UserLevel>
                    </DetailPost_UserInfoCont>
                    <DetailPost_UserInfo_CreatedAt>{createdAt}</DetailPost_UserInfo_CreatedAt>
                </DetailPost_InfoCont>
            </DetailPost_InfoWrap>
            {/* 게시글 내용 */}
            <DetailPost_ContentWrap>
                <DetailPost_Content_Title>{detailPost.title}</DetailPost_Content_Title>
                <DetailPost_Content_Desc>{detailPost.desc}</DetailPost_Content_Desc>
                {/* 게시글 정보 */}
                <DetailPost_Content_Info>
                    {/* 좋아요 버튼, 개수 */}
                    <DetailPost_Content>
                        <DetailPost_Content_Icon
                            onClick={()=>clickPostLike()}
                            pointerOn="on"
                        >
                            <Like isLike={isLike} />

                        </DetailPost_Content_Icon>
                        <DetailPost_Content_Count>
                            {postLikesCount}
                        </DetailPost_Content_Count>
                    </DetailPost_Content>
                    {/* 조회수 */}
                    <DetailPost_Content>
                        <DetailPost_Content_Icon>
                            <AiOutlineEye />
                        </DetailPost_Content_Icon>
                        <DetailPost_Content_Count>
                            {detailPost.postViewCount}
                        </DetailPost_Content_Count>
                    </DetailPost_Content>
                    {/* 댓글 버튼, 개수 */}
                    <DetailPost_Content>
                        <DetailPost_Content_Icon>
                            <BiCommentDetail />
                        </DetailPost_Content_Icon>
                        <DetailPost_Content_Count>
                            {detailPost.commentCount}
                        </DetailPost_Content_Count>
                    </DetailPost_Content>
                </DetailPost_Content_Info>
            </DetailPost_ContentWrap>
        </>
    )
}

export default DetailPostContents

// 상세 게시글 정보
const DetailPost_InfoWrap = styled.ul`
    /* border: 1px solid green; */
    margin: 4rem 7.5% 0 7.5%;
    display: flex;
    flex-direction: row;
`;

const DetailPost_InfoCont = styled.li`
    /* border: 1px solid violet; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DetailPost_UserInfo_LvImg = styled.li`
    /* border: 1px solid gray; */
    background-color: #E1E2E4;
    margin: 0 0.7rem 0 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

const DetailPost_UserInfoCont = styled.ul`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const DetailPost_UserInfo_Nickname = styled.li`
    /* border: 1px solid black; */
    font-size: 14px;
`;

const DetailPost_UserInfo_UserLevel = styled.li`
    /* border: 1px solid black; */
    font-size: 10px;
    color: red;
`;

const DetailPost_UserInfo_CreatedAt = styled.li`
    /* border: 1px solid black; */
    font-size: 10px;
    color: gray;
`;

// 상세 게시글 내용
const DetailPost_ContentWrap = styled.ul`
    border-bottom: 1px solid lightgray;
    /* border: 1px solid blue; */
    margin: 2rem 0 0 0;
    padding: 0 7.5% 2rem 7.5%;
    display: flex;
    flex-direction: column;
`;

const DetailPost_Content_Title = styled.li`
    /* border: 1px solid blue; */
    border-bottom: 1px solid lightgray;
    display: flex;
    font-size: 24px;
    padding-bottom: 15px;
`;

const DetailPost_Content_Desc = styled.li`
    /* border: 1px solid violet; */
    display: flex;
    margin: 20px 0 40px 0;
    font-size: 16px;
`;

const DetailPost_Content_Info = styled.ul`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: flex-end;
`;

const DetailPost_Content = styled.li`
    /* border: 1px solid tomato; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8A8A8A;
`;

const DetailPost_Content_Icon = styled.div`
    /* border: 1px solid tomato; */
    display: flex;
    justify-content: center;
    height: 18px;
    width: 18px;
    font-size: 20px;

    ${({ pointerOn }) => {
        if (pointerOn === "on") {
            return css`
                cursor: pointer;
            `;
        }
    }}
    `;

const DetailPost_Content_Count = styled.div`
    /* border: 1px solid tomato; */
    margin-left: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 18px;
    height: 18px;
    font-size: 14px;
`;