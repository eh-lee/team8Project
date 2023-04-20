import React from 'react'
import styled from 'styled-components';
import {AiOutlineEdit} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'

const DetailMenuModal = ({open, close}) => {

    const closeModal = () => {
        close();
    };

  return open? (
    <DetailMenuWrap>
      <EditCont onClick={closeModal}>
        <EditDesc>수정하기</EditDesc>
        <AiOutlineEdit />
      </EditCont>
      <DeleteCont onClick={closeModal}>
        <DeleteDesc>삭제하기</DeleteDesc>
        <BsTrash />
      </DeleteCont>
    </DetailMenuWrap>
  ) 
  : null
};

export default DetailMenuModal;

const DetailMenuWrap = styled.ul`
  position: absolute;
  top: 7vh;
  left: 50vw;
  width: 164px;
  height: 80px;
  border-radius: 13px;
  font-size: 14px;
  box-shadow: 0.05rem 0.02rem 0.25rem rgba(0, 0, 0, 0.3);
`;

// ================= 겹치는 코드가 많아, 추후 리팩토링 예정 =================
const EditCont = styled.ul`
  width: 164px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #CCCCCC;
  cursor: pointer;
`;

const DeleteCont = styled.ul`
  width: 164px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  color: #EB5147;
`;

const EditDesc = styled.li`
  
`;
const DeleteDesc = styled.li`
  
`;
