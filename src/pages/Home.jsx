import React from "react";
import PostCard from "../components/Post/PostCard";

const Home = () => {
  return (
  <div>
    <PostCard 
    // title={title} nickname={nickname} content={content}
    title="타이틀을 막 바꿀 수 있지요하하하하하" nickname="하하하하하하하하하하하하하하하" 
    content="컨텐츠 길어지면 어떻게 될까요" 
    viewCount="viewCount" commentCount="commentCount"
    />
  </div>
  )
};

export default Home;
