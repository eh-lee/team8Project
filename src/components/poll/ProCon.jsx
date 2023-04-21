import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pollCanc } from "../../app/modules/writeSlice";
import { BsTrash } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import { TfiThumbUp } from "react-icons/tfi";
import { TfiThumbDown } from "react-icons/tfi";
import styled from "styled-components";
import { useEffect } from "react";
import { instanceWithAuth } from "../../api/axios";

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

  // 명세 관련

  // [V]
  // ++ 명세 추가 필요 ++
  //  ~ <포스트 투표하기 여부 받기> (GET)  (건선 님)
  // (포스트에 투표하기의 반대급부// 포스트에 투표하기(PUT)로 proInputValue랑 conInputValue 날리는데, 유저가 투표를 눌렀는지 반대를 눌렀는지에 대해 보내주는 것도 해야 함)
  // postIdx로 req.headers token 같이 get 보내면 해당 postIdx에 대한 user-> proInputValue, conInputValue 주세요

  const proPerc = Math.round(
    (detailProCount / (detailProCount + detailConCount)) * 100
  );
  const conPerc = Math.floor(
    (detailConCount / (detailProCount + detailConCount)) * 100
  );

  console.log("proInputValue 잘 내려왔니?=======>", parentProInputValue);
  console.log("conInputValue 잘 내려왔니?*********>", parentConInputValue);

  const voteProHandler = () => {
    if (conInputValue) {
      return alert("찬성/반대는 동시에 선택될 수 없습니다.");
    }

    if (!conInputValue) {
      setProInputValue(!proInputValue);
      putProVote(proInputValue);
    }
  };
  const voteConHandler = () => {
    if (proInputValue) {
      return alert("찬성/반대는 동시에 선택될 수 없습니다.");
    }

    if (!proInputValue) {
      setConInputValue(!conInputValue);
      putConVote();
    }
  };

  // 수정 부분
  const [proInputValue, setProInputValue] = useState(parentProInputValue);
  // const [proInputValue, setProInputValue] = useState("");
  const [conInputValue, setConInputValue] = useState(parentConInputValue);
  // const [conInputValue, setConInputValue] = useState("");
  // 수정 부분

  console.log("찬성==========>", proInputValue);
  console.log("반대=============>", conInputValue);
  console.log("ProCon에서 detailPostIdx=========>", detailPostIdx);

  //proInputValue state 변화된 거 body.res에 ...엌저구
  const putProVote = async (proInputValue) => {
    const data = await instanceWithAuth.put(`/prefer/post/${detailPostIdx}`, {
      proInputValue,
    });
    console.log(data);
  };

  const putConVote = async () => {
    const data = await instanceWithAuth.put(`/prefer/post/${detailPostIdx}`, {
      conInputValue,
      // setIsVoted(!isVoted); 요런 식으러..
    });
    console.log(data);
  };

  // setProCount((prev) => prev +1)

  //

  // putVote();

  // useEffect(() => {
  // }, [proInputValue, conInputValue]);

  //이거는 날린 거고,
  //받아오는 건 들어올 때 하는데, 그때 반영해야징

  // 찬반을 클릭하면 변환해 준다.
  // 단, 두 값이 동시에 true일 수는 없다. if proInputValie

  // // const
  // if (proInputValue) {

  // }

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
              <BsTrash onClick={proConDelHandler} />
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
            <ProCount>50%</ProCount>
            <ConCount>50%</ConCount>
          </PollGraph>
        ) : (
          <PollGraph>
            <ProCount>
              {detailProCount === 0 && detailConCount === 0
                ? "50%"
                : `${proPerc}%`}
            </ProCount>
            <ConCount>
              {detailProCount === 0 && detailConCount === 0
                ? "50%"
                : `${conPerc}%`}
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
  /* flex-direction: row; */
  flex-direction: row-reverse;
  height: 65%;
`;

const ProCount = styled.div`
  padding-left: 5px;
  text-align: start;
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.85rem;
  width: 50%;
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
  width: 50%;
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
