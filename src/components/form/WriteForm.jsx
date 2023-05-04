import React, { useEffect } from "react";
import ProCon from "../poll/ProCon";
import ModalPortal from "../modal/ModalPortal";
import CateogryModal from "../modal/CateogryModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import * as St from "./WriteForm.style";
import WriteFooter from "../footer/WriteFooter";
import PollModal from "../modal/PollModal";
import { ReactComponent as VoteIcon } from "../../assets/icons/common/vote.svg";
import styled from "styled-components";

const WriteForm = () => {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const pollModalOpenHandler = () => {
    setIsPollModalOpen(true);
  };
  const pollModalCloseHandler = () => {
    setIsPollModalOpen(false);
  };

  const [pollTitle, setPollTitle] = useState("");
  const [pollType, setPollType] = useState("");

  const PollCallback = (pollType, pollTitle) => {
    setPollType(pollType);
    setPollTitle(pollTitle);
  };

  const navi = useNavigate();

  const WriteCallback = (x, y) => {
    setMaincategory(x);
    setCategory(y);
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maincategory, setMaincategory] = useState("카테고리");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState([]);

  // 이미지 업로드
  const [imgs, setImgs] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("maincategory", maincategory);
    formData.append("category", category);
    formData.append("pollType", pollType);
    formData.append("pollTitle", pollTitle);
    formData.append("tag", tag);

    for (let i = 0; i < imgs.length; i++) {
      formData.append('files', imgs[i]);
    };

    if (title.length < 3 || title.length > 25) {
      alert("제목은 3자 이상, 25자 이하여야 합니다!");
      return;
    };

    if (desc.length < 10 || desc.length > 2000) {
      alert("내용은 10자 이상, 2000자 이하여야 합니다!");
      return;
    };

    if (maincategory === "카테고리") {
      alert("카테고리를 선택해 주세요.");
      return;
    }

    if (maincategory !== "카테고리" && category === "") {
      alert("상세 카테고리를 선택해 주세요.");
      return;
    }

    try {
      await instanceWithAuth.post("/postCards/post/createPost", formData);
      alert("글 작성에 성공하였습니다.");
      navi("/board");
    } catch (e) {
      const errorMsg = e.response.data.msg;
      alert(`${errorMsg}`);
    }
  };

  const handleCanc = () => {
    localStorage.removeItem("pollTitle");
    localStorage.removeItem("pollType");
    navi(-1);
  };

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const categoryModalOpenHandler = () => {
    setIsCategoryModalOpen(true);
  };

  const categoryModalCloseHandler = () => {
    setIsCategoryModalOpen(false);
  };

  return (
    <>
      <St.WriteHeader>
        <St.WriteHeaderCont>
          <St.WriteCanc onClick={handleCanc}>취소</St.WriteCanc>
          <St.WriteCategory>
            <St.MainCat>{maincategory}</St.MainCat>
            <St.SubCat>{category}</St.SubCat>
            <St.IconCont>
              <St.IconArrowDown onClick={categoryModalOpenHandler} />
            </St.IconCont>
          </St.WriteCategory>
          <St.WritePost onClick={submitHandler}>등록</St.WritePost>
        </St.WriteHeaderCont>
      </St.WriteHeader>
      <St.WriteForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <St.WriteTitle
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          placeholder="제목"
        ></St.WriteTitle>
        <Poll onClick={() => pollModalOpenHandler()}>
          <Vote />
          <VoteText>투표 생성</VoteText>
        </Poll>
        <St.WriteContent
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="훈수 받고 싶은 내용을 입력하세요."
        ></St.WriteContent>
      </St.WriteForm>
      <WriteFooter setImgs={setImgs} />

      {/* ======================= Poll preview ======================= */}
      {pollType === "proCon" ? <ProCon pollTitle={pollTitle} /> : null}
      {/* {pollType === "select" ? (
        <>
              <div>선택형 투표 미리보기입니다.</div>
              <div>{pollTitle}</div>
              <div>{tag}</div>
              <div>
                <St.StIconTrash onClick={proConDelHandler} />
              </div>
            </>
          ) : null} */}

      {/* for test */}
      {/* <Poll onClick={() => pollModalOpenHandler()}>
        <VoteIcon />
        투표 생성
      </Poll> */}
      {/* ======================= Poll preview ======================= */}

      <ModalPortal>
        <St.ModalCont>
          {isPollModalOpen && (
            <PollModal
              open={isPollModalOpen}
              close={pollModalCloseHandler}
              parentFunction={PollCallback}
            />
          )}
        </St.ModalCont>
      </ModalPortal>
      <ModalPortal>
        <St.ModalCont>
          {isCategoryModalOpen && (
            <CateogryModal
              open={isCategoryModalOpen}
              close={categoryModalCloseHandler}
              parentFunction={WriteCallback}
            />
          )}
        </St.ModalCont>
      </ModalPortal>
    </>
  );
};

export default WriteForm;

// for test

const VoteText = styled.p`
  position: absolute;
  z-index: 1000;
  color: #3a3a59;
  font-size: 14px;
  left: 45px;
  top: 7px;
`;
const Poll = styled.button`
  gap: 0.25rem;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  min-height: 32px;
  min-width: 113px;
  padding: 3px 5px;
  border: 1px solid #c4c4c4;
  border-radius: 2rem;
  background-color: white;

  &:hover {
    color: white;
    /* background-color: #3a3a59; */
    outline: none;
    cursor: pointer;
    path {
      /* stroke: white; */
    }
  }

  position: absolute;
  z-index: 1000;
  /* PollModal에 더 큰 인덱스 주기 */
  /* width: 100px; */
  /* height: 100px; */
  bottom: 12px;
  /* 이걸로 버튼 전체 높이 조정 */
  left: 30px;
  /* left: 15px; */
  /* top: -15px; */
  /* background-color: red; */
  /* border: 2px solid red; */
`;
// for test

const Vote = styled(VoteIcon)`
  /* width: 100%; */
  /* height: 100%; */
  left: 15px;
  top: 3px;
  position: absolute;
  z-index: 1000;
  &:hover {
    cursor: pointer;
    path:nth-child(1),
    path:nth-child(2) {
      stroke: #3a3a59;
    }
  }
`;
