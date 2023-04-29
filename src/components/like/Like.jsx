import React from 'react'
import styled, { css } from 'styled-components'
import like from "../../assets/icons/common/like.png"

const Like = ({ isLike }) => {
  return (
    <LikeIcon isLike={isLike} >
        <StLikeImg src={like} />
    </LikeIcon>
  )
}

export default Like;

const LikeIcon = styled.div`

  ${({isLike}) => {
    if (isLike) {
      return css`
        color: #F26581;
      `
    }
  }}
`;

const StLikeImg = styled.img`
  width: 24px;
  height: 24px;
`