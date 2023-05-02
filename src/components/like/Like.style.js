import styled, { css } from 'styled-components'
import {ReactComponent as LikeIcon} from "../../assets/icons/common/like.svg"

export const LikeImg = styled(LikeIcon)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }


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
