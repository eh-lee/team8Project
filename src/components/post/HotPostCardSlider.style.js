import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import sliderBtnLeft from "../../assets/icons/common/sliderBtnLeft.png";

const Wrap = styled.li`
margin-top: 16px;
`;

const InfoCont = ({ colored, title, more, on }) => {
  const nav = useNavigate();
  return (
    <Info>
      <Title>
        <span className="colored">{colored}</span>
        {title}
      </Title>
      <More
        onClick={() => {
          if (on !== "on") {
            nav("/board");
          } else {
            nav("/battle");
          }
        }}
      >
        {more}
      </More>
    </Info>
  );
};


const Info = styled.div`
    width: 350px;
    height: 26px;
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

const Title = styled.h1`
    font-weight: 600;
    font-size: 20px;
    color: #2d2d2d;
    span.colored {
      color: #ef3f61;
    }
  `;

const More = styled.span`
    color: #ef3f61;
    font-size: 0.8rem;
    cursor: pointer;
  `;

const Slider = styled.div`
    width: 400px;
    height: 160px;  
    display: flex;
    align-items: center;
    justify-content: center;  
    position: relative;
    overflow-x: hidden;
  `;

const Cards = styled.div`
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
  `;

// 버튼
const Btn = ({ dir, onClick }) => {
  return (
    <StButton dir={dir} onClick={onClick}>
      <ButtonImg src={sliderBtnLeft} alt="이동" />
    </StButton>
  );
};

const StButton = styled.button`
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

export { Wrap, InfoCont, Slider, Btn, Cards }