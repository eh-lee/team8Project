import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { instance } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const NewPostCard = () => {
    const [newPostCards, setnewPostCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            const response = await instance.get(`/postCards?maincategory=전체&category=전체&splitNumber=5&splitPageNumber=1`)
            setnewPostCards(response.data.postCards)
        }
        getPost();
    }, []);

  return (
    <PostCardJrContainer >
    {
        newPostCards?.map((newPostCard) => {
        return (
            <PostCardJrWrap key={newPostCard.postIdx} onClick={()=> { navigate(`/board/${newPostCard.postIdx}`) }}>
                <PostCardJr_TitleBox>
                    <PostCardJr_Category>{newPostCard.category}</PostCardJr_Category>
                    <PostCardJr_Title>{newPostCard.title}</PostCardJr_Title>
                </PostCardJr_TitleBox>
                <PostCardJr_ContentBox>
                    <PostCardJr_Content>{newPostCard.desc}</PostCardJr_Content>
                </PostCardJr_ContentBox>
            </PostCardJrWrap>
            )
        })
    }
    </PostCardJrContainer>
  )
}

export default NewPostCard;

const PostCardJrContainer = styled.div`
    border: 1px solid green;
    display: flex;
    float: left;
    gap: 1rem;
`;

const PostCardJrWrap = styled.div`
    border: 1px solid black;
    border-radius: 0.75rem;
    
    padding: 1.2rem;
    width: 8rem;

    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const PostCardJr_TitleBox = styled.ul`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.2rem;
    margin-bottom: 1rem;
    width: 100%;
`;

const PostCardJr_Category = styled.li`
    font-size: 0.6rem;
    color: gray;
`;

const PostCardJr_Title = styled.li`
    font-size: 1.3rem;
`;

const PostCardJr_ContentBox = styled.div`
    border: 1px solid black;
    display: flex;
    max-height: 10vh;
    width: 100%;
    overflow-y: scroll;
    word-wrap: break-word;
`;

const PostCardJr_Content = styled.div`
    display: flex;
`;