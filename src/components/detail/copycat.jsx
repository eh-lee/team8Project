import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import DetailPostComment from './DetailPostComment';
import DetailPostCommentReply from './DetailPostCommentReply';
import { instanceWithAuth } from '../../api/axios';

const DetailPostCommentsList = ({postIdx}) => {

  // 훈수, 답훈수 리스트 관리 state
  const [commentList, setCommentList] = useState([]);
  const [replyList, setReplyList] = useState([]);
  const commentIdx = ''

  // new 훈수 관리 state
  const [newComment, setNewComment] = useState();
  const [newCommentTime, setNewCommentTime] = useState('');
  // nickname=>지금은 쿠키에, 작성시간=>newTime으로 만들기, 레벨=>지금은 없어, newComment까지.

  // new 답훈수 관리 state
  const [newReply, setNewReply] = useState();
  const [newReplyTime, setNewReplyTime] = useState('');
  
  // 답훈수 달기 관리 state
  const [isReplying, setIsReplying] = useState(false);
  // false:댓글 , true: 답글
  const [inputPlaceholder, setInputPlaceholder] = useState('훈수를 남겨보세요.')

  // 답훈수 더 보기 관리 state
  const [replyisActive, setReplyIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // 댓글 get요청
  useEffect( async() => {
    // const {data} = await instanceWithAuth.get(`/comment/${postIdx}`);
    // console.log("댓글 get response=================",data)
    // setCommentList()
  },[])

  // 답훈수 더 보기 핸들러
  const ReplyisActiveHandler = () => {
    setReplyIsActive(!replyisActive);
    setIsHidden(!isHidden);
  };
  
  // 새로운 댓글 핸들러
  const newCommentHandler = (e) => {
    if (isReplying) {
      setNewReply(e.target.value)
    } else {
      setNewComment(e.target.value);
    }
  };
  // console.log("*******newComment", newComment);
  
  // input placeholder 관리 핸들러
  const inputPlaceholderHandler = () => {
    setInputPlaceholder('답훈수를 남겨보세요.')
  };

  // 답훈수 달기 onClick 핸들러
  const replyOnClickHandler = () => {
    setIsReplying(true);
    inputPlaceholderHandler();
  }

  // 등록 버튼 핸들러
  const submitBtnHandler = (e) => {
    e.preventDefault();
    
    // 댓글 작성시간
    const currentTime = new Date().toLocaleString('ko-KR', { hour12: false }).replace(/\. /g, '. 0');
    isReplying? setNewReplyTime(currentTime) : setNewCommentTime(currentTime);
    
    const commentData = isReplying? {comment: newReply} : {comment: newComment}
    const url = isReplying? `/reply/${postIdx}/${commentIdx}` : `/comment/${postIdx}`
    
    instanceWithAuth.post(url, commentData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <DetailPostComments_Wrap>
      {/* 댓글 리스트 */}
      <DetailPostComment postIdx={postIdx}/>

      {/* ========================== 답훈수 ========================== */}
      <DetailPostCommentReplyWrap>
        <DetailPostCommentReplyCreate onClick={replyOnClickHandler}>
          답훈수 달기
        </DetailPostCommentReplyCreate>
        
        {/* 답훈수 더 보기 버튼 */}
        {!isHidden && (
          <DetailPostCommentReplyMore
            onClick={ReplyisActiveHandler}
            isHidden={isHidden}
            isActive={replyisActive}
          >
            ----- 답훈수 더 보기
          </DetailPostCommentReplyMore >
        )}

        {/* 답훈수 리스트 */}
        {replyisActive && (
          <DetailPostCommentReplyList >
            <DetailPostCommentReply commentIdx={commentIdx}/>
          </DetailPostCommentReplyList>
        )}
      </DetailPostCommentReplyWrap>
      {/* ========================== 답훈수 ========================== */}

      {/* 댓글, 답글 입력 푸터 */}
      <DetailPostComments_Footer>
        <DetailPostComments_FooterInputCont onSubmit={submitBtnHandler}>
          <DetailPostComments_Input
            type='text'
            placeholder={inputPlaceholder}
            onChange={(e)=>newCommentHandler(e)}
          // maxLength=
          />
          <DetailPostComments_InputBtn
            type='submit'
            onClick={(e)=> submitBtnHandler(e)}
          >
            등록
          </DetailPostComments_InputBtn>
        </DetailPostComments_FooterInputCont>
      </DetailPostComments_Footer>
    </DetailPostComments_Wrap>
  )
};

// =========================================* Styled Components *==========================================

const DetailPostComments_Wrap = styled.section`
  /* border: 1px solid violet; */
  max-width: 400px;
  height: 1000px;
  background-color: #F2F2F7;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

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

const DetailPostComments_Footer = styled.footer`
  /* border: 1px solid green; */
  background-color: white;
  max-width: 400px;
  min-height: 30px;
  height: 64px;

  // footer 위에만 그림자 주기
  box-shadow: rgba(100, 100, 111, 0.4) 0px -5px 15px -5px;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const DetailPostComments_FooterInputCont = styled.form`
  /* border: 1px solid green; */
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 7.5%;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
`;

const DetailPostComments_Input = styled.textarea`
  resize: none;
  background-color: #F2F2F7;
  border: none;
  border-radius: 20px;
  width: 260px;
  height: 22px;
  /* 나중에 댓글수에 따라 input창 늘려볼까요? */
  /* max-height: 300px; */
  display: flex;
  padding: 10px 16px 0 16px;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const DetailPostComments_InputBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #DDDDE4;
  width: 32px;
  height: 24px;

  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  cursor: pointer;
  &:hover {
    color: #3A3A59;
  }
`;