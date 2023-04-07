import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/axios";
import Footer from "../../components/footer/Footer";
import PostCard from "../../components/post/PostCard";
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
      <PageWithFooterWrapper>
        <BoardHeader>
          <BoardHeaderSub>
            <BoardTitle>훈수게시판</BoardTitle>
            <Row>
              {/* if문으로 색상 & axios | with state bool */}
              <BoardCategory>유머</BoardCategory>
              <BoardCategory>진지</BoardCategory>
            </Row>
          </BoardHeaderSub>
        </BoardHeader>
        {/*  */}
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        {/*  */}
      </PageWithFooterWrapper>
      <Footer />
    </MobileLayout>
  );
};

const PageWithFooterWrapper = styled.div`
  margin: 8rem 0 15rem 0;
  /* margin-top 조정함 */
`;

const BoardLink = styled(Link)`
  color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
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
  gap: 2rem;
  font-weight: bold;
  justify-content: space-evenly;
`;

const BoardCategory = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 0.2rem solid rgb(70, 70, 70);
  color: rgb(70, 70, 70);
  text-decoration: none;

  &:hover {
    color: rgb(180, 180, 180);
    cursor: pointer;
    border-bottom: 0.1rem solid rgb(180, 180, 180); /* 새로 추가된 코드 */
  }
`;

const BoardTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export default Board;
