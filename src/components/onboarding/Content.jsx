import React from "react";
import styled, { css } from "styled-components";
import onboarding1 from "../../assets/onboarding/onboarding1.png";
import onboarding2 from "../../assets/onboarding/onboarding2.png";
import onboarding3 from "../../assets/onboarding/onboarding3.png";

const Content = () => {
  return <ContentBox />;
};

const ContentBox = styled.div`
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

export default Content;
