import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import styled, { css } from 'styled-components';

const Like = ({ isLike }) => {
  return (
    <LikeIcon isLike={isLike} >
        <AiOutlineHeart />
    </LikeIcon>
  )
}

export default Like;

const LikeIcon = styled.div`

  ${({isLike}) => {
    if (isLike) {
      return css`
        color: tomato;
      `
    }
  }}
`