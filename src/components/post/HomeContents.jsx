import React from "react";
import styled from "styled-components";
import LiveBattleCard from "../chat/LiveBattleCard";
import HotPostCardSlider from "./HotPostCardSlider";
import NewPostCardSlider from "./NewPostCardSlider";

const HomeContents = () => {
  return (
    <XXXPostCardSliders>
      <HotPostCardSlider />
      <LiveBattleCard />
      <NewPostCardSlider />
    </XXXPostCardSliders>
  );
};

export default HomeContents;

const XXXPostCardSliders = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
