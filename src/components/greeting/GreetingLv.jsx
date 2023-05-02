import React from "react";
import level2 from "../../assets/icons/userLevel/level icon=하수, size=18.png";
import * as St from "./Greeting.style"

const FalseGreetingLv = () => {
  const currExp = 0;
  const goalExp = 100;
  const exp = (currExp / goalExp) * 100;

  return (
    <St.GreetingLvCont>
      <St.RowMain>
        <St.GreetingText1>
          <St.GreetingLvContSub>
            <St.GreetingLevelImgCont>
              <St.GreetingLevelImg src={level2} />
            </St.GreetingLevelImgCont>
            <St.GreetingLvText1>훈수 하수</St.GreetingLvText1>
            <St.GreetingLvText2>까지 앞으로</St.GreetingLvText2>
          </St.GreetingLvContSub>
          <St.LvExperienceBar>
            <St.ColoredExperienceBar exp={exp} />
          </St.LvExperienceBar>
        </St.GreetingText1>

        <St.Row>
          <St.GreetingLvPoint1>{currExp}</St.GreetingLvPoint1>
          <St.GreetingLvPoint2>/ {goalExp}</St.GreetingLvPoint2>
        </St.Row>
      </St.RowMain>
    </St.GreetingLvCont>
  );
};

export default FalseGreetingLv;