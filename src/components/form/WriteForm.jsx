import React from "react";
import ProCon from "../poll/ProCon";
import ModalPortal from "../modal/ModalPortal";
import CateogryModal from "../modal/CateogryModal";
import { useState } from "react";
import { pollCanc } from "../../app/modules/writeSlice";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import * as St from "./WriteForm.style";

const WriteForm = () => {
  const dispatch = useDispatch();
  const { pollType, pollTitle, tag } = useSelector((state) => state.write);
  const navi = useNavigate();

  const WriteCallback = (x, y) => {
    setMaincategory(x);
    setCategory(y);
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maincategory, setMaincategory] = useState("카테고리");
  const [category, setCategory] = useState("");

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
    formData.append("imgUrl", []);

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

    try {
      await instanceWithAuth.post("/postCards/post/createPost", formData);
      dispatch(pollCanc());
      alert("글 작성에 성공하였습니다.");
      navi("/board");
    } catch (e) {
      const errorMsg = e.response.data.msg;
      alert(`${errorMsg}`);
    }
  };

  const handleCanc = () => {
    dispatch(pollCanc());
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
        <St.WriteContent
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="훈수 받고 싶은 내용을 입력하세요."
        ></St.WriteContent>
      </St.WriteForm>

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
