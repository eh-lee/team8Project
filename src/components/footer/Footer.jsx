import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FooterNav from "./FooterNav";

const Footer = () => {
  //================== Footer Scroll Event =================
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHeaderOpaque = scrollPosition < 100;
  //================== Footer Scroll Event =================

  return (
    <StyledFooter isOpaque={isHeaderOpaque}>
      <FooterNav />
    </StyledFooter>
  );
};

// footer 높이 5.55~56?rem
const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 400px;
  /* StMobileLayout의 width와 동일하게 처리 */
  border-top: 0.01rem solid rgba(0, 0, 0, 0.2);
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255);
  opacity: ${({ isOpaque }) => (isOpaque ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export default Footer;
