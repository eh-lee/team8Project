import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { instance } from '../../api/axios';

const PostCardJr = () => {
    const [page, setPage] = useState(1);
    const [newPostCards, setnewPostCards] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const response = await instance.get(`/postCards?maincategory=전체&category=전체&splitNumber=10&splitPageNumber=${page}`)
            setnewPostCards(response.data.postCards)
        }
        getPost();
    }, [])

  return (
    <PostCardJrContainer>
    {
        newPostCards?.map((newPostCard) => {
        return (
            <PostCardJrWrap key={newPostCard.postIdx}>
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

export default PostCardJr;

const PostCardJrContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    /* flex-wrap: wrap;
    justify-content: center; */
    float: left;
    gap: 1rem;
    margin-bottom: 3rem;
`

const PostCardJrWrap = styled.div`
    border: 1px solid black;
    border-radius: 0.75rem;
    /* margin: 1.5rem 2rem; */
    
    padding: 1.2rem;
    width: 8rem;

    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    /* margin-left: 2rem; */
`

const PostCardJr_TitleBox = styled.ul`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.2rem;
    margin-bottom: 1rem;
    width: 100%;
`

const PostCardJr_Category = styled.li`
    font-size: 0.6rem;
    color: gray;
`

const PostCardJr_Title = styled.li`
    font-size: 1.3rem;
`

const PostCardJr_ContentBox = styled.div`
    border: 1px solid black;
    display: flex;
    max-height: 10vh;
    width: 100%;
    overflow-y: scroll;
    word-wrap: break-word;
`

const PostCardJr_Content = styled.div`
    display: flex;
`