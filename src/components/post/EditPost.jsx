import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import MobileLayout from "../../layout/MobileLayout";
import FalseGuard from "../../components/hook/guard/FalseGuard";
import ModalPortal from "../../components/modal/ModalPortal";
import CateogryModal from "../../components/modal/CateogryModal";
import WriteFooter from "../../components/footer/WriteFooter";
import { pollCanc } from "../../app/modules/writeSlice";
import ProCon from "../../components/poll/ProCon";
import * as St from "./EditPost.style"

const EditPost = () => {
  FalseGuard();

  const location = useLocation();
  const postIdx = location.state.postIdx;

  const dispatch = useDispatch();
  const { pollType, pollTitle, tag } = useSelector((state) => state.write);
  const navi = useNavigate();

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
  }, []);

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
      await instanceWithAuth.put(`/postCards/post/createPost/${postIdx}`, {
        title,
        desc,
        maincategory,
        category,
        pollType,
        pollTitle,
        tag,
        imgUrl: "",
      });

      dispatch(pollCanc());
      alert("글 수정에 성공하였습니다.");
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
        <title>훈수 — 게시글 수정</title>
      </Helmet>
      <MobileLayout>
        <St.PageWithFooterWrapper>
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
            <St.WriteContent
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="훈수 받고 싶은 내용을 입력하세요."
            ></St.WriteContent>
          </St.WriteForm>

          {/* ========= 찬반형 투표 미리보기 ========= */}
          {pollType === "proCon" ? <ProCon pollTitle={pollTitle} /> : null}
          {/* ========= 찬반형 투표 미리보기 ========= */}

          {pollType === "select" ? (
            <>
              <div>선택형 투표 미리보기입니다.</div>
              <div>{pollTitle}</div>
              <div>{tag}</div>
              <div>
                <St.TrashIcon onClick={proConDelHandler} />
              </div>
              {/* tag map 돌려야 하나? */}
            </>
          ) : null}

          {/* ======= pollModal은 요 안에 ======== */}
          <WriteFooter />
          {/* ======= pollModal은 요 안에 ======== */}
        </St.PageWithFooterWrapper>
        <ModalPortal>
          <St.ModalCont>
            {isCategoryModalOpen && (
              <CateogryModal
                open={isCategoryModalOpen}
                close={categoryModalCloseHandler}
                parentFunction={WriteCallback}
                // CategoryModal(child) to write.jsx(parent)
              />
            )}
          </St.ModalCont>
        </ModalPortal>
      </MobileLayout>
    </>
  );
};

export default EditPost;