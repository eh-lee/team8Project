import React from "react";
import * as St from "./Loading.style";
import LoadingGif from "../../assets/onboarding/loading.gif";

export const Loading: React.FC = () => {
  return (
    <>
      <St.LoadingGif src={LoadingGif} />
    </>
  );
};
