import React from "react";
import FooterNav from "./FooterNav";
import * as St from "./Footer.style"

const Footer = () => {
  //================== Footer Scroll Event =================
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const isHeaderOpaque = scrollPosition < 100;
  //================== Footer Scroll Event =================
  //================== layout에 적용 안 됨 =================

  return (
    // <StyledFooter isOpaque={isHeaderOpaque}>
    <St.Footer>
      <FooterNav />
    </St.Footer>
  );
};

export default Footer;