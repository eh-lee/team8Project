import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { instance } from "../../api/axios";
const SignUpPage = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  // const [usernameMsg, setUsernameMsg] = useState("");

  const [user, setUser] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  const changeInputHandler = (e) => {
    const { value, name } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // ================= 비밀번호 일치 검사 ====================
  // user.password가 checkPw에 맞춰서 따라가면 왜 if문이 반응을 안 하지?..
  // -> useCallback ( , [user.password])도 안 됨
  const [confirmPwMsg, setConfirmPwMsg] = useState("");
  const onChangeConfirmPw = (e) => {
    e.preventDefault();
    const checkPw = e.target.value;

    if (user.password.length >= 1 && user.password !== checkPw) {
      setConfirmPwMsg("비밀번호와 비밀번호 확인의 값이 일치하지 않습니다.");
    }
    if (user.password.length >= 1 && user.password === checkPw) {
      setConfirmPwMsg("비밀번호가 일치합니다.");
    }
  };
  const submitButtonHandler = async (e) => {
    e.preventDefault();

    // =============== 인풋 공백 검사 ======================
    if (
      user.nickname === "" ||
      user.password === "" ||
      user.passwordConfrim === "" ||
      user.email === ""
    ) {
      alert("빈 칸을 작성해 주세요.");
      return;
    }
    // async (user) => {
    //   const response = await instance
    //     .post(`/api/user/signup`, user)
    //     .then((response) => {
    //       alert(response.data); // 경로 찾기
    //       // navigate("/");
    //     })
    //     .catch((error) => {
    //       alert(error.response.data.message);
    //     });
    // };
  };

  return (
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
            type="email"
            value={user.email}
            name="email"
            onChange={(e) => {
              // validUsername(e);
              changeInputHandler(e);
            }}
            placeholder="이메일을 입력해 주세요."
          />
          {/* <Validation match={usernameMsg === "올바른 형식입니다."}>
            {usernameMsg}
          </Validation> */}
        </div>
        <div>
          <div css={{ marginTop: "10px", marginBottom: "5px" }}>비밀번호</div>
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={(e) => {
              // validPassword(e);
              changeInputHandler(e);
            }}
            placeholder="비밀번호를 입력해 주세요."
          />
          {/* <Validation match={passwordMsg === "올바른 형식입니다."}>
            {passwordMsg}
          </Validation> */}
        </div>
        <div>
          <div css={{ marginTop: "10px", marginBottom: "5px" }}>
            비밀번호 확인
          </div>
          <input
            type="password"
            value={user.passwordConfirm}
            name="passwordConfirm"
            onChange={(e) => {
              onChangeConfirmPw(e);
              changeInputHandler(e);
            }}
            placeholder="비밀번호를 다시 입력해 주세요."
          />
          <Validation match={confirmPwMsg === "비밀번호가 일치합니다."}>
            {confirmPwMsg}
          </Validation>
        </div>
        <div>
          <div css={{ marginTop: "10px", marginBottom: "5px" }}>닉네임</div>
          <input
            type="text"
            value={user.nickname}
            name="nickname"
            onChange={(e) => {
              changeInputHandler(e);
              // validNickname(e);
            }}
            placeholder="닉네임을 입력해 주세요."
          />
          {/* <Validation match={nicknameMsg === "올바른 형식입니다."}>
            {nicknameMsg}
          </Validation> */}
        </div>
      </div>
      <button text={"회원가입 완료"} />
      <LoginContainer>
        <LoginP>이미 계정이 있나요?</LoginP>
        <StyledLink to="/login">로그인</StyledLink>
      </LoginContainer>
    </Container>
  );
};

const GreetingWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GreetingWrapperSub = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

const GreetingMain = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: rgb(76, 76, 198);
`;

const GreetingSub = styled.div`
  font-size: 50px;
`;

const LoginP = styled.p`
  padding-right: 5px;
`;
const LoginContainer = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const StyledLink = styled(Link)`
  color: inherit;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
  /* scale */
  animation-name: scale;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  @keyframes scale {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`;

const Validation = styled.p`
  font-size: 12px;
  color: ${({ match }) => (match ? "black" : "red")};
`;

export default SignUpPage;
