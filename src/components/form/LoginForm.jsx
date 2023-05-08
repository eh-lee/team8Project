import React, { useState } from "react";
import { instance } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import * as St from "./LoginForm.style";

const LoginForm = () => {
  const submitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/auth/login", user);
      localStorage.setItem("hoonsoo_email", user.email);
      localStorage.setItem(
        "hoonsoo_access_token",
        response.headers.authorization
      );
      localStorage.setItem("hoonsoo_nickname", response.data.nickname);
      document.cookie = `hoonsoo_isNewbie=F; path=/;`;
      navi("/");
    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };

  const navi = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <St.Wrap onSubmit={submitButtonHandler}>
      <St.Column>
        <St.AuthInput
          type="email"
          value={user.email}
          name="email"
          onChange={changeInputHandler}
          placeholder="이메일을 입력해 주세요."
        />
        <St.AuthInput
          type="password"
          value={user.password}
          name="password"
          onChange={changeInputHandler}
          placeholder="비밀번호를 입력해 주세요."
        />
      </St.Column>

      <St.Cont>
        <St.AuthButton text={"로그인"} />
        <St.Row>
          <St.SocialLogin type="Naver" aria-label="네이버로그인" />
          <St.SocialLogin type="Kakao" aria-label="카카오로그인" />
          <St.SocialLogin type="Google" aria-label="구글로그인" />
        </St.Row>
      </St.Cont>
    </St.Wrap>
  );
};

export default LoginForm;
