import React from 'react'
import * as St from "./Like.style"

const Like = ({ islike, size }) => {
  return (
    <St.LikeImgBox islike={islike} >
        <St.LikeImg  size={size} />
    </St.LikeImgBox>
  )
};

export default Like;