import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AuthInput from "../../components/elem/AuthInput";
import AuthButton from "../../components/elem/AuthButton";
import MobileLayout from "../../layout/MobileLayout";
import { instance } from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navi = useNavigate();
  useEffect(() => {
    document.title = "훈수 - 회원가입";
  }, []);

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

  const validLengthHandler = (e) => {
    if (e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, 6);
    }
  };

  // ================ 비밀번호 유효성 검사 ===================
  const [passwordMsg, setPasswordMsg] = useState("");
  const validPassword = (e) => {
    const password = e.target.value;
    const isValidPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(password);
    if (isValidPassword) {
      setPasswordMsg("올바른 형식입니다.");
    } else {
      setPasswordMsg(
        "비밀번호는 6~12글자, 알파벳과 숫자를 최소 하나씩 입력해야 합니다."
      );
    }
  };

  //================== 이메일 유효성 검사 ===================
  const [emailMsg, setEmailMsg] = useState("");
  const validEmail = (e) => {
    const email = e.target.value;
    const isValidEmail =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (isValidEmail) {
      setEmailMsg("올바른 형식입니다.");
    } else {
      setEmailMsg("이메일 형식에 맞지 않습니다.");
    }
  };

  //================== 닉네임 유효성 검사 ===================
  const [nicknameMsg, setNicknameMsg] = useState("");
  const validNickname = (e) => {
    const nickname = e.target.value;
    const isValidNickname = /^[가-힣a-zA-Z0-9]{2,6}$/.test(nickname);
    if (isValidNickname) {
      setNicknameMsg("올바른 형식입니다.");
    } else {
      setNicknameMsg("닉네임은 2~6글자, 한글, 알파벳, 숫자만 입력 가능합니다");
    }
  };

  // ================= 비밀번호 일치 검사 ====================
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
    try {
      await instance.post("/user/signup", user);
      alert(`${user.nickname} 님 회원가입에 성공하였습니다.`);
      navi("/login");
    } catch (e) {
      const errorMsg = e.response.data.message;
      alert(`${errorMsg}`);
    }
  };

  return (
    <>
      <MobileLayout>
        <Container onSubmit={submitButtonHandler}>
          <div>
            <div>
              <div>이메일</div>
              <AuthInput
                type="email"
                value={user.email}
                name="email"
                onChange={(e) => {
                  validEmail(e);
                  changeInputHandler(e);
                }}
                placeholder="이메일을 입력해 주세요."
              />
              <Validation match={emailMsg === "올바른 형식입니다."}>
                {emailMsg}
              </Validation>
            </div>

            <div>
              <Margin>비밀번호</Margin>
              <AuthInput
                type="password"
                value={user.password}
                name="password"
                onChange={(e) => {
                  validPassword(e);
                  changeInputHandler(e);
                }}
                placeholder="비밀번호를 입력해 주세요."
              />
              <Validation match={passwordMsg === "올바른 형식입니다."}>
                {passwordMsg}
              </Validation>
            </div>
            <div>
              <Margin>비밀번호 확인</Margin>
              <AuthInput
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
              <Margin>닉네임</Margin>
              <AuthInput
                type="text"
                value={user.nickname}
                name="nickname"
                onInput={validLengthHandler}
                onChange={(e) => {
                  changeInputHandler(e);
                  validNickname(e);
                }}
                placeholder="닉네임을 입력해 주세요."
              />
              <Validation match={nicknameMsg === "올바른 형식입니다."}>
                {nicknameMsg}
              </Validation>
            </div>
          </div>
          <MarginTop>
            <AuthButton text={"회원가입 완료"} />
            <LoginContainer>
              <LoginP>이미 계정이 있나요?</LoginP>
              <StyledLink to="/login">로그인</StyledLink>
            </LoginContainer>
          </MarginTop>
        </Container>
      </MobileLayout>
    </>
  );
};

const MarginTop = styled.div`
  margin-top: 1.5rem;
`;
const Margin = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;
const LoginP = styled.p`
  padding-right: 5px;
`;
const LoginContainer = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled.form`
  gap: 1rem;
  height: 100vh;
  min-width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const Validation = styled.p`
  font-size: 0.6rem;
  color: ${({ match }) => (match ? "black" : "red")};
`;

export default SignUpPage;
