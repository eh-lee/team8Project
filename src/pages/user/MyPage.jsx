import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isLoginActions } from "../../app/modules/authSlice";
import Footer from "../../components/footer/Footer";
import MobileLayout from "../../layout/MobileLayout";

const MyPage = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.auth.isLogin);

  const logout = () => {
    dispatch(isLoginActions.logout());
    alert("로그아웃 되었습니다.");
    navi("/");
  };

  return (
    <MobileLayout>
      <div>My page</div>
      <div>
        Scrolling Issue could be solved with set: "min-height:
        calc(100vh-00vh)?"
      </div>
      <div>
        <>
          {isLogin ? (
            <p type="button" style={{ cursor: "pointer" }} onClick={logout}>
              로그아웃
            </p>
          ) : (
            <p
              type="button"
              style={{ cursor: "pointer" }}
              onClick={() => navi("/login")}
            >
              로그인
            </p>
          )}
        </>
      </div>
      <Footer />
    </MobileLayout>
  );
};

export default MyPage;
