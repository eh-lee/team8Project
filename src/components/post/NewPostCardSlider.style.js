import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import sliderBtnLeft from "../../assets/icons/common/sliderBtnLeft.png";

const Wrap = styled.li``;

const Info = ({ colored, title, more, on }) => {
  const nav = useNavigate();
  return (
    <InfoWrap>
      <InfoTitle>
        <span className="colored">{colored}</span>
        {title}
      </InfoTitle>
      <InfoMore
        onClick={() => {
          if (on !== "on") {
            nav("/board");
          } else {
            alert('구현중인 기능입니다.')
            // nav("/battle");
          }
        }}
      >
        {more}
      </InfoMore>
    </InfoWrap>
  );
};

const InfoWrap = styled.div`
  width: 350px;
  height: 26px;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoTitle = styled.h1`
  /* border: 1px solid red; */
  font-weight: 600;
  font-size: 20px;
  color: #2d2d2d;

  /* colored에 스타일주기 */
  span.colored {
    color: #ef3f61;
  }
`;

const InfoMore = styled.span`
  /* border: 1px solid blue; */
  color: #ef3f61;
  font-size: 0.8rem;
  cursor: pointer;
`;

const Cont = styled.div`
  /* border: 1px solid green; */
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
        transition: transform 350ms ease-in-out;
      `;
    }
  }};
`;

const Btn = ({ dir, onClick }) => {
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

export { Wrap, Info, Cont, Btn, Cards }