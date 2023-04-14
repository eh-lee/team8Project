import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import PostCard from './HotPostCard';
import { instance } from '../../api/axios';
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
import NewPostCard from './NewPostCard';


// =================== 상기매니저님 코드 ==========================


const NewPostCardSlider = () => {

    useEffect(() => {
        const getPost = async () => {
            const response = await instance.get(`/postCards?maincategory=전체&category=전체&splitNumber=5&splitPageNumber=1`)
            setNewPostCards(response.data.postCards)
        }
        getPost();
    }, []);
  
  const [newPostCards, setNewPostCards] = useState([]);
  
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState({
    on: false,
    value: "310px"
  });

  
  const genPostCardsArray = (target) => {
    if (target === 4) {
      return [3, target, 0].map((el) => newPostCards?.at(el));
    }
    if (target === -4) {
      return [0, target, -3].map((el) => newPostCards?.at(el));
    }
    return [target - 1, target, target + 1].map((el) => newPostCards?.at(el));
  };
  
  
  const clickLeftHandler = () => {
    setAnimate(() => ({ on: true, value: "310px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "310px" }));
      setIndex((pre) => {
        if (pre === -4) return (pre = 0);
        else return pre - 1;
      });
    }, 350);
  };

  const clickRightHandler = () => {
    setAnimate(() => ({ on: true, value: "-310px" }));
    setTimeout(() => {
      setAnimate(() => ({ on: false, value: "-310px" }));
      setIndex((pre) => {
        if (pre === 4) return (pre = 0);
        else return pre + 1;
      });
    }, 400);
  };

  return (
    // <div>test</div>
      <SliderContainer>
        <Button dir="left" onClick={clickLeftHandler} />
        <Button dir="right" onClick={clickRightHandler} />
        <PostCards animate={animate}>
          {/* {
            genPostCardsArray(index)?.map((el) => (
              // <div>Test{index}</div>
              <PostCard
                key={el?.postIdx}
                postCardIdx={el?.postIdx}
                mainCategory={el?.maincategory}
                title={el?.title}
                content={el?.desc}
                viewCount={el?.postViewCount}
                commentCount={el?.commentCount}
              />
            ))
          } */}
          {
            genPostCardsArray(index)?.map((el) => (
                <NewPostCard
                    key={el?.postIdx}
                    mainCategory={el?.maincategory}
                    title={el?.title}
                    content={el?.desc}
                />
            ))
          }
        </PostCards>
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

const PostCards = styled.div`
  /* height: 200px; */
  display: flex;
  gap: 10px;

  ${({ animate }) => {
    if (animate.on) {
      return css`
        transform: translate(${({ animate }) => animate.value});
        transition: transform 300ms ease-in-out;
      `;
    }
  }};

& :hover {
  // 내부 컨텐츠들은 안 움직였으면 좋겠는데....
  transform: scale(1.05);
  };
`;


// 버튼
const Button = ({ children, dir, onClick }) => {
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
