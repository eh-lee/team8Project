import React, { useEffect, useState } from "react";
import HotPostCard, { HotPostCardProps } from "./HotPostCard";
import { instance } from "../../api/axios";
import * as St from "./HotPostCardSlider.style";

interface HotPostCardSliderProps {}

const HotPostCardSlider: React.FC<HotPostCardSliderProps> = () => {
  useEffect(() => {
    const getHotPost = async () => {
      const response = await instance.get("/postCards/hotPostCard");
      setPostCards(response.data.postCards);
    };
    getHotPost();
  }, []);

  const [postCards, setPostCards] = useState<HotPostCardProps[]>([]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "348px",
  });

  const genPostCardsArray = (target: number) => {
    if (target === 3) {
      return [1, 2, target, 4, 0].map((el) => postCards?.[el]);
    }
    if (target === 4) {
      return [2, 3, target, 0, 1].map((el) => postCards?.[el]);
    }
    if (target === -4) {
      return [-1, 0, target, -3, -2].map((el) => postCards?.[el]);
    }
    return [target - 2, target - 1, target, target + 1, target + 2].map(
      (el) => postCards?.[el]
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
    <St.Wrap>
      <St.InfoCont colored="HOT" title=" 훈수" />
      <St.Slider>
        <St.Btn dir="left" onClick={clickLeftHandler} />
        <St.Btn dir="right" onClick={clickRightHandler} />
        <St.Cards animate={animate}>
          {genPostCardsArray(index)?.map((el) => (
            <HotPostCard
              key={el?.postIdx}
              postIdx={el?.postIdx}
              mainCategory={el?.mainCategory}
              category={el?.category}
              title={el?.title}
              content={el?.content}
              likesCount={el?.likesCount}
              viewCount={el?.viewCount}
              commentCount={el?.commentCount}
              isImg={el?.isImg}
            />
          ))}
        </St.Cards>
      </St.Slider>
    </St.Wrap>
  );
};

export default HotPostCardSlider;
