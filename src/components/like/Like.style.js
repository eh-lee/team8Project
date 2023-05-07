import styled, { css } from 'styled-components'
import {ReactComponent as LikeIcon} from "../../assets/icons/common/like.svg"

const LikeImgBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(100, 100, 100);

  &:hover {
    cursor: pointer;
  }

  ${({islike}) => {
    if (islike) {
      return css`
        path {
          stroke: #F26581;
        }
      `;
    }
  }};


`;

const LikeImg = styled(LikeIcon)`
${({ size }) => {
    if (size) {
      return css`
        width: ${size}px;
        height: ${size}px;
        viewBox: 0 0 ${size} ${size};
      `;
    }
  }}
`;

export { LikeImgBox, LikeImg }