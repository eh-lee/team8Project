import React from 'react'
import styled, { css } from 'styled-components'
import {ReactComponent as LikeIcon} from "../../assets/icons/common/like.svg"

const Like = ({ isLike, size }) => {
  console.log("isLike가 프롭스로 어떻게 내려오나요" ,isLike)
  return (
    <div >
        <StLikeImg isLike={isLike} size={size} />
    </div>
  )
}

export default Like;

const StLikeImg = styled(LikeIcon)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;


  ${({isLike}) => {
    if (isLike) {
      return css`
        path {
          stroke: #F26581;
        }
      `;
    }
  }};

${({size}) => {
    if(size) {
      return css`
        width: ${size}px;
        height: ${size}px;
        viewBox: 0 0 ${size} ${size};
      `;
    }
  }}
`;