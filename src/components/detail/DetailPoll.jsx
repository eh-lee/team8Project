import React from "react";
import ProCon from "../poll/ProCon";
import * as St from "./DetailPoll.style";

const DetailPoll = ({ postIdx, detailPoll }) => {
  return (
    <St.Wrap>
      {detailPoll.pollType === "proCon" ? (
        <ProCon
          detailPostIdx={postIdx}
          parentProInputValue={detailPoll.proInputValue}
          parentConInputValue={detailPoll.conInputValue}
          detailPollTitle={detailPoll.pollTitle}
          detailProCount={detailPoll.proCount}
          detailConCount={detailPoll.conCount}
        />
      ) : null}
      {/* {pollType === select ? <> </> : null} */}
    </St.Wrap>
  );
};

export default DetailPoll;
