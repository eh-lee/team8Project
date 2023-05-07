/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import logoWhite from "../../assets/icons/logo/main-logo-white.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/common/search.svg";
import { ReactComponent as AlarmIcon } from "../../assets/icons/common/alarm.svg";
import { ReactComponent as MypageIcon } from "../../assets/icons/common/myPage.svg";
import * as St from "./HeaderNav.style";

function HeaderNav() {
  const navi = useNavigate();

  return (
    <St.Nav>
      <St.HeaderUl>
        <li>
          <St.HeaderLogo
            onClick={() => navi("/")}
            src={logoWhite}
            alt="훈수 로고"
          />
        </li>
        <li>
          <St.HeaderBox>
            <St.HeaderBoxItem>
              <SearchIcon onClick={() => navi("/search")} />
            </St.HeaderBoxItem>
            <St.HeaderBoxItem>
              <AlarmIcon onClick={() => alert("현재 점검 중인 기능입니다.")} />
            </St.HeaderBoxItem>
            <St.HeaderBoxItem>
              <MypageIcon onClick={() => navi("/myPage")} />
            </St.HeaderBoxItem>
          </St.HeaderBox>
        </li>
      </St.HeaderUl>
    </St.Nav>
  );
}

export default HeaderNav;
