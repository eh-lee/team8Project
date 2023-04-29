import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instanceWithAuth } from "../../api/axios";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import MobileLayout from "../../layout/MobileLayout";
import { IoIosArrowDown } from "react-icons/io";
import CateogryModal from "../../components/modal/CateogryModal";
import WriteFooter from "../../components/footer/WriteFooter";
import ModalPortal from "../../components/modal/ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { pollCanc } from "../../app/modules/writeSlice";
import ProCon from "../../components/poll/ProCon";
import { Helmet } from "react-helmet";
// import { instance } from "../../api/axios";

const Write = () => {
  FalseGuard();
  const dispatch = useDispatch();
  const { pollType, pollTitle, tag } = useSelector((state) => state.write);
  const navi = useNavigate();

  // const access_token = decodeURI(document.cookie)
  //   .replace("access_token=", "")
  //   .replace(/; nickname=([^;]*)/, "")
  //   .replace(/; refresh_token=[^;]*/, "");

  const WriteCallback = (x, y) => {
    setMaincategory(x);
    setCategory(y);
  };

  const proConDelHandler = () => {
    dispatch(pollCanc());
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maincategory, setMaincategory] = useState("카테고리");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // *=============== 글자 수 검사 ===============*
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
      // console.log("auth===========>", instanceWithAuth);
      await instanceWithAuth.post("/postCards/post/createPost", {
        title,
        desc,
        maincategory,
        category,
        pollType,
        pollTitle,
        tag,
        imgUrl: "",
      });
      // await instance.post(
      //   "/postCards/post/createPost",
      //   {
      //     title,
      //     desc,
      //     maincategory,
      //     category,
      //     pollType,
      //     pollTitle,
      //     tag,
      //   },
      //   {
      //     headers: {
      //       Authorization: `${access_token}`,
      //     },
      //   }
      // );

      dispatch(pollCanc());
      alert("글 작성에 성공하였습니다.");
      navi("/totalboard");
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
      <Helmet>
        <title>훈수 — 글쓰기</title>
      </Helmet>
      <MobileLayout>
        <PageWithFooterWrapper>
          <WriteHeader>
            <WriteHeaderCont>
              {/* 1 */}
              <WriteCanc onClick={handleCanc}>취소</WriteCanc>
              {/* 1 */}
              {/* 2 */}
              <WriteCategory>
                <MainCat>{maincategory}</MainCat>
                <SubCat>{category}</SubCat>
                <IconCont>
                  <IoIosArrowDown onClick={categoryModalOpenHandler} />
                </IconCont>
              </WriteCategory>
              {/* 2 */}
              {/* 3 */}
              <WritePost onClick={submitHandler}>등록</WritePost>
              {/* 3 */}
            </WriteHeaderCont>
          </WriteHeader>
          <WriteForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <WriteTitle
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              autoFocus
              placeholder="제목"
            ></WriteTitle>
            <WriteContent
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="훈수 받고 싶은 내용을 입력하세요."
            ></WriteContent>
          </WriteForm>

          {/* ========= 찬반형 투표 미리보기 ========= */}
          {pollType === "proCon" ? <ProCon pollTitle={pollTitle} /> : null}
          {/* ========= 찬반형 투표 미리보기 ========= */}

          {pollType === "select" ? (
            <>
              <div>선택형 투표 미리보기입니다.</div>
              <div>{pollTitle}</div>
              <div>{tag}</div>
              <div>
                <BsTrash onClick={proConDelHandler} />
              </div>
              {/* tag map 돌려야 하나? */}
            </>
          ) : null}

          {/* ======= pollModal은 요 안에 ======== */}
          <WriteFooter />
          {/* ======= pollModal은 요 안에 ======== */}
        </PageWithFooterWrapper>
        <ModalPortal>
          <ModalCont>
            {isCategoryModalOpen && (
              <CateogryModal
                open={isCategoryModalOpen}
                close={categoryModalCloseHandler}
                parentFunction={WriteCallback}
                // CategoryModal(child) to write.jsx(parent)
              />
            )}
          </ModalCont>
        </ModalPortal>
      </MobileLayout>
    </>
  );
};

export default Write;

const ModalCont = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const WriteTitle = styled.input`
  font-size: 1.3rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  width: 80%;
  border: none;
  border-bottom: 0.1rem solid rgb(180, 180, 180);

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid rgb(180, 180, 180);
  }

  ::placeholder {
    color: rgb(180, 180, 180);
  }
`;

const MainCat = styled.div``;

const SubCat = styled.div`
  color: rgb(180, 180, 180);
`;

const WriteContent = styled.textarea`
  font-size: 0.85rem;
  width: 80%;
  padding: 0 1rem 1rem 1rem;
  /* scroll issue */
  border: none;
  min-height: 40vh;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  resize: none;
  white-space: pre-wrap;
  /* 줄바꿈과 공백 인식하여 출력 ~ 댓글에도*/
  word-break: break-all;
  /* 줄바꿈 */

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: rgb(180, 180, 180);
    white-space: pre-wrap;
  }
`;

const WriteForm = styled.form`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  max-width: 400px;
  /* height: 60vh; */
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  /* border: 1px solid green; */
`;

const PageWithFooterWrapper = styled.div`
  margin-top: 3.5rem;
`;

const WriteCanc = styled.div`
  margin-left: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WritePost = styled.div`
  margin-right: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const WriteHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 5vh;
  // *============ HEADER 높이 ===============*
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const IconCont = styled.div`
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;
