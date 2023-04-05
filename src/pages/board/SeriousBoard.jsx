import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import MobileLayout from "../../layout/MobileLayout";

const SeriousBoard = () => {
  return (
    <MobileLayout>
      <h1>진지 게시판</h1>
      <BoardLink to="/board">전체 게시판</BoardLink>
      <BoardLink to="/board/humourous">유머 게시판</BoardLink>

      <Footer />
    </MobileLayout>
  );
};

const BoardLink = styled(Link)`
  color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

export default SeriousBoard;