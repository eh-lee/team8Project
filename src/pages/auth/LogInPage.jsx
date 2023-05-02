import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../api/cookies";
import { instance } from "../../api/axios";
import AuthButton from "../../components/elem/AuthButton";
import AuthInput from "../../components/elem/AuthInput";
import MobileLayout from "../../layout/MobileLayout";
import TrueGuard from "../../components/hook/guard/TrueGuard";
import { Helmet } from "react-helmet";
import axios from "axios";
import logo from "../../assets/icons/logo/loginlogo.png";
import SnsLoginBtn from "../../components/login/SnsLoginBtn";

const LogInPage = () => {
  TrueGuard();

  // 밸리데이션 걸기

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
    <>
      <Helmet>
        <title>훈수 — 로그인</title>
      </Helmet>
      <MobileLayout>
        <StLogoWrap
          onClick={() => {
            navi("/");
          }}
        >
          <StLoginLogo />
        </StLogoWrap>
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
              <SnsLoginBtn type="Naver" />
              <SnsLoginBtn type="Kakao" />
              <SnsLoginBtn type="Google" />
            </Row>
          </Column>

          <LoginContainer>
            <NeedSignUp>계정이 없으신가요?</NeedSignUp>
            <StyledLink to="/signup">회원가입</StyledLink>
          </LoginContainer>
        </Container>
      </MobileLayout>
    </>
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
const StLogoWrap = styled.div`
  margin: 20vh 0 7.5vh 0;
  display: flex;
  flex-direction: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const StLoginLogo = styled.div`
  background-size: cover;
  background-image: url(${logo});
  width: 80px;
  height: 57px;
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
