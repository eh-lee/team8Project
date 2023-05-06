import React from "react";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=72.png";
import level2 from "../../assets/icons/userLevel/level icon=하수, size=72.png";
import { useNavigate } from "react-router-dom";
import * as St from "./HomeGreeting.style";

const HomeGreeting = () => {
  const navi = useNavigate();
  const nickname = localStorage.getItem("hoonsoo_nickname");
  const isLogin = localStorage.getItem("hoonsoo_access_token") ? true : false;

  const currExp = 0;
  const goalExp = 100;
  const exp = (currExp / goalExp) * 100;

  return (
    <St.Wrap>
      <St.GreetingCont>
        <St.GreetingText1>
          {
            <>
              <St.Row>
                <St.GreetingNickname
                  onClick={() => navi(`/${isLogin ? "mypage" : "login"}`)}
                >
                  {isLogin ? nickname : "로그인"}
                </St.GreetingNickname>
                <St.Greeting1>{isLogin ? "님의" : "후"}</St.Greeting1>
              </St.Row>
              <St.Greeting1>
                {isLogin ? "훈수 능력치는?" : "이용 가능합니다."}
              </St.Greeting1>
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

      <St.GreetingLvCont>
        <St.Between>
          <St.GreetingText2>
            <St.GreetingLvContSub>
              <St.GreetingLevelImgCont2>
                <St.GreetingLevelImg2 src={level2} />
              </St.GreetingLevelImgCont2>
              <St.GreetingLvText1>훈수 하수</St.GreetingLvText1>
              <St.GreetingLvText2>까지 앞으로</St.GreetingLvText2>
            </St.GreetingLvContSub>
            <St.LvExperienceBar>
              <St.ColoredExperienceBar exp={exp} />
            </St.LvExperienceBar>
          </St.GreetingText2>

          <St.Baseline>
            <St.GreetingLvPoint1>{currExp}</St.GreetingLvPoint1>
            <St.GreetingLvPoint2>/ {goalExp}</St.GreetingLvPoint2>
          </St.Baseline>
        </St.Between>
      </St.GreetingLvCont>
    </St.Wrap>
  );
};

export default HomeGreeting;
