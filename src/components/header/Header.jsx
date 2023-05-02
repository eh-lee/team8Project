import React from "react";
import HeaderNav from "./HeaderNav";
import * as St from "./Header.style"

const Header = () => {
  return (
    <St.Header>
      <HeaderNav />
    </St.Header>
  );
};

export default Header;