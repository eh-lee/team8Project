import React from "react";
import ProCon from "../poll/ProCon";
import PollModal from "../modal/PollModal";
import WriteFooter from "../footer/WriteFooter";
import ModalPortal from "../modal/ModalPortal";
import CateogryModal from "../modal/CateogryModal";
import { useState } from "react";
import { instanceWithAuth } from "../../api/axios";
import * as St from "./WriteForm.style";
import { useNavigate } from "react-router-dom";

const WriteForm = ({ setLoading }) => {
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

  // 게시글 등록 핸들러
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
      formData.append("files", imgs[i]);
    }

    if (title.length < 3 || title.length > 25) {
      alert("제목은 3자 이상, 25자 이하여야 합니다!");
      return;
    }

    if (desc.length < 10 || desc.length > 2000) {
      alert("내용은 10자 이상, 2000자 이하여야 합니다!");
      return;
    }

    if (maincategory === "카테고리") {
      alert("카테고리를 선택해 주세요.");
      return;
    }

    if (maincategory !== "카테고리" && category === "") {
      alert("상세 카테고리를 선택해 주세요.");
      return;
    }

    setLoading(true);

    try {
      await instanceWithAuth.post("/postCards/post/createPost", formData);
      setLoading(false);
      alert("글 작성에 성공하였습니다.");
      navi("/board");
    } catch (e) {
      // alert('현재 해당 기능 점검 중에 있습니다.')
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };

  const handleCanc = () => {
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
        <St.Poll onClick={() => pollModalOpenHandler()}>
          <St.Vote />
          <St.VoteText>투표 생성</St.VoteText>
        </St.Poll>
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
