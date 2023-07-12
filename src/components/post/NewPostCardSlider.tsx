import React, { useEffect, useState } from "react";
import NewPostCard from "./NewPostCard";
import { instance } from "../../api/axios";
import * as St from "./NewPostCardSlider.style";

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
    value: "174px",
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
    setAnimate(() => ({ on: true, value: "174px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "174px" }));
      setIndex((pre) => {
        if (pre === -4) return (pre = 0);
        else return pre - 1;
      });
    }, 350);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-174px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-174px" }));
      setIndex((pre) => {
        if (pre === 4) return (pre = 0);
        else return pre + 1;
      });
    }, 350);
  };

  return (
    <St.Wrap>
      <St.Info title="실시간 훈수" more="더 보기" />
      <St.Cont>
        <St.Btn dir="left" onClick={clickLeftHandler} />
        <St.Btn dir="right" onClick={clickRightHandler} />
        <St.Cards animate={animate}>
          {genPostCardsArray(index)?.map((el) => (
            <NewPostCard
              key={el?.postIdx}
              postIdx={el?.postIdx}
              category={el?.category}
              mainCategory={el?.maincategory}
              title={el?.title}
              content={el?.desc}
            />
          ))}
        </St.Cards>
      </St.Cont>
    </St.Wrap>
  );
};

export default NewPostCardSlider;
