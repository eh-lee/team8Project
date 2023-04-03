import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../api/cookies";
import { instance } from "../../api/axios";
import KakaoLoginBtn from "../../components/login/KakaoLoginBtn";

const LogInPage = () => {
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

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/api/user/login", user);
      cookies.set("token", response.headers.authorization, { path: "/" });
      navi("/");
    } catch (e) {
      const errorMsg = e.response.data.msg;
      alert(`${errorMsg}`);
    }
  };

  return (
    <>
      <Container onSubmit={submitButtonHandler}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div>
            <div css={{ marginBottom: "5px" }}>이메일</div>
            <input
              type="text"
              value={user.email}
              name="email"
              onChange={changeInputHandler}
              placeholder="이메일을 입력해 주세요."
            />
          </div>

          <div>
            <div css={{ marginTop: "10px", marginBottom: "5px" }}>비밀번호</div>
            <input
              type="password"
              value={user.password}
              name="password"
              onChange={changeInputHandler}
              placeholder="비밀번호를 입력해 주세요."
            />
          </div>
        </div>
        <button text={"로그인"} />
        <LoginContainer>
          <StyledLink to="/signup">회원가입 하러 가기</StyledLink>
        </LoginContainer>
      </Container>

      <KakaoLoginBtn />
    </>
  );
};

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
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const Container = styled.form`
  gap: 20px;
  height: 95vh;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
`;

export default LogInPage;
