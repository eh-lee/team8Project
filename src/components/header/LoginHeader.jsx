import React from "react";
import * as St from "./LoginHeader.style";
import { useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const navi = useNavigate();
  return (
    <St.Box
      onClick={() => {
        navi("/");
      }}
    >
      <St.Logo />
    </St.Box>
  );
};

export default LoginHeader;
