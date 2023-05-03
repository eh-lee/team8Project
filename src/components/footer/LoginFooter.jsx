import React from "react";
import * as St from "./LoginFooter.style";

const LoginFooter = () => {
  return (
    <St.Cont>
      <St.Question>계정이 없으신가요?</St.Question>
      <St.SignUp to="/signup">회원가입</St.SignUp>
    </St.Cont>
  );
};

export default LoginFooter;
