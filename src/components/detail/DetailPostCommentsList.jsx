import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import DetailPostComment from './DetailPostComment';
import { instanceWithAuth } from '../../api/axios';

const DetailPostCommentsList = ({postIdx}) => {
  
  // 훈수 리스트 관리 state
  const [commentList, setCommentList] = useState(null);

  // 댓글 get요청
  useEffect( () => {
    const getCommentList = async () => {
      const {data} = await instanceWithAuth.get(`/comment/${postIdx}`);
      setCommentList(data.comments);
    }
    getCommentList();
  },[]);

  console.log("commentList", commentList);

  // 댓글 작성 요청
  const newCommentsubmitHandler = (e) => {
    e.preventDefault();

    // // 댓글 작성시간
    // const currentTime = new Date().toLocaleString('ko-KR', { hour12: false }).replace(/\. /g, '. 0');
    // setNewCommentTime(currentTime);

    // const commentData = { comment: newComment }
    // const url = isReplying ? `/reply/${postIdx}/${commentIdx}` : `/comment/${postIdx}`

    // instanceWithAuth.post(url, commentData)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  return (
    <DetailPostComments_Wrap>
      {/* ========================== 댓글 리스트 ========================== */}
      {
        commentList?.map((comment)=> (
            <DetailPostComment 
            key={comment.commentIdx}
            comment={comment}
            />)
        )
      }

      {/* ========================== 댓글, 답글 입력 푸터 ========================== */}
      <DetailPostComments_Footer>
        <DetailPostComments_FooterInputCont onSubmit={(e)=>newCommentsubmitHandler(e)}>
          <DetailPostComments_Input
            type='text'
            placeholder='훈수를 남겨주세요.'
          // maxLength=
          />
          <DetailPostComments_InputBtn
            type='submit'
            onClick={(e)=>newCommentsubmitHandler(e)}
          >
            등록
          </DetailPostComments_InputBtn>
        </DetailPostComments_FooterInputCont>
      </DetailPostComments_Footer>
    </DetailPostComments_Wrap>
  );

};

export default DetailPostCommentsList;

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