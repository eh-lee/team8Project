import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components';
import { instance } from '../../api/axios';
import MobileLayout from '../../layout/MobileLayout';
import Footer from '../../components/footer/Footer';
import { FiMoreVertical } from 'react-icons/fi'
import { MdArrowBackIosNew } from "react-icons/md"
import DetailPostContents from '../../components/detail/DetailPostContents';


const DetailPost = () => {
    const nav = useNavigate();
    
    const {postIdx} = useParams();

    // 상세 게시글을 담을 state
    const [detailPost, setDetailPost] = useState([]);

    useEffect(() => {
        const getDetailPost = async () => {
            const { data } = await instance.get(`/postCards/post/${postIdx}`)
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
                        <DetailPost_BackBtn onClick={() => { nav(-1) }}>
                            <MdArrowBackIosNew size="1rem" />
                        </DetailPost_BackBtn>
                        <DetailPost_Category>{detailPost.category}</DetailPost_Category>
                        <DetailPost_MenuBtn onClick={() => { nav(-1) }} >
                            <FiMoreVertical size="1rem" />
                        </DetailPost_MenuBtn>
                    </DetailPost_HeaderCont>
                </DetailPost_Header>
                {/* ================== Wirte페이지와 공용으로 사용되는 Header로 Refactoring 예정 ==================== */}

                {/* 상세페이지 내용 */}
                <DetailPostContents detailPost={detailPost} />

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

    margin-top: 0.75rem;
    width: 25rem;
    max-width: 400px;
    color: rgb(70, 70, 70);
`;

const DetailPost_HeaderCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    
    padding: 0 1.8rem 0.75rem 1.8rem;

    border-bottom: 0.1rem solid rgb(180, 180, 180);
`;

const DetailPost_BackBtn = styled.div`
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

const DetailPost_MenuBtn = styled.div`
    color: rgb(180, 180, 180);

    &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
    }
`;
