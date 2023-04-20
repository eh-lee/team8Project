import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../api/cookies";
import { instance } from "../../api/axios";
import KakaoLoginBtn from "../../components/login/KakaoLoginBtn";
import AuthButton from "../../components/elem/AuthButton";
import AuthInput from "../../components/elem/AuthInput";
import MobileLayout from "../../layout/MobileLayout";
import TrueGuard from "../../components/hook/guard/TrueGuard";
import NaverLoginBtn from "../../components/login/NaverLoginBtn";
import GoogleLoginBtn from "../../components/login/GoogleLoginBtn";

const LogInPage = () => {
  TrueGuard();

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/user/login", user);
      cookies.set("access_token", response.headers.authorization, {
        path: "/",
      });
      // cookies.set("refresh_token", response.headers., {
      //   path: "/",
      // });
      cookies.set("nickname", response.data.nickname, { path: "/" });
      cookies.set("refresh_token", response.data.refreshtoken, { path: "/" });
      console.log("일반 로그인 res------>", response);
      console.log("일반 로그인 res------>", response);
      console.log("일반 로그인 rfrsh------>", response.headers["RefreshToken"]);
      console.log("일반 로그인 rfrsh------>", response.headers["refreshtoken"]);
      console.log("일반 로그인 rfrsh------>", response.headers.refreshtoken);
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
    <MobileLayout>
      <FooLogo>훈수</FooLogo>
      <Container onSubmit={submitButtonHandler}>
        <InputColumn>
          <AuthInput
            type="email"
            value={user.email}
            name="email"
            onChange={changeInputHandler}
            placeholder="이메일을 입력해 주세요."
          />
          <AuthInput
            type="password"
            value={user.password}
            name="password"
            onChange={changeInputHandler}
            placeholder="비밀번호를 입력해 주세요."
          />
        </InputColumn>

        <Column>
          <AuthButton text={"로그인"} />
          <Row>
            <NaverLoginBtn />
            <KakaoLoginBtn />
            <GoogleLoginBtn />
          </Row>
        </Column>

        <LoginContainer>
          <NeedSignUp>계정이 없으신가요?</NeedSignUp>
          <StyledLink to="/signup">회원가입</StyledLink>
        </LoginContainer>
      </Container>
    </MobileLayout>
  );
};

const NeedSignUp = styled.div`
  color: rgb(180, 180, 180);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5vw;
`;
const FooLogo = styled.div`
  margin: 20vh 0 7.5vh 0;
  align-items: center;
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

const GreetingWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const GreetingWrapperSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  /* sliding */
  animation-name: slide-in-down;
  animation-duration: 1.5s;
  animation-fill-mode: both;
  @keyframes slide-in-down {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const LoginContainer = styled.div`
  margin-top: 27.5vh;
  gap: 0.25rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const Container = styled.form`
  gap: 1rem;
  /* height: 100vh; */
  /* min-width: 200px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5vh;
`;

const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
`;

export default LogInPage;
