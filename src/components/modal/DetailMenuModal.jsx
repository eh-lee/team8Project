import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";
import { ReactComponent as Edit } from "../../assets/icons/common/edit.svg";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";

const DetailMenuModal = ({ open, close, postIdx, detailPostCat }) => {
  const nav = useNavigate();

  // =========== 모달 창 바깥을 클릭하면 닫히는 기능 ===========
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, open, close]);

  // 수정하기 버튼 클릭
  const editButtonHandler = () => {
    close();
    // 수정페이지 만들어서 이동
    nav("/board/:postIdx/edit", { state: { postIdx, detailPostCat } });
  };

  // 삭제하기 버튼 클릭
  const deleteButtonHandler = () => {
    close();
    instanceWithAuth
      .delete(`/postCards/post/createPost/${postIdx}`)
      .then((response) => {
        alert(response.data.msg);
        nav("/totalboard");
      })
      .catch((error) => {
        console.error("게시글 삭제", error);
      });
  };

  return open ? (
    <DetailMenuWrap ref={modalRef}>
      <MenuButton onClick={editButtonHandler}>
        <ButtonText>수정하기</ButtonText>
        <StIconEdit />
      </MenuButton>
      <MenuButton onClick={deleteButtonHandler} delete>
        <ButtonText>삭제하기</ButtonText>
        <StIconTrash />
      </MenuButton>
    </DetailMenuWrap>
  ) : null;
};

export default DetailMenuModal;

const StIconTrash = styled(Trash)`
  width: 20px;
  height: 20px;
  path:nth-child(1) {
    stroke: #eb5147;
  }
`;

const StIconEdit = styled(Edit)`
  width: 20px;
  height: 20px;
`;

const DetailMenuWrap = styled.ul`
  position: absolute;
  background-color: white;
  top: 9vh;
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
  border-bottom: 1px solid #cccccc;
  ${({ delete: isDelete }) =>
    isDelete &&
    css`
      color: #eb5147;
      border-bottom: none;
    `}
`;

const ButtonText = styled.li``;
