/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useNavigate } from "react-router-dom";
import logoWhite from "../../assets/icons/logo/main-logo-white.png";
import {ReactComponent as SearchIcon} from "../../assets/icons/common/search.svg"
import {ReactComponent as AlarmIcon} from "../../assets/icons/common/alarm.svg"
import {ReactComponent as MypageIcon} from "../../assets/icons/common/myPage.svg"
import * as St from "./HeaderNav.style"

function HeaderNav() {
  const navi = useNavigate();

  return (
    <St.Nav>
      <St.HeaderUl>
        <St.HeaderLogo onClick={() => navi("/")} src={logoWhite} />
        <St.HeaderBox>
          <St.HeaderBoxItem>
            <SearchIcon
              onClick={() => alert("구현 중인 기능입니다.")}
            />
          </St.HeaderBoxItem>
          <St.HeaderBoxItem>
            <AlarmIcon
              onClick={() => alert("구현 중인 기능입니다.")}
            />
          </St.HeaderBoxItem>
          <St.HeaderBoxItem>
            <MypageIcon
            onClick={() => navi("/myPage")} 
            />
          </St.HeaderBoxItem>
        </St.HeaderBox>
      </St.HeaderUl>
    </St.Nav>
  );
}

export default HeaderNav;