import React from "react";
import styled from "styled-components";

function WriteFooterNav() {
  return (
    <StyledColumn>
      <StyledNav></StyledNav>
    </StyledColumn>
  );
}

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 5.56rem;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  color: rgb(70, 70, 70);
`;

export default WriteFooterNav;
