import React from 'react'
import styled from 'styled-components'

const PostCard = ({title, nickname, content, viewCount, commentCount}) => {
  return (
    <PostCardWrap>
        <PostCard_TitleBox>
              <PostCard_Title>{title}</PostCard_Title>
              <PostCard_Nickname>{nickname}</PostCard_Nickname>
        </PostCard_TitleBox>
        <PostCard_ContentBox>
              <PostCard_Content>{content}</PostCard_Content>
        </PostCard_ContentBox>
        <PostCard_InfoBox>
            <PostCard_ViewCount>{viewCount}</PostCard_ViewCount>
            <PostCard_CommentCount>{commentCount}</PostCard_CommentCount>
        </PostCard_InfoBox>
    </PostCardWrap>
  )
}

export default PostCard

const PostCardWrap = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    /* width: 360px; 
    height: 150px; */
    width: 80%;

    margin: auto;
    margin-top: 40px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostCard_TitleBox = styled.ul`
    border: 1px solid orange;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 30%;

    gap: 10px;

    margin-bottom: 20px;
`

const PostCard_Title = styled.li`
    border: 1px solid black;
    font-size: 1.5rem;
`

const PostCard_Nickname = styled.li`
    border: 1px solid black;
    font-size: 0.8rem;
    color: gray;
`

const PostCard_ContentBox = styled.div`
    border: 1px solid blue;

    width: 100%;


    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    overflow-y: scroll;
`

const PostCard_Content = styled.div`
    border: 1px solid black;

    display: flex;
`

const PostCard_InfoBox = styled.ul`
    border: 1px solid green;

    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const PostCard_ViewCount = styled.li`
    border: 1px solid black;
`

const PostCard_CommentCount = styled.li`
    border: 1px solid black;
`