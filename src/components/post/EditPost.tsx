import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProCon from "../poll/ProCon";
import PollModal from "../modal/PollModal";
import FalseGuard from "../hook/guard/FalseGuard";
import WriteFooter from "../footer/WriteFooter";
import ModalPortal from "../modal/ModalPortal";
import MobileLayout from "../../layout/MobileLayout";
import CateogryModal from "../modal/CateogryModal";
import { useLocation, useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import { ReactComponent as VoteIcon } from "../../assets/icons/common/vote.svg";
import * as St from "./EditPost.style";

const EditPost: React.FC = () => {
  FalseGuard();

  useEffect(() => {
    document.title = "훈수 - 수정하기";
  }, []);

  const location = useLocation();

  const postIdx = location.state.postIdx;

  useEffect(() => {
    const getForEditPost = async () => {
      try {
        const res = await instanceWithAuth.get(`/postCards/post/${postIdx}`);
        setTitle(res.data.post.title);
        setDesc(res.data.post.desc);
      } catch (error) {
        console.error(error);
      }
    };
    getForEditPost();
    setMaincategory(location.state.detailPostCat.maincategory);
    setCategory(location.state.detailPostCat.category);
  }, [
    postIdx,
    location.state.detailPostCat.maincategory,
    location.state.detailPostCat.category,
  ]);

  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const pollModalOpenHandler = () => {
    setIsPollModalOpen(true);
  };
  const pollModalCloseHandler = () => {
    setIsPollModalOpen(false);
  };

  const [pollTitle, setPollTitle] = useState("");
  const [pollType, setPollType] = useState("");
  const detailPollTitle: string = "";
  const detailProCount: number = 0;
  const detailConCount: number = 0;
  const detailPostIdx: number = 0;
  const parentProInputValue: boolean = false;
  const parentConInputValue: boolean = false;

  const PollCallback = (pollType: string, pollTitle: string) => {
    setPollType(pollType);
    setPollTitle(pollTitle);
  };

  const navi = useNavigate();

  const WriteCallback = (x: string, y: string) => {
    setMaincategory(x);
    setCategory(y);
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maincategory, setMaincategory] = useState("");
  const [category, setCategory] = useState("");
  const tag: string[] = [];

  // 이미지 업로드
  const [imgs, setImgs] = useState<File[]>([]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("maincategory", maincategory);
    formData.append("category", category);
    formData.append("pollType", pollType);
    formData.append("pollTitle", pollTitle);
    formData.append("tag", tag.join(","));

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

    try {
      await instanceWithAuth.put(
        `/postCards/post/createPost/${postIdx}`,
        formData
      );
      alert("글 수정에 성공하였습니다.");
      navi("/board");
    } catch (e) {
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
      <MobileLayout>
        <>
          {/* <WriteForm /> */}
          <St.WriteHeader>
            <St.WriteHeaderCont>
              <St.WriteCanc onClick={handleCanc}>취소</St.WriteCanc>
              <St.WriteCategory>
                <St.MainCat>{maincategory}</St.MainCat>
                <St.SubCat>{category}</St.SubCat>
                <St.IconCont>
                  <St.ArrowDownIcon onClick={categoryModalOpenHandler} />
                </St.IconCont>
              </St.WriteCategory>
              <St.WritePost onClick={submitHandler}>수정</St.WritePost>
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
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="훈수 받고 싶은 내용을 입력하세요."
            ></St.WriteContent>
          </St.WriteForm>
          <WriteFooter setImgs={setImgs} />

          {/* {pollType === "proCon" ? <ProCon pollTitle={pollTitle} /> : null} */}

          {pollType === "proCon" ? (
            <ProCon
              pollTitle={pollTitle}
              detailPollTitle={detailPollTitle}
              detailProCount={detailProCount}
              detailConCount={detailConCount}
              detailPostIdx={detailPostIdx}
              parentProInputValue={parentProInputValue}
              parentConInputValue={parentConInputValue}
            />
          ) : null}

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
      </MobileLayout>
    </>
  );
};

export default EditPost;

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
