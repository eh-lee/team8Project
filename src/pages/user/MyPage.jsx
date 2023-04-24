import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../api/cookies";
// import { isLoginActions } from "../../app/modules/authSlice";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MobileLayout from "../../layout/MobileLayout";
import { Helmet } from "react-helmet";
import AuthButton from "../../components/elem/AuthButton";

const MyPage = () => {
  const navi = useNavigate();
  // const dispatch = useDispatch();

  // const isLogin = useSelector((state) => state.auth.isLogin);
  const isLogin = cookies.get("access_token") ? true : false;

  // console.log("isLogin??", isLogin);
  // *=========== 04/11 11:56 bug 발견 ============*
  // 렌더링 문제 있음. reloading해 줘야 함.
  // *=========== 04/11 11:56 bug 발견 ============*

  const logout = () => {
    // dispatch(isLoginActions.logout());

    // 왜 안 되나 체크 4/21 17:44
    // [Refactor] 인터셉터로 처리하게
    cookies.remove("access_token");
    cookies.remove("refresh_token");

    cookies.remove("nickname");
    console.log(isLogin);
    alert("로그아웃 되었습니다.");
    navi("/");
    console.log(isLogin);
  };

  return (
    <>
      <Helmet>
        <title>훈수 — 마이페이지</title>
      </Helmet>
      <MobileLayout>
        <Header />
        <PageWithHeaderAndFooterWrapper>
          <div>
            <>
              {isLogin ? (
                <MyPageWrap>
                  <AuthButton text={"로그아웃"} onClick={logout} />
                </MyPageWrap>
              ) : (
                <p
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => navi("/login")}
                >
                  먼저 로그인해 주세요.
                </p>
              )}
            </>
          </div>
        </PageWithHeaderAndFooterWrapper>
        <Footer />
      </MobileLayout>
    </>
  );
};

export default MyPage;

const MyPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
`;
const PageWithHeaderAndFooterWrapper = styled.div`
  margin: 3.5rem 0 15rem 0;
`;
