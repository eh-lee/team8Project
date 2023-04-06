import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  max-width: 400px;
  /* StMobileLayout의 width와 동일하게 처리 */
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255);
`;

export default Header;
