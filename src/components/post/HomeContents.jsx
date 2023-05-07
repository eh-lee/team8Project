import React from "react";
import LiveBattleCard from "../chat/LiveBattleCard";
import HotPostCardSlider from "./HotPostCardSlider";
import NewPostCardSlider from "./NewPostCardSlider";
import * as St from "./HomeContents.style";

const HomeContents = () => {
  return (
    <St.XXXPostCardSliders>
      {/* <li> */}
      <HotPostCardSlider />
      {/* </li> */}
      {/* <li> */}
      <LiveBattleCard />
      {/* </li> */}
      {/* <li> */}
      <NewPostCardSlider />
      {/* </li> */}
    </St.XXXPostCardSliders>
  );
};

export default HomeContents;
