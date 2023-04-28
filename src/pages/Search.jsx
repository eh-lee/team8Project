import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import MobileLayout from "../layout/MobileLayout";
import { BiSearch } from "react-icons/bi";
import vector from "../assets/icons/common/vector.png";
import cancel from "../assets/icons/common/expand.png";
import search from "../assets/icons/common/search.png";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const nav = useNavigate();

  return (
    <>
      <Helmet>
        <title>훈수 — 검색</title>
      </Helmet>
      <MobileLayout>
        {/* <PageWithFooterWrapper> */}
        <WriteHeader>
          <WriteHeaderCont>
            <StBackIcon src={vector} onClick={() => nav(-1)} />
            <WriteCategory>
              <MainCat>전체 검색</MainCat>
            </WriteCategory>
            <StFooDiv></StFooDiv>
          </WriteHeaderCont>
        </WriteHeader>
        <DetailPostCommentsFooter>
          <DetailPostCommentsFooterInputCont
          // onSubmit={(e) => newCommentsubmitHandler(e)}
          >
            <StTogether>
              <StFooLeftDiv>
                <StSearchIcon src={search} />
              </StFooLeftDiv>

              <DetailPostCommentsInput
                required
                // type="text"
                placeholder="검색어를 입력하세요."
                // value={newComment}
                // onChange={(e) => newCommentHandler(e)}
                maxLength="20"
              />

              <StFooRightDiv>
                <StCancIcon src={cancel} />
              </StFooRightDiv>
            </StTogether>

            <DetailPostCommentsInputBtn
              type="submit"
              // onClick={(e) => newCommentsubmitHandler(e)}
            >
              취소
            </DetailPostCommentsInputBtn>
          </DetailPostCommentsFooterInputCont>
        </DetailPostCommentsFooter>
      </MobileLayout>
    </>
  );
};

export default Search;

const StTogether = styled.div`
  display: flex;
  flex-direction: row;
`;

const StFooRightDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #f2f2f7;
  border-radius: 0 10px 10px 0;
  padding-right: 10px;
`;
const StFooLeftDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #f2f2f7;
  border-radius: 10px 0 0 10px;
  padding-left: 10px;
`;

const DetailPostCommentsInput = styled.input`
  border: none;
  padding: 0 12px;
  width: 200px;
  height: 40px;
  background: #f2f2f7;
`;

const StBackIcon = styled.img`
  width: 8px;
  height: 16px;
  margin-left: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;
const StCancIcon = styled.img`
  /* width: 8px; */
  /* height: 16px; */
  margin-right: 4%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;
const StSearchIcon = styled.img`
  /* width: 8px; */
  /* height: 16px; */
  /* margin-left: 7.5%; */
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const DetailPostCommentsFooter = styled.footer`
  /* border: 1px solid green; */
  position: fixed;
  top: 49px;
  background-color: white;
  max-width: 400px;
  min-height: 30px;
  height: 64px;
  border-bottom: 0.1rem solid rgba(180, 180, 180, 0.5);

  display: flex;
  flex-direction: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

const DetailPostCommentsFooterInputCont = styled.form`
  /* border: 1px solid green; */
  width: 100vw;
  display: flex;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  margin: 0 7.5%;
  // *======== HeaderCanc || HeaderPost와 마진 맞춤 =======*
  align-items: center;
  justify-content: space-between;
`;

const DetailPostCommentsInputBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #2d2d2d;
  width: 32px;
  height: 24px;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  cursor: pointer;
  &:hover {
    color: #3a3a59;
  }
`;

const StFooDiv = styled.div`
  margin-right: 7.5%;
  width: 30px;
  /* width: 10px; */
  /* height: 10px; */
`;

const MainCat = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
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
  align-items: center;
  border-bottom: 0.1rem solid rgba(180, 180, 180, 0.5);
  // *============ HEADER 높이 ===============*
  /* padding-bottom: 2vh; */
  height: 48px;
  // *============ HEADER 높이 ===============*
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;
