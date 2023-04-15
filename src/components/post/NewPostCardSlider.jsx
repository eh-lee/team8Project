import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { instance } from "../../api/axios";
import { BsChevronLeft } from "react-icons/bs";
import NewPostCard from "./NewPostCard";

const NewPostCardSlider = () => {
  // newPostCard 불러오기
  useEffect(() => {
    const getPost = async () => {
      const response = await instance.get(
        `/postCards?maincategory=전체&category=전체&splitNumber=5&splitPageNumber=1`
      );
      setNewPostCards(response.data.postCards);
    };
    getPost();
  }, []);

  // NewPostCard 저장
  const [newPostCards, setNewPostCards] = useState([]);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "19.375rem",
  });

  const genPostCardsArray = (target) => {
    if (target === 3) {
      return [1, 2, target, 4, 0].map((el) => newPostCards?.at(el));
    }
    if (target === 4) {
      return [2, 3, target, 0, 1].map((el) => newPostCards?.at(el));
    }
    if (target === -4) {
      return [-1, 0, target, -3, -2].map((el) => newPostCards?.at(el));
    }
    return [target - 2, target - 1, target, target + 1, target + 2].map((el) =>
      newPostCards?.at(el)
    );
  };

  const clickLeftHandler = () => {
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
      <NewPostCards animate={animate}>
        {genPostCardsArray(index)?.map((el) => (
          <NewPostCard
            key={el?.postIdx}
            postIdx={el?.postIdx}
            mainCategory={el?.maincategory}
            title={el?.title}
            content={el?.desc}
          />
        ))}
      </NewPostCards>
    </SliderContainer>
  );
};

export default NewPostCardSlider;

const SliderContainer = styled.div`
  /* border: 1px solid green; */
  /* width: 400px; */
  width: 25rem;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow-x: hidden;
`;

const NewPostCards = styled.div`
  display: flex;

  gap: 1rem;

  ${({ animate }) => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
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
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
      `;
    }

    if (dir === "right") {
      return css`
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%) scaleX(-1);
      `;
    }
  }}
`;
