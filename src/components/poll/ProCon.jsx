import React from "react";
import { useDispatch } from "react-redux";
import { pollCanc } from "../../app/modules/writeSlice";
import { BsTrash } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import { TfiThumbUp } from "react-icons/tfi";
import { TfiThumbDown } from "react-icons/tfi";
import styled from "styled-components";

const ProCon = ({
  pollTitle,
  // write.jsx 미리보기
  detailPollTitle,
  // detail.jsx
  detailProCount,
  detailConCount,
}) => {
  const dispatch = useDispatch();

  const proConDelHandler = () => {
    dispatch(pollCanc());
  };

  const proConEditHandler = () => {
    alert("구현 중인 기능입니다.");
  };

  const proPerc = Math.round(
    (detailProCount / (detailProCount + detailConCount)) * 100
  );
  const conPerc = Math.floor(
    (detailConCount / (detailProCount + detailConCount)) * 100
  );

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
          <ProColumn>
            <TfiThumbUp size={25} />
            <ProBox>찬성 투표</ProBox>
          </ProColumn>
        ) : (
          // onClick 걸고 state 관리
          <DetailProColumn>
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

        <ProColumn>
          <TfiThumbDown size={25} />
          <ConBox>반대 투표</ConBox>
        </ProColumn>
      </ProConBody>
    </ProConWrap>
  );
};

const ProColumn = styled.div`
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
    color: #ef3f61;
  }
`;

const ProBox = styled.div`
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
  border-top: 0.01rem solid rgba(0, 0, 0, 0.2);
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.2);
`;

export default ProCon;
