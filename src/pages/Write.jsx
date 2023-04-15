import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../api/axios";
// import { access_token } from "../api/token";
import WriteFooter from "../components/footer/WriteFooter";
import FalseGuard from "../components/hook/guard/FalseGuard";
import MobileLayout from "../layout/MobileLayout";
import { IoIosArrowDown } from "react-icons/io";
import CateogryModal from "../components/modal/CateogryModal";
import ModalPortal from "../components/modal/ModalPortal";

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY4MTUzNDk3MywiZXhwIjoxNjgxNTM4NTczfQ.GoAru7-wrkMLl9LvCN7w6urWkCNU1XupqwtALlPpT_w
//이게 뉴

// cookie
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY4MTUyODU0NSwiZXhwIjoxNjgxNTMyMTQ1fQ   .rnuRvuZxLr9Cj0o1NiYVTPFwOPxSTmVVyH5b4yykxtM

// res
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY4MTUyODU0NSwiZXhwIjoxNjgxNTMyMTQ1fQ.rnuRvuZxLr9Cj0o1NiYVTPFwOPxSTmVVyH5b4yykxtM

// req
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY4MTUyMzU1NywiZXhwIjoxNjgxNTI3MTU3fQ   .XZkfOj4B5_FFj1NeSoS1JJHknKt2_wrG6xeIB-F7NlE

export const access_token = decodeURI(document.cookie)
  .replace("access_token=", "")
  .replace(/; nickname=([^;]*)/, "");

console.log(access_token);

const Write = () => {
  FalseGuard();
  const navi = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // SubCat & MainCat은 modal에 있는 state라
  // 일단 portal로 옮기고 나서 생각
  const [maincategory, setMaincategory] = useState("유머");
  const [category, setCategory] = useState("일상");

  console.log("title===>", title);
  console.log("desc===>", desc);

  // const [createPost, setCreatePost] = useState({
  //   title,
  //   desc,
  //   mainCategory: "",
  //   category: "",
  //   tag: [],
  //   imgUrl: [],
  //   pollTitle: "",
  // });

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
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQG5hdmVyLmNvbSIsImlhdCI6MTY4MTUyODU0NSwiZXhwIjoxNjgxNTMyMTQ1fQ.rnuRvuZxLr9Cj0o1NiYVTPFwOPxSTmVVyH5b4yykxtM`,
          },
        }
      );
      alert("글 작성에 성공하였습니다.");
      // prompt(""); 커스텀 프롬프트
      // navi("/board/{mainCategory}{Category}엌저구의 디테일로 넘어가게?")
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
              카테고리
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

        <WriteFooter />
      </PageWithFooterWrapper>

      <ModalPortal>
        <ModalCont>
          {isCategoryModalOpen && (
            <CateogryModal
              open={isCategoryModalOpen}
              close={categoryModalCloseHandler}
            />
          )}
        </ModalCont>
      </ModalPortal>
    </MobileLayout>
  );
};

export default Write;

const ModalCont = styled.div``;
const WriteTitle = styled.input`
  font-size: 1.5rem;
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

const WriteContent = styled.textarea`
  font-size: 1rem;
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
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WritePost = styled.div`
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  padding-top: 0.75rem;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const WriteHeaderCont = styled.div`
  padding-bottom: 0.75rem;
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
`;

const IconCont = styled.div`
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;
