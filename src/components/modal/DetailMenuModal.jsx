import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import * as St from "./DetailMenuModal.style"

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
        nav("/board");
      })
      .catch((error) => {
        console.error("게시글 삭제", error);
      });
  };

  return open ? (
    <St.DetailMenuWrap ref={modalRef}>
      <St.MenuButton onClick={editButtonHandler}>
        <St.ButtonText>수정하기</St.ButtonText>
        <St.IconEdit />
      </St.MenuButton>
      <St.MenuButton onClick={deleteButtonHandler} delete>
        <St.ButtonText>삭제하기</St.ButtonText>
        <St.IconTrash />
      </St.MenuButton>
    </St.DetailMenuWrap>
  ) : null;
};

export default DetailMenuModal;
