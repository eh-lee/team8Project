import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pollCanc } from "../../app/modules/writeSlice";
import { VscEdit } from "react-icons/vsc";
import { TfiThumbUp } from "react-icons/tfi";
import { TfiThumbDown } from "react-icons/tfi";
import styled from "styled-components";
import { useEffect } from "react";
import { instanceWithAuth } from "../../api/axios";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";

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

  const proConEditHandler = () => {
    alert("구현 중인 기능입니다.");
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
    <ProConWrap>
      <ProConHeader>
        {!pollTitle ? (
          <>
            <ProConTitle>{detailPollTitle}</ProConTitle>
            <ProConTitle>{pollTitle}</ProConTitle>
          </>
        ) : (
          <>
            <ProConTitle>{pollTitle}</ProConTitle>
            <ProConTitle>{detailPollTitle}</ProConTitle>
          </>
        )}

        {pollTitle ? (
          <ProConIcon>
            <ProConDelete>
              <VscEdit onClick={proConEditHandler} />
            </ProConDelete>
            <ProConEdit>
              <StIconTrash onClick={proConDelHandler} />
            </ProConEdit>
          </ProConIcon>
        ) : null}
      </ProConHeader>
      <ProConBody>
        {pollTitle ? (
          <ProConColumn>
            <TfiThumbUp size={25} />
            <ProBox>찬성 투표</ProBox>
          </ProConColumn>
        ) : (
          // onClick 걸고 state 관리
          <DetailProColumn onClick={voteProHandler} isVoted={proInputValue}>
            <TfiThumbUp size={25} />
            <ProBox>찬성 투표</ProBox>
          </DetailProColumn>
        )}

        {pollTitle ? (
          <PollGraph>
            <ProCount width={proCountWidth}>50%</ProCount>
            <ConCount width={conCountWidth}>50%</ConCount>
          </PollGraph>
        ) : (
          <PollGraph>
            <ProCount width={proCountWidth}>
              {proCount === 0 && conCount === 0 ? "50%" : `${proCountWidth}%`}
            </ProCount>
            <ConCount width={conCountWidth}>
              {proCount === 0 && conCount === 0 ? "50%" : `${conCountWidth}%`}
            </ConCount>
          </PollGraph>
        )}

        {pollTitle ? (
          <ProConColumn>
            <TfiThumbDown size={25} />
            <ConBox>반대 투표</ConBox>
          </ProConColumn>
        ) : (
          // onClick 걸고 state 관리

          <DetailConColumn onClick={voteConHandler} isVoted={conInputValue}>
            <TfiThumbDown size={25} />
            <ConBox>반대 투표</ConBox>
          </DetailConColumn>
        )}
      </ProConBody>
    </ProConWrap>
  );
};

const StIconTrash = styled(Trash)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
    path:nth-child(1) {
      stroke: #3a3a59;
    }
  }
`;

const ProConColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const DetailProColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  &:hover {
    cursor: pointer;
  }

  color: ${(props) => (props.isVoted ? "#ef3f61" : "black")};
`;

const DetailConColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  &:hover {
    cursor: pointer;
  }

  color: ${(props) => (props.isVoted ? "#42c8b7" : "black")};
`;

const ProBox = styled.p`
  /* border: 1px solid black; */
  color: #c4c4c4;
`;

const ConBox = styled.div`
  /* border: 1px solid black; */
  color: #c4c4c4;
`;

const PollGraph = styled.div`
  /* border: 1px solid violet; */
  width: 67.5%;
  display: flex;
  flex-direction: row;
  /* flex-direction: row-reverse; */
  height: 65%;
`;

const ProCount = styled.div`
  padding-left: 5px;
  text-align: start;
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.85rem;
  /* width: 50%; */
  width: ${(props) => props.width}%;
  min-width: 10%;
  border-radius: 100px 0 0 100px;
  background-color: #ef3f61;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ConCount = styled.div`
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 0.85rem;
  /* width: 50%; */
  width: ${(props) => props.width}%;
  min-width: 10%;
  background-color: #42c8b7;
  border-radius: 0 100px 100px 0;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProConBody = styled.div`
  /* border: 1px solid blue; */
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.5rem;
  text-align: center;
  align-items: center;
  gap: 5%;
`;

const ProConDelete = styled.div`
  color: rgb(120, 120, 120);

  &:hover {
    /* cursor: pointer;
    color: black; */
    /* 미구현 기능 */
  }
`;
const ProConEdit = styled.div`
  color: rgb(120, 120, 120);

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const ProConIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const ProConHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.5%;
  /* border: 1px solid purple; */
`;

const ProConTitle = styled.div`
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 0.0056em;
  /* border: 1px solid tomato; */
`;

const ProConWrap = styled.div`
  padding: 5% 7.5%;
`;

export default ProCon;
