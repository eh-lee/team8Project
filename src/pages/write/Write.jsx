import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/axios";
import { access_token } from "../../api/token";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import MobileLayout from "../../layout/MobileLayout";
import { IoIosArrowDown } from "react-icons/io";
import CateogryModal from "../../components/modal/CateogryModal";
import WriteFooter from "../../components/footer/WriteFooter";
import ModalPortal from "../../components/modal/ModalPortal";
import { useSelector } from "react-redux";

const Write = () => {
  FalseGuard();

  const { pollType, pollTitle, tag } = useSelector((state) => state.write);

  console.log("polltype========>", pollType);
  console.log("polltitle========>", pollTitle);
  console.log("tag========>", tag);

  // optional chaining으로 전역 받아서 post

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

    // *=============== 글자 수 검사 ===============*
    if (title.length < 3 || title.length > 25) {
      alert("제목은 3자 이상, 25자 이하여야 합니다!");
      return;
    }
    if (desc.length < 10 || desc.length > 2000) {
      alert("내용은 10자 이상, 2000자 이하여야 합니다!");
      return;
    }

    try {
      await instance.post(
        "/postCards/post/createPost",
        // { title, desc, maincategory, category },
        { title, desc, maincategory, category, pollType, pollTitle, tag },
        {
          headers: {
            Authorization: `${access_token}`,
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY4MTg2ODcwOCwiZXhwIjoxNjgyNDczNTA4fQ.xx4HF2-AeHNPh4OrqaB5zjXbQSRFZCZHxELeQH_Zeac`,
          },
        }
      );
      alert("글 작성에 성공하였습니다.");
      navi("/totalboard");
    } catch (e) {
      const errorMsg = e.response.data.msg;
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
    <MobileLayout>
      <PageWithFooterWrapper>
        <WriteHeader>
          <WriteHeaderCont>
            <WriteCanc onClick={handleCanc}>취소</WriteCanc>
            <WriteCategory>
              <MainCat>{maincategory}</MainCat>
              <SubCat>{category}</SubCat>
              <IconCont>
                <IoIosArrowDown onClick={categoryModalOpenHandler} />
              </IconCont>
            </WriteCategory>
            <WritePost onClick={submitHandler}>등록</WritePost>
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
        {/* pollModal은 요 안에 */}
        <WriteFooter />
        {/* pollModal은 요 안에 */}
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
  );
};

export default Write;

const ModalCont = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const WriteTitle = styled.input`
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  width: 80%;
  min-height: 5vh;
  max-height: 10vh;
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
  padding: 1rem 1rem 0 1rem;
  height: 70vh;
  /* scroll issue */
  border: none;
  overflow-y: scroll;
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
  max-height: 75vh;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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
