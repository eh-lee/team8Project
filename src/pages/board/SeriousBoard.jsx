// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { instance } from "../../api/axios";
// import Footer from "../../components/footer/Footer";
// import PostCard from "../../components/post/PostCard";
// import MobileLayout from "../../layout/MobileLayout";

// const SeriousBoard = () => {
//   const navi = useNavigate();
//   const [serious, setSerious] = useState([]);
//   const [page, setPage] = useState(1);

//   const categories = [
//     "전체",
//     "패션/뷰티",
//     "맛집/요리/음식",
//     "경제/재테크",
//     "취미/운동",
//     "스포츠",
//     "여행",
//     "결혼",
//     "게임",
//     "반려동물",
//     "가족",
//     "취업/자격증",
//     "일상",
//     "기타",
//   ];

//   const [category, setCategory] = useState("전체");

//   const handleCategoryClick = (category) => {
//     setCategory(category);
//     setPage(1);
//     setSerious([]);
//     console.log("카테고리---->", category);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await instance.get(
//           `/postCards?maincategory=진지&category=${category}&splitNumber=4&splitPageNumber=${page}`
//         );
//         console.log("data------->", response.data.postCards);
//         setSerious((prevSerious) => [...prevSerious, ...response.data.postCards]);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, [category, page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       //try1
//       // const ScrollHeight = document.documentElement.scrollHeight; //스크롤 하지 않았을 때의 전체 높이
//       // const ScrollTop = document.documentElement.scrollTop; //y축 방향으로 스크롤한 거리=스크롤되어 올라간 만큼의 높이
//       // const clientHeight = document.documentElement.clientHeight; // 눈에 보이는 만큼의 높이
//       // const isBottom = clientHeight + ScrollTop + 1 >= ScrollHeight + "500px";

//       //try2
//       const isBottom =
//         window.innerHeight + window.scrollY >= document.body.offsetHeight;
//       // + "500px";
//       if (isBottom) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   //세부 카테고리를 선택해도 전체 카테고리가 호출됨.

//   return (
//     <MobileLayout>
//       <PageWithFooterWrapper>
//         <BoardHeader>
//           <BoardHeaderSub>
//             <BoardTitle>훈수게시판</BoardTitle>

//             <Row>
//               <BoardCategory>유머</BoardCategory>
//               {/* <BoardCategory isActive>로 나중에 색깔 처리 */}
//               <BoardCategory onClick={() => navi("/board/serious")}>
//                 진지
//               </BoardCategory>
//             </Row>
//             <CategoryWrapper>
//               {categories.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleCategoryClick(item)}
//                   style={{ marginLeft: index === 0 ? "1.25rem" : "0.5rem" }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </CategoryWrapper>
//           </BoardHeaderSub>
//         </BoardHeader>

//         {humour.map((item) => (
//           <PostCard
//             key={item.postIdx}
//             title={item.title}
//             nickname={item.nickname}
//             content={item.desc}
//             viewCount={item.postViewCount}
//             commentCount={item.commentCount}
//           />
//         ))}
//       </PageWithFooterWrapper>
//       <Footer />
//     </MobileLayout>
//   );
// };

// const CategoryWrapper = styled.div`
//   padding: 1rem 0;
//   width: 400px;
//   background-color: white;
//   overflow-x: scroll;
//   white-space: nowrap;
//   /* margin-left: 1rem; */

//   & > button {
//     display: inline-block;
//     background-color: white;
//     border: 0.1rem solid rgb(120, 120, 120);
//     margin-right: 0.5rem;
//     border-radius: 1.75rem;
//     padding: 0.25rem 1rem;
//   }

//   & > button:focus {
//     background-color: rgb(120, 120, 120);
//     color: white;
//     outline: none;
//   }

//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

// const PageWithFooterWrapper = styled.div`
//   margin: 11rem 0 15rem 0;
// `;

// const Row = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
// `;

// const BoardHeader = styled.div`
//   background-color: white;
//   position: fixed;
//   top: 0;
//   padding-top: 0.75rem;
//   width: 100%;
//   max-width: 400px;
//   font-size: 1.25rem;
//   color: rgb(70, 70, 70);
// `;

// const BoardHeaderSub = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* gap: 2rem; */
//   font-weight: bold;
//   justify-content: space-evenly;
// `;

// const BoardCategory = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   padding-bottom: 0.75rem;
//   border-bottom: 0.2rem solid rgb(70, 70, 70);
//   color: rgb(70, 70, 70);
//   text-decoration: none;

//   &:hover {
//     color: rgb(180, 180, 180);
//     cursor: pointer;
//     border-bottom: 0.1rem solid rgb(180, 180, 180); /* 새로 추가된 코드 */
//   }
// `;

// const BoardTitle = styled.div`
//   padding-bottom: 2rem;
//   display: flex;
//   justify-content: center;
// `;

// export default SeriousBoard;
