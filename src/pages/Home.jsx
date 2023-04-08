import React, { useEffect, useState } from "react";
import PostCard from "../components/Post/PostCard";
import Footer from "../components/footer/Footer";
import MobileLayout from "../layout/MobileLayout";
import { instance } from "../api/axios";
import PostCardSlider from "../components/Post/PostCardSlider";

const Home = () => {

  // const [page, setPage] = useState(1);

  // const [postCards, setPostCards] = useState([]);
  // const [hotPostCards, setHotPostCards] = useState([]);

  // useEffect(()=>{
  //   const getHotPost = async() => {
  //     const response = await instance.get('/postCards/hotPostCard')
  //     setHotPostCards(response.data.postCards)
  //   }

  //   const getPost = async() => {
  //     const response = await instance.get(`/postCards?maincategory=전체&category=전체&splitNumber=10&splitPageNumber=${page}`)
  //     setPostCards(response.data.postCards)
  //   }
    
  //   getHotPost();
  //   getPost();
  // }, [])

  // console.log('postCards', postCards);

  return (
    <>
      <MobileLayout>
        <PostCardSlider />
        {/* <h1>Hot 게시물</h1>
        {
          hotPostCards?.map((hotPostCard) => {
            return (
              <PostCard
                key={hotPostCard.postIdx}
                title={hotPostCard.title} nickname={hotPostCard.nickname} content={hotPostCard.desc}
                viewCount={hotPostCard.postViewCount} commentCount={hotPostCard.commentCount}
              />
            )
          })
        }

        <h1>실시간 게시물</h1>
        {
          postCards?.map((postCard) => {
            return (
              <PostCard
                key={postCard.postIdx}
                title={postCard.title} nickname={postCard.nickname} content={postCard.desc}
                viewCount={postCard.postViewCount} commentCount={postCard.commentCount}
              />
            )
          })
        }
        <Footer /> */}
      </MobileLayout>
    </>
  )
};

export default Home;
