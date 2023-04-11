import React from "react";
import styled from "styled-components";
import FalseGuard from "../components/hook/guard/FalseGuard";
import MobileLayout from "../layout/MobileLayout";

const Write = () => {
  FalseGuard();
  return (
    <MobileLayout>
      <PageWithFooterWrapper>
        <BoardHeader>
          <BoardHeaderSub>
            <BoardTitle>훈수게시판</BoardTitle>
          </BoardHeaderSub>
        </BoardHeader>
      </PageWithFooterWrapper>
    </MobileLayout>
  );
};

export default Write;

const PageWithFooterWrapper = styled.div`
  margin: 11rem 0 15rem 0;
`;

const BoardTitle = styled.div`
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const BoardHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  padding-top: 0.75rem;
  width: 100%;
  max-width: 400px;
  font-size: 1.25rem;
  color: rgb(70, 70, 70);
`;

const BoardHeaderSub = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;
