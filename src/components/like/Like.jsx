import React from 'react'
import styled, { css } from 'styled-components'
import {ReactComponent as like} from "../../assets/icons/common/like.svg"

const Like = ({ isLike }) => {
  console.log("isLike가 프롭스로 어떻게 내려오나요" ,isLike)
  return (
    <LikeIcon >
        <StLikeImg isLike={isLike}/>
    </LikeIcon>
  )
}

export default Like;

const LikeIcon = styled.div`

`;

const StLikeImg = styled(like)`
  width: 24px;
  height: 24px;


  ${({isLike}) => {
    if (isLike) {
      return css`
        path {
          stroke: #F26581;
        }
      `;
    }
  }}
`;