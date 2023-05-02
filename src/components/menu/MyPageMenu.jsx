import React, { useState } from "react";
import myPageMenu from "../../assets/icons/common/myPageMenu.png";
import ModalPortal from "../../components/modal/ModalPortal";
import LogoutModal from "../../components/modal/LogoutModal";
import SignOutModal from "../../components/modal/SignOutModal";
import { cookies } from "../../api/cookies";
import { useNavigate } from "react-router-dom";
import * as St from "./MyPageMenu.style";

const MyPageMenu = () => {
  const navi = useNavigate();
  const nickname = cookies.get("nickname");

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const LogoutModalOpenHandler = () => {
    setIsLogoutModalOpen(true);
  };
  const LogoutModalCloseHandler = () => {
    setIsLogoutModalOpen(false);
  };

  const SignOutModalOpenHandler = () => {
    setIsSignOutModalOpen(true);
  };
  const SignOutModalCloseHandler = () => {
    setIsSignOutModalOpen(false);
  };

  return (
    <>
      <ModalPortal>
        <St.Cont>
          {isLogoutModalOpen && (
            <LogoutModal
              open={isLogoutModalOpen}
              close={LogoutModalCloseHandler}
            />
          )}
        </St.Cont>
      </ModalPortal>
      <ModalPortal>
        <St.Cont>
          {isSignOutModalOpen && (
            <SignOutModal
              open={isSignOutModalOpen}
              close={SignOutModalCloseHandler}
            />
          )}
        </St.Cont>
      </ModalPortal>

      <St.Wrap>
        <St.Menu>
          <St.Sub>서비스 정보</St.Sub>
          <St.Icon src={myPageMenu} />
        </St.Menu>
        {nickname ? (
          <>
            <St.Menu onClick={LogoutModalOpenHandler}>
              <St.Sub isLogout>로그아웃</St.Sub>
              <St.Icon src={myPageMenu} />
            </St.Menu>
          </>
        ) : (
          <>
            <St.Menu
              onClick={() => {
                navi("/login");
              }}
            >
              <St.Sub>로그인</St.Sub>
              <St.Icon src={myPageMenu} />
            </St.Menu>
          </>
        )}

        <St.Menu onClick={SignOutModalOpenHandler}>
          <St.Sub>회원 탈퇴</St.Sub>
          <St.Icon src={myPageMenu} />
        </St.Menu>
      </St.Wrap>
    </>
  );
};

export default MyPageMenu;
