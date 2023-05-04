import React, { useEffect } from "react";
import ProCon from "../poll/ProCon";
import ModalPortal from "../modal/ModalPortal";
import CateogryModal from "../modal/CateogryModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import * as St from "./WriteForm.style";
import WriteFooter from "../footer/WriteFooter";

const WriteForm = () => {
  const [pollTitle, setPollTitle] = useState(localStorage.getItem("pollTitle"));
  const [pollType, setPollType] = useState(localStorage.getItem("pollType"));

  // ...=_= 로컬스토리지는 앱 상태를 관리하기 위한 API가 아닙니다. 앱 상태를 캐시하고 탭 간의 정보 교환을 위한 API에요.
  // 이 말은 무슨 뜻이냐, 로컬스토리지의 변경 이벤트는 같은 탭에서는 리스닝할 수 없다는 의미입니다.

  // useEffect(() => {
  //   setPollTitle(localStorage.getItem("pollTitle"));
  //   setPollType(localStorage.getItem("pollType"));
  //   pollTitle !== "" && localStorage.removeItem("pollTitle");
  //   pollType !== "" && localStorage.removeItem("pollType");
  // }, []);

  //===============try3====================================
  // const [pollTitle, setPollTitle] = useState(localStorage.getItem("pollTitle"));
  // const [pollType, setPollType] = useState(localStorage.getItem("pollType"));

  // useEffect(() => {
  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, [window.localStorage]);

  // const handleStorageChange = (event) => {
  //   if (event.key === "pollTitle") {
  //     setPollTitle(event.newValue);
  //   } else if (event.key === "pollType") {
  //     setPollType(event.newValue);
  //   }
  // };

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
        <St.WriteContent
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="훈수 받고 싶은 내용을 입력하세요."
          // ref={FormRef}
        ></St.WriteContent>
      </St.WriteForm>
      <WriteFooter setImgs={setImgs} />

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
