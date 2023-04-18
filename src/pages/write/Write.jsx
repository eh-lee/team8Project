import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/axios";
import { access_token } from "../../api/token";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import MobileLayout from "../../layout/MobileLayout";
import { IoIosArrowDown } from "react-icons/io";
import CateogryModal from "../../components/modal/CateogryModal";
// import ModalPortal from "../components/modal/ModalPortal";
import { FaVoteYea } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import WriteFooter from "../../components/footer/WriteFooter";
import ModalPortal from "../../components/modal/ModalPortal";

const Write = () => {
  FalseGuard();
  const navi = useNavigate();
  // const makePollHandler = () => {
  //   navi("/write/pollwrite");
  // };

  // parentFunction
  const WriteCallback = (x, y) => {
    console.log("지옥에서 돌아온 데이터 x==========>", x);
    setMaincategory(x);
    console.log("지옥에서 돌아온 데이터 y==========>", y);
    setCategory(y);
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // SubCat & MainCat은 modal에 있는 state라
  // 일단 portal로 옮기고 나서 생각
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
        { title, desc, maincategory, category },
        {
          headers: {
            Authorization: `${access_token}`,
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
          {/* <WriteHeaderLeftMargin /> */}

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

          {/* <WriteHeaderRightMargin /> */}
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
        <WriteFooter />
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

const StyledColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-start;
  min-height: 30px;
  height: 7vh;
  align-items: center;
`;

const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 10%;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: rgb(70, 70, 70);
`;

const StyledPoll = styled.button`
  gap: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.5vh;
  min-width: 11vh;
  padding: 3px 5px;
  border: 1px solid #3a3a59;
  border-radius: 2rem;
  background-color: white;
  color: #3a3a59;
  font-size: 0.7rem;

  &:hover {
    color: white;
    background-color: #3a3a59;
    outline: none;
    cursor: pointer;
  }
`;

const StyledImageBtn = styled.button`
  width: 30px;
  display: flex;
  padding: 0;
  justify-content: flex-end;
  outline: none;
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: #d8d8de;

  &:hover {
    cursor: pointer;
    color: #3a3a59;
  }
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 400px;
  /* StMobileLayout의 width와 동일하게 처리 */
  border-top: 0.01rem solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255);
`;
