import axios from "axios";
import React, { useState } from "react";
import { cookies } from "../../api/cookies";
import { useNavigate } from "react-router-dom";
import * as St from "./LoginForm.style";

const LoginForm = () => {
  // Handler && axios도 추후에 빼두 되구
  const submitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      // const response = await instance.post("/auth/login", user);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        user
      );
      cookies.set("email", user.email, { path: "/" });
      cookies.set("access_token", response.headers.authorization, {
        path: "/",
      });
      cookies.set("nickname", response.data.nickname, { path: "/" });
      cookies.set("isNewbie", "F", { path: "/" });
      navi("/");
    } catch (e) {
      const errorMsg = e.response.data.msg;
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
          <St.SnsLoginBtn type="Naver" />
          <St.SnsLoginBtn type="Kakao" />
          <St.SnsLoginBtn type="Google" />
        </St.Row>
      </St.Cont>
    </St.Wrap>
  );
};

export default LoginForm;
