import React, { useState, useEffect } from "react";
import { instanceWithAuth } from "../../api/axios";
import { ReactComponent as ThumbsUp } from "../../assets/icons/common/thumbs-up.svg";
import * as St from "./ProCon.style";

interface ProConProps {
  pollTitle: string;
  detailPollTitle: string;
  detailProCount: number;
  detailConCount: number;
  detailPostIdx: number;
  parentProInputValue: boolean;
  parentConInputValue: boolean;
}

const ProCon: React.FC<ProConProps> = ({
  pollTitle,
  detailPollTitle,
  detailProCount,
  detailConCount,
  detailPostIdx,
  parentProInputValue,
  parentConInputValue,
}) => {
  // const [pollType, setPollType] = useState<string>("proCon");
  const [pollClose, setPollClose] = useState<boolean>(true);

  const proConDelHandler = () => {
    setPollClose(false);
  };

  const nickname = localStorage.getItem("hoonsoo_nickname");
  const [proCount, setProCount] = useState<number>(detailProCount);
  const [conCount, setConCount] = useState<number>(detailConCount);

  const proPerc: number = Math.round((proCount / (proCount + conCount)) * 100);
  const conPerc: number = 100 - proPerc;

  const proCountWidth: number = isNaN(proPerc) ? 50 : proPerc;
  const conCountWidth: number = isNaN(conPerc) ? 50 : conPerc;

  const [proInputValue, setProInputValue] =
    useState<boolean>(parentProInputValue);
  const [conInputValue, setConInputValue] =
    useState<boolean>(parentConInputValue);

  const voteProHandler = () => {
    if (nickname) {
      if (conInputValue === true && proInputValue === false) {
        return alert("찬성/반대는 동시에 선택될 수 없습니다.");
      }

      if (conInputValue === false && proInputValue === false) {
        setProInputValue(true);
        setProCount(proCount + 1);
      }

      if (conInputValue === false && proInputValue === true) {
        setProInputValue(false);
        setProCount(proCount - 1);
      }
    } else {
      alert("로그인 후 이용해 주세요");
    }
  };

  const voteConHandler = () => {
    if (nickname) {
      if (proInputValue === true && conInputValue === false) {
        return alert("찬성/반대는 동시에 선택될 수 없습니다.");
      }

      if (proInputValue === false && conInputValue === false) {
        setConInputValue(true);
        setConCount(conCount + 1);
      }

      if (proInputValue === false && conInputValue === true) {
        setConInputValue(false);
        setConCount(conCount - 1);
      }
    } else {
      alert("로그인 후 이용해 주세요");
    }
  };

  useEffect(() => {
    const putVote = async () => {
      await instanceWithAuth.put(`/prefer/post/${detailPostIdx}`, {
        proInputValue,
        conInputValue,
      });
    };
    putVote();
  }, [detailPostIdx, proInputValue, conInputValue]);

  return pollClose ? (
    <>
      {/* <TestDiv>{a}</TestDiv> */}
      <St.ProConWrap>
        <St.ProConHeader>
          {!pollTitle ? (
            <>
              <St.ProConTitle>{detailPollTitle}</St.ProConTitle>
              <St.ProConTitle>{pollTitle}</St.ProConTitle>
            </>
          ) : (
            <>
              <St.ProConTitle>{pollTitle}</St.ProConTitle>
              <St.ProConTitle>{detailPollTitle}</St.ProConTitle>
            </>
          )}
          {pollTitle ? (
            <St.ProConIcon>
              <St.ProConDelete>
                <St.IconTrash onClick={proConDelHandler} />
              </St.ProConDelete>
            </St.ProConIcon>
          ) : null}
        </St.ProConHeader>
        <St.ProConBody>
          {pollTitle ? (
            <St.ProConColumn>
              <ThumbsUp />
              <St.ProBox>찬성 투표</St.ProBox>
            </St.ProConColumn>
          ) : (
            // onClick 걸고 state 관리
            <St.DetailProColumn
              onClick={voteProHandler}
              isVoted={proInputValue}
            >
              <ThumbsUp />
              <St.ProBox>찬성 투표</St.ProBox>
            </St.DetailProColumn>
          )}

          {pollTitle ? (
            <St.PollGraph>
              <St.ProCount width={proCountWidth}>50%</St.ProCount>
              <St.ConCount width={conCountWidth}>50%</St.ConCount>
            </St.PollGraph>
          ) : (
            <St.PollGraph>
              <St.ProCount width={proCountWidth}>
                {proCount === 0 && conCount === 0 ? "50%" : `${proCountWidth}%`}
              </St.ProCount>
              <St.ConCount width={conCountWidth}>
                {proCount === 0 && conCount === 0 ? "50%" : `${conCountWidth}%`}
              </St.ConCount>
            </St.PollGraph>
          )}

          {pollTitle ? (
            <St.ProConColumn>
              <St.ThumbsDown />
              <St.ConBox>반대 투표</St.ConBox>
            </St.ProConColumn>
          ) : (
            // onClick 걸고 state 관리
            <St.DetailConColumn
              onClick={voteConHandler}
              isVoted={conInputValue}
            >
              <St.ThumbsDown />
              <St.ConBox>반대 투표</St.ConBox>
            </St.DetailConColumn>
          )}
        </St.ProConBody>
      </St.ProConWrap>
    </>
  ) : null;
};

export default ProCon;
