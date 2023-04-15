import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PostCard from "./HotPostCard";
import { instance } from "../../api/axios";
import { BsChevronLeft } from "react-icons/bs";

const PostCardSlider = () => {
  // hotPostCard 불러오기
  useEffect(() => {
    const getHotPost = async () => {
      const response = await instance.get("/postCards/hotPostCard");
      setPostCards(response.data.postCards);
    };
    getHotPost();
  }, []);

  // hotPostCard 저장
  const [postCards, setPostCards] = useState([]);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "19.375rem",
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
    // setAnimate(() => ({ on: true, value: "310px" }));
    setAnimate(() => ({ on: true, value: "19.375rem" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "19.375rem" }));
      setIndex((pre) => {
        if (pre === -4) return (pre = 0);
        else return pre - 1;
      });
    }, 350);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-19.375rem" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-19.375rem" }));
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
          <PostCard
            key={el?.postIdx}
            postIdx={el?.postIdx}
            mainCategory={el?.maincategory}
            title={el?.title}
            content={el?.desc}
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
  /* width: 400px; */
  width: 25rem;
  /* height: 160px; */
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow-x: hidden;
`;

const PostCards = styled.div`
  /* height: 160px; */
  /* height: 10rem; */
  display: flex;

  /* gap: 30px; */
  gap: 1.875rem;

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
  // 내부 컨텐츠들은 안 움직였으면 좋겠는데....
  transform: scale(1.05);
  }; */
`;

// 버튼
const Button = ({ dir, onClick }) => {
  return (
    <Stbutton dir={dir} onClick={onClick}>
      <BsChevronLeft />
    </Stbutton>
  );
};

const Stbutton = styled.button`
  background-color: transparent;
  /* width: 40px;
  height: 40px; */
  border: none;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  font-size: 1.5rem;
  color: lightgray;

  ${({ dir }) => {
    if (dir === "left") {
      return css`
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === "right") {
      return css`
        right: 1.5rem;
        top: 50%;
        transform: translateY(-50%) scaleX(-1);
      `;
    }
  }}
`;
