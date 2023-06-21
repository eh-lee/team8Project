import styled, { css } from "styled-components";
import vector from "../../assets/icons/common/vector.png";
import onboarding1 from "../../assets/onboarding/onboarding1.png";
import onboarding2 from "../../assets/onboarding/onboarding2.png";
import onboarding3 from "../../assets/onboarding/onboarding3.png";

type TDot = {
  dot2: number;
  dot3: number;
  dot4: number;
};

const Dot = styled.div<TDot>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: rgb(220, 220, 220);
  position: absolute;
  top: 679px;
  left: 187px;

  ${({ dot2 }) =>
    dot2 &&
    css`
      left: 203px;
    `}
  ${({ dot3 }) =>
    dot3 &&
    css`
      left: 215px;
    `}

  ${({ dot4 }) =>
    dot4 &&
    css`
      left: 199px;
    `}
`;

type TCurrDot = {
  dot2: number;
  dot3: number;
};

const CurrDot = styled.div<TCurrDot>`
  width: 16px;
  height: 8px;
  border-radius: 4px;
  background-color: #3a3a59;
  position: absolute;
  top: 679px;
  left: 183px;

  ${({ dot2 }) =>
    dot2 &&
    css`
      left: 197px;
    `}
  ${({ dot3 }) =>
    dot3 &&
    css`
      left: 211px;
    `}
`;

const DescP = styled.p`
  font-size: 28px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const DescSubP = styled.p`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  /* color: #8a8a8a; */
  color: rgb(100, 100, 100);
`;

type TAuthBtn = {
  borderColor: string;
};

const AuthBtn = styled.button<TAuthBtn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  /* background-color: #ef3f61; */
  background-color: #3a3a59;
  color: white;
  border-radius: 10px;
  min-width: 342px;
  min-height: 56px;
  font-size: 16px;
  font-weight: 600;

  bottom: 3%;
  left: 29px;
  position: absolute;

  &:hover {
    border: 0.1rem solid ${(props) => props.borderColor};
    background-color: pink;
    cursor: pointer;
  }
`;

const DescSub = styled.div`
  min-width: 258px;
  min-height: 48px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
const Desc = styled.div`
  min-width: 282px;
  min-height: 38px;
  max-height: 76px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

type TContent = {
  onboarding2: number;
  onboarding3: number;
};

const Content = styled.div<TContent>`
  min-width: 340px;
  min-height: 340px;
  background-image: url(${onboarding1});

  ${({ onboarding2: isOnBoarding }) =>
    isOnBoarding &&
    css`
      background-image: url(${onboarding2});
    `};

  ${({ onboarding3: isOnBoarding }) =>
    isOnBoarding &&
    css`
      background-image: url(${onboarding3});
    `};
`;

const DescCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 112px;
  position: absolute;
  top: 15%;
  transform: translateX(8.75%);
`;

const FooRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 18px 30px 100px 0;
`;

const Cancel = styled.img`
  width: 12px;
  height: 12px;
  color: #3a3a59;

  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
  }
`;

const OnBoardingButton = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  background: rgba(242, 242, 247, 0.6);
  ${({ dir }) => {
    if (dir === "left") {
      return css`
        left: 2.5rem;
        top: 40%;
        transform: translateY(-50%);
      `;
    }

    if (dir === "right") {
      return css`
        right: 2.5rem;
        top: 40%;
        transform: translateY(-50%);
      `;
    }
  }};

  &:hover {
    background: rgb(220, 220, 220);
  }
`;

export {
  OnBoardingButton,
  AuthBtn,
  Cancel,
  Content,
  CurrDot,
  Desc,
  DescCont,
  DescP,
  DescSub,
  DescSubP,
  Dot,
  FooRight,
  onboarding1,
  onboarding2,
  onboarding3,
  vector,
  Wrap,
};
