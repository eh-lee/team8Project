import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { instanceWithAuth } from '../../api/axios';

const DetailMenuModal = ({open, close, postIdx }) => {
  const nav = useNavigate();

  // =========== 모달 창 바깥을 클릭하면 닫히는 기능 ===========
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    // if (open) {
    //   document.addEventListener("mousedown", handleClickOutside);
    // }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, close]);

  // 수정하기 버튼 클릭
  const editButtonHandler = () => {
    close();
    // 수정페이지 만들어서 이동
    nav('/totalboard');
  }

  // 삭제하기 버튼 클릭
  const deleteButtonHandler = () => {
    close();
    instanceWithAuth.delete(`/postCards/post/createPost/${postIdx}`)
    .then(response => {
      alert(response.data.msg);
      nav('/totalboard');
    })
    .catch(error => {
      console.error('게시글 삭제', error);
    })
  };

  return open? (
    <DetailMenuWrap>
      <MenuButton onClick={editButtonHandler} ref={modalRef}>
        <ButtonText>수정하기</ButtonText>
        <AiOutlineEdit />
      </MenuButton>
      <MenuButton onClick={deleteButtonHandler} ref={modalRef} delete>
        <ButtonText>삭제하기</ButtonText>
        <BsTrash />
      </MenuButton>
    </DetailMenuWrap>
  ) 
  : null
};

export default DetailMenuModal;

const DetailMenuWrap = styled.ul`
  position: absolute;
  background-color: white;
  top: 7vh;
  left: 50vw;
  width: 164px;
  height: 80px;
  border-radius: 13px;
  font-size: 14px;
  box-shadow: 0.05rem 0.02rem 0.25rem rgba(0, 0, 0, 0.3);
`;

const MenuButton = styled.ul`
  width: 164px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 1px solid #CCCCCC;
  ${({delete: isDelete}) => isDelete && css`
    color: #EB5147;
    border-bottom: none;
  `}
`;

const ButtonText = styled.li``;
