import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pollCanc } from "../../app/modules/writeSlice";
import { instanceWithAuth } from "../../api/axios";
import {ReactComponent as ThumbsUp} from "../../assets/icons/common/thumbs-up.svg"
import * as St from "./ProCon.style"

const ProCon = ({
  pollTitle,
  // write.jsx 미리보기
  detailPollTitle,
  // detail.jsx
  detailProCount,
  detailConCount,
  detailPostIdx,
  parentProInputValue,
  parentConInputValue,
}) => {
  const dispatch = useDispatch();

  const proConDelHandler = () => {
    dispatch(pollCanc());
  };


  const [proCount, setProCount] = useState(detailProCount);
  const [conCount, setConCount] = useState(detailConCount);

  const proPerc = Math.round((proCount / (proCount + conCount)) * 100);
  const conPerc = 100 - proPerc;

  const proCountWidth = isNaN(proPerc) ? 50 : proPerc;
  const conCountWidth = isNaN(conPerc) ? 50 : conPerc;

  const [proInputValue, setProInputValue] = useState(parentProInputValue);
  const [conInputValue, setConInputValue] = useState(parentConInputValue);

  const voteProHandler = () => {
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
  };

  const voteConHandler = () => {
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
  };

  // 유즈 이펙트 안 쓰면 렌더링 문제는 상관없는데 put할 때 payload가 한 템포 늦게 된다
  // 그래서 변화를 감지한 다음에 해야 함 왜냐면 이건 리퀘스트 바디에 내가 페이로드를 담아야 하니까
  // 변화가 안 된 걸 담으면 안 되니까 유즈이펙트 써야 함

  useEffect(() => {
    const putVote = async () => {
      await instanceWithAuth.put(`/prefer/post/${detailPostIdx}`, {
        proInputValue,
        conInputValue,
      });
    };
    putVote();
  }, [proInputValue, conInputValue]);

  return (
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
          <St.DetailProColumn onClick={voteProHandler} isVoted={proInputValue}>
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

          <St.DetailConColumn onClick={voteConHandler} isVoted={conInputValue}>
            <St.ThumbsDown />
            <St.ConBox>반대 투표</St.ConBox>
          </St.DetailConColumn>
        )}
      </St.ProConBody>
    </St.ProConWrap>
  );
};

export default ProCon;