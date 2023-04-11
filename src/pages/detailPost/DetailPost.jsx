import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { instance } from '../../api/axios';
import MobileLayout from '../../layout/MobileLayout';
import styled from 'styled-components';
import { MdArrowBackIosNew } from "react-icons/md"
import { FiMoreVertical } from "react-icons/fi"
import Footer from '../../components/footer/Footer';

const DetailPost = () => {
    const navigate = useNavigate();
    
    const {postIdx} = useParams();
    
    // 상세 게시글을 담을 state
    const [detailPost, setDetailPost] = useState([]);

    // 게시글을 작성한 시간
    // 참고: '\u00A0'는 공백을 표현하는 유니코드 문자
    const createdAt = `${detailPost.createdAt?.split('T')[0].replace(/-/g, ".")}\u00A0\u00A0${detailPost.createdAt?.split('T')[1].slice(0,5)}`

    useEffect(() => {
        const getDetailPost = async () => {
            const {data} = await instance.get(`/postCards/post/${postIdx}`)
            setDetailPost(data.post)
        }
        getDetailPost();
    }, []);

    return (
        <> 
            {/* Mobile Layout setting */}
            <MobileLayout>
                {/* ================== Wirte페이지와 공용으로 사용되는 Header로 Refactoring 예정 ==================== */}
                {/* 상세 게시글 페이지 헤더 */}
                <DetailPost_Header>
                    <DetailPost_HeaderCont>
                        <DetailPost_HomeBtn onClick={() => { navigate(-1) }}>
                            <MdArrowBackIosNew size="1rem" />
                        </DetailPost_HomeBtn>
                        <DetailPost_Category>{detailPost.category}</DetailPost_Category>
                        <DetailPost_BackBtn onClick={() => { navigate(-1) }} >
                            <FiMoreVertical size="1rem" />
                        </DetailPost_BackBtn>
                    </DetailPost_HeaderCont>
                </DetailPost_Header>
                {/* ================== Wirte페이지와 공용으로 사용되는 Header로 Refactoring 예정 ==================== */}

                {/* 상세 게시글 정보 */}
                <DetailPost_InfoWrap>
                    {/* 차후에 User Lv image 들어갈 예정 */}
                    <DetailPost_UserInfo_LvImg>
                        {/* <img src="img/testImg1.jpg"/> */}
                    </DetailPost_UserInfo_LvImg>
                    <DetailPost_InfoCont>
                        <DetailPost_UserInfoCont>
                            <DetailPost_UserInfo_Nickname>{detailPost.nickname}</DetailPost_UserInfo_Nickname>
                            <DetailPost_UserInfo_UserLevel>{detailPost.userLevel}</DetailPost_UserInfo_UserLevel>
                        </DetailPost_UserInfoCont>
                        <DetailPost_UserInfo_CreatedAt>{createdAt}</DetailPost_UserInfo_CreatedAt>
                    </DetailPost_InfoCont>
                </DetailPost_InfoWrap>
                {/* 게시글 내용 */}
                <DetailPost_ContentWrap>
                    <DetailPost_Content_Title>{detailPost.title}</DetailPost_Content_Title>
                    <DetailPost_Content_Desc>{detailPost.desc}</DetailPost_Content_Desc>
                    <DetailPost_Content_Info>
                        <DetailPost_Content_MarginLeft />
                        <DetailPost_Content_LikeCount>{detailPost.likesCount}</DetailPost_Content_LikeCount>
                        <DetailPost_Content_ViewCount>{detailPost.postViewCount}</DetailPost_Content_ViewCount>
                        <DetailPost_Content_CommentCount>{detailPost.commentCount}</DetailPost_Content_CommentCount>

                    </DetailPost_Content_Info>
                </DetailPost_ContentWrap>
                {/* 게시글페이지 푸터 */}
                <Footer />
            </MobileLayout>
        </>
    )
};

export default DetailPost

// 상세 게시글 페이지 헤더
const DetailPost_Header = styled.div`
background-color: white;
position: fixed;
top: 0;
padding-top: 0.75rem;
width: 100%;
max-width: 400px;
color: rgb(70, 70, 70);
`;

const DetailPost_HeaderCont = styled.div`
padding-bottom: 0.75rem;
/* padding-top: 2rem; */
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-end;
border-bottom: 0.1rem solid rgb(180, 180, 180);
`;

const DetailPost_HomeBtn = styled.div`
color: rgb(180, 180, 180);

&:hover {
cursor: pointer;
color: rgb(70, 70, 70);
}
`;

const DetailPost_Category = styled.div`
display: flex;
font-size: 1.2rem;
`;

const DetailPost_BackBtn = styled.div`
color: rgb(180, 180, 180);

&:hover {
cursor: pointer;
color: rgb(70, 70, 70);
}
`;

// 상세 게시글 정보
const DetailPost_InfoWrap = styled.ul`
    /* border: 1px solid green; */
    margin: 4rem 2rem 0 2rem;
    display: flex;
    flex-direction: row;
`;

const DetailPost_InfoCont = styled.div`
    /* border: 1px solid violet; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DetailPost_UserInfo_LvImg = styled.div`
    border: 1px solid gray;
    margin: 0 0.7rem 0 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
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
    font-size: 1.2rem;
`;

const DetailPost_UserInfo_UserLevel = styled.li`
    /* border: 1px solid black; */
    font-size: 0.8rem;
    color: red;
`;

const DetailPost_UserInfo_CreatedAt = styled.li`
    /* border: 1px solid black; */
    font-size: 0.8rem;
    color: gray;
`;

// 상세 게시글 내용
const DetailPost_ContentWrap = styled.ul`
    border-bottom: 1px solid lightgray;
    /* border: 1px solid blue; */
    margin: 2rem 0 0 0;
    padding: 0 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
`;

const DetailPost_Content_Title = styled.li`
    border-bottom: 1px solid lightgray;
    display: flex;
    font-size: 2rem;
    padding: 0 0 1rem 0.5rem;
`;

const DetailPost_Content_Desc = styled.li`
    /* border: 1px solid violet; */
    display: flex;
    padding: 1.5rem 0 2rem 0.5rem;
`;

const DetailPost_Content_Info = styled.ul`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const DetailPost_Content_MarginLeft = styled.li`
    width: 10rem;
`

const DetailPost_Content_LikeCount = styled.li`

`;

const DetailPost_Content_ViewCount = styled.li`
    
`;

const DetailPost_Content_CommentCount = styled.li`
    
`;

