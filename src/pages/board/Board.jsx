import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/axios";
import { cookies } from "../../api/cookies";
import Footer from "../../components/footer/Footer";
import MobileLayout from "../../layout/MobileLayout";

const Board = () => {
  // *============ req.heaeders에 token 있을 때, ==========*
  // const token = cookies.get("access_token");
  // console.log(token);

  // useEffect(() => {
  //   const response = instance.get("/sth",
  //   {
  //     headers : {
  //       Authorization: `${token}`
  //     }
  //   });
  //   console.log(response);
  // }, []);
  // *============ req.heaeders에 token 있을 때, ==========*

  // 아직 dummy 없넹..
  useEffect(() => {
    const sth = async () => {
      // const response1 = await instance.get("/postCards");
      // const response2 = await instance.get("/postCards/hotPostCard");
      // console.log("PostCard----->", response1.data);
      // console.log("hotPostCard----->", response2);
      const response3 = await instance.get(
        "/postCards?category=스포츠&splitNumber=2&splitPageNumber=1"
      );
      console.log("category---->", response3.data.postCards);
    };
    sth();
  }, []);

  return (
    <MobileLayout>
      <BoardWrap>
        <BoardCategoryWrap>
          <BoardLink to="/board/humourous">유머</BoardLink>
          <BoardLink to="/board/serious">진지</BoardLink>
        </BoardCategoryWrap>
        <BoardCategory_PostCardWrap>
          <BoardCategory_PostCard_TitleBox></BoardCategory_PostCard_TitleBox>
          <BoardCategory_PostCard_ContentBox></BoardCategory_PostCard_ContentBox>
        </BoardCategory_PostCardWrap>
      </BoardWrap>
      <Footer />
    </MobileLayout>
  );
};

const BoardWrap = styled.div``;

const BoardCategoryWrap = styled.div`
  display: flex;
`;

const BoardCategory_PostCardWrap = styled.div``;

const BoardCategory_PostCard_TitleBox = styled.div``;

const BoardCategory_PostCard_ContentBox = styled.div``;

const BoardLink = styled(Link)`
  color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

export default Board;
