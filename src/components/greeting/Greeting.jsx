import React from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../api/cookies";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=72.png";
import * as St from "./GreetingLv.style"

const FalseGreeting = () => {
  const navi = useNavigate();
  const nickname = cookies.get("nickname");
  const isLogin = cookies.get("access_token") ? true : false;

  return (
    <St.GreetingCont>
      <St.GreetingText1>
        {
          <>
            <St.Row>
              <St.GreetingNickname onClick={() => navi(`/${isLogin? "mypage" : "login"}`)}>
                {isLogin? nickname : "로그인"}
              </St.GreetingNickname>
              <St.Greeting1>{isLogin? "님의" : "후"}</St.Greeting1>
            </St.Row>
            <St.Greeting1>{isLogin? "훈수 능력치는?" : "이용 가능합니다."}</St.Greeting1>
          </>
        }
      </St.GreetingText1>

      <St.Column>
        <St.GreetingLevelImgCont>
          <St.GreetingLevelImg src={level1} />
        </St.GreetingLevelImgCont>
        <St.GreetingLevelName>
          {isLogin ? "훈수 초보" : "훈수 초보"}
        </St.GreetingLevelName>
      </St.Column>
    </St.GreetingCont>
  );
};

export default FalseGreeting;