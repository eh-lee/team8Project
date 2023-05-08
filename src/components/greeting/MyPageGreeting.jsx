import React from "react";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=72.png";
import level2 from "../../assets/icons/userLevel/level icon=하수, size=72.png";
import * as St from "./MyPageGreeting.style";

const MyPageGreeting = () => {
  const email = localStorage.getItem("hoonsoo_email");
  const nickname = localStorage.getItem("hoonsoo_nickname");

  const currExp = 10;
  const goalExp = 100;
  const exp = (currExp / goalExp) * 100;

  return (
    <St.Wrap>
      <St.Between>
        <St.Column>
          <St.ImgBox>
            <St.LevelImg src={level1} alt="현재 유저 레벨" />
          </St.ImgBox>
          <St.UserInfoCont>
            <St.Nickname>{nickname}</St.Nickname>
            <St.Level>훈수 초보</St.Level>
            <St.Email>{email}</St.Email>
          </St.UserInfoCont>
        </St.Column>
      </St.Between>
      <St.SubWrap>
        <St.Row>
          <St.Text>
            <St.Cont>
              <St.LvImgBox>
                <St.Img src={level2} alt="다음 유저 레벨" />
              </St.LvImgBox>
              <St.Text1>훈수 하수</St.Text1>
              <St.Text2>까지 앞으로</St.Text2>
            </St.Cont>
            <St.ExpBarBG>
              <St.ExpBar exp={exp} />
            </St.ExpBarBG>
          </St.Text>
          <St.Baseline>
            <St.LvPoint1>{currExp}</St.LvPoint1>
            <St.LvPoint2>/{goalExp}</St.LvPoint2>
          </St.Baseline>
        </St.Row>
      </St.SubWrap>
    </St.Wrap>
  );
};

export default MyPageGreeting;
