import React from "react";
import LiveBattleCard from "../chat/LiveBattleCard";
import HotPostCardSlider from "./HotPostCardSlider";
import NewPostCardSlider from "./NewPostCardSlider";
import * as St from "./HomeContents.style"

const HomeContents = () => {
  return (
    <St.XXXPostCardSliders>
      <HotPostCardSlider />
      <LiveBattleCard />
      <NewPostCardSlider />
    </St.XXXPostCardSliders>
  );
};

export default HomeContents;
