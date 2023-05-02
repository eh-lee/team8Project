import React from 'react'
import * as St from "./Like.style"

const Like = ({ isLike, size }) => {
  return (
    <div >
        <St.LikeImg isLike={isLike} size={size} />
    </div>
  )
}

export default Like;