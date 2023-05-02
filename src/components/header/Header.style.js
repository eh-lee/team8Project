import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  z-index: 1;
  /* 이미지가 헤더 아래로 가게 */
  top: 0;
  max-width: 400px;
  /* StMobileLayout의 width와 동일하게 처리 */
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 40px;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: #3A3A59;
`;
