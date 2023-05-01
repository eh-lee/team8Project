import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import HotPostCard from "./HotPostCard";
import sliderBtnLeft from "../../assets/icons/common/sliderBtnLeft.png"

import axios from "axios";
import { instance } from "../../api/axios";

const PostCardSlider = () => {
  // hotPostCard 불러오기
  useEffect(() => {
    const getHotPost = async () => {
      const response = await instance.get("/postCards/hotPostCard");
      // const response = await axios.get(
      //   `${process.env.REACT_APP_SERVER_URL}/postCards/hotPostCard`
      // );
      setPostCards(response.data.postCards);
    };
    getHotPost();
  }, []);

  // hotPostCard 저장
  const [postCards, setPostCards] = useState([]);

  console.log("*****postCards****", postCards);

  // 인덱스, 애니메이션 상태 저장
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "348px",
  });

  const genPostCardsArray = (target) => {
    if (target === 3) {
      return [1, 2, target, 4, 0].map((el) => postCards?.at(el));
    }
    if (target === 4) {
      return [2, 3, target, 0, 1].map((el) => postCards?.at(el));
    }
    if (target === -4) {
      return [-1, 0, target, -3, -2].map((el) => postCards?.at(el));
    }
    return [target - 2, target - 1, target, target + 1, target + 2].map((el) =>
      postCards?.at(el)
    );
    // 예) target idx = 0 => [postCards[4], postCards[0], postCards[1]]
  };

  const clickLeftHandler = () => {
    setAnimate(() => ({ on: true, value: "348px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "348px" }));
      setIndex((pre) => {
        if (pre === -4) return (pre = 0);
        else return pre - 1;
      });
    }, 350);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-348px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-348px" }));
      setIndex((pre) => {
        if (pre === 4) return (pre = 0);
        else return pre + 1;
      });
    }, 350);
  };

  return (
    <SliderContainer>
      <Button dir="left" onClick={clickLeftHandler} />
      <Button dir="right" onClick={clickRightHandler} />
      <PostCards animate={animate}>
        {genPostCardsArray(index)?.map((el) => (
          <HotPostCard
            key={el?.postIdx}
            postIdx={el?.postIdx}
            mainCategory={el?.maincategory}
            category={el?.category}
            title={el?.title}
            content={el?.desc}
            likesCount={el?.likesCount}
            viewCount={el?.postViewCount}
            commentCount={el?.commentCount}
          />
        ))}
      </PostCards>
    </SliderContainer>
  );
};

export default PostCardSlider;

const SliderContainer = styled.div`
  /* border: 1px solid green; */
  width: 400px;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow-x: hidden;
`;

const PostCards = styled.div`
  display: flex;

  gap: 8px;

  ${({ animate }) => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
        // 350 > 애니메이션이 시작되기 전 대기 350
        // ease-in-out > 처음과 끝은 느리게 중간은 빠르게 변화
        transition: transform 350ms ease-in-out;
      `;
    }
  }};

  /* & :hover {
    transform: scale(1.05);
    // 내부 컨텐츠들은 안 움직였으면 좋겠는데....
  }; */
`;

// 버튼
const Button = ({ dir, onClick }) => {
  return (
    <Stbutton dir={dir} onClick={onClick}>
      <ButtonImg src={sliderBtnLeft} />
    </Stbutton>
  );
};

const Stbutton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  background: rgba(46, 46, 71, 0.4);

  ${({ dir }) => {
    if (dir === "left") {
      return css`
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === "right") {
      return css`
        right: 25px;
        top: 50%;
        transform: translateY(-50%) scaleX(-1);
      `;
    }
  }}
`;

const ButtonImg = styled.img`
  width: 5px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;