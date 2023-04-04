import React from 'react'
import styled from 'styled-components'

const PostCard = ({title, nickname, content, viewCount, commentCount}) => {
  return (
    <PostCardWrap>
        <TitleBox>
              <Title>{title}</Title>
              <Nickname>{nickname}</Nickname>
        </TitleBox>
        <ContentBox>
              <Content>{content}</Content>
        </ContentBox>
        <PostInfoBox>
            <ViewCount>{viewCount}</ViewCount>
            <CommentCount>{commentCount}</CommentCount>
        </PostInfoBox>
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
    height: 100%;

    margin: auto;
    margin-top: 40px;
    padding: 20px;

    /* display: flex;
    flex-direction: column; */
`

const TitleBox = styled.div`
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 30%;
`

const Title = styled.div`
    border: 1px solid black;
    font-size: 1.5rem;
`

const Nickname = styled.div`
    border: 1px solid black;
    font-size: 0.8rem;
    color: gray;
`

const ContentBox = styled.div`
    border: 1px solid orange;

    width: 100%;
    height: 60%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    border: 1px solid black;
`

const PostInfoBox = styled.div`
    border: 1px solid orange;

    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ViewCount = styled.div`
    border: 1px solid black;
`

const CommentCount = styled.div`
    border: 1px solid black;
`