import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import {ReactComponent as BackIcon} from "../../assets/icons/common/back.svg"
import { useSelector, useDispatch } from "react-redux";
import {
  setPollType,
  setPollTitle,
  setTag,
  pollCanc,
} from "../../app/modules/writeSlice";

const PollModal = ({ open, close }) => {
  const dispatch = useDispatch();
  const { pollType, pollTitle, tag } = useSelector((state) => state.write);

  const [isProConClicked, setIsProConClicked] = useState(false);
  const [isSelectClicked, setIsSelectClicked] = useState(false);

  const cancHandler = () => {
    dispatch(pollCanc());
    closeModal();
  };
  // 이게 나중에 write.jsx에서 poll component가 나올 때, 이때
  // poll component에 있는 삭제 버튼 누를 대도 dispatch(pollCanc())로 하는 거야
  // 그러면 클라이언트 단에서 만들고 삭제 오오오!

  const closeModal = () => {
    close();
  };

  const changePollTitleHandler = (e) => {
    dispatch(setPollTitle(e.target.value));
  };

  const changePollTagHandler = (e, index) => {
    const newTag = [...tag];
    // const newTag = (...tag);
    newTag[index] = e.target.value;
    // setTag(newTag);
    dispatch(setTag(newTag));
  };

  // console.log("선택형 태그들=====>", tag);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSelectClicked && !isProConClicked) {
      return alert("투표 유형을 선택해 주세요.");
    }

    if (isProConClicked) {
      if (pollTitle.length >= 20) {
        return alert("투표 제목은 20자 이내로 작성해 주세요.");
      }
      dispatch(setPollType("proCon"));
    }

    if (isSelectClicked) {
      if (pollTitle.length >= 20) {
        return alert("투표 제목은 20자 이내로 작성해 주세요.");
      }
      if (tag.some((tagText) => tagText.length >= 20)) {
        return alert("태그는 각각 20자 이내로 작성해 주세요.");
      }
      dispatch(setPollType("select"));
    }
    closeModal();
  };

  // 이제 이것들을..
  // 1. [V] closeModal() && [V] 전역 상태 관리 (슬라이스 반영)
  // 2. [ ] 전역 상태를 렌더링해서 closeModal()한 상태에서의 Write.jsx에 컴포넌트로 그래프 반영되게 할 수 있을까??
  // 3. 그다음에 "등록"할 때 POST에 전역 상태 (pollType, tag, pollTitle 같이 POST)

  // --> pollType, pollTitle, tag
  // Detail.jsx에서 get한 거 적용할 컴포넌트 만들기. (이거는 위에 2.에 컴포넌트)
  // ============== Detail 추후
  // 적용 필터링은 pollType으로 proCon일 때랑 select일 때 컴포넌트 만들기.

  const handleProConClick = () => {
    if (isSelectClicked) {
      setIsSelectClicked(!isSelectClicked);
      setIsProConClicked(!isProConClicked);
    } else {
      setIsProConClicked(!isProConClicked);
    }
  };

  const handleSelectClick = () => {
    alert("구현 중인 기능입니다.");
    return;
    // * ============ 구현 중 ============= *
    // if (isProConClicked) {
    //   setIsProConClicked(!isProConClicked);
    //   setIsSelectClicked(!isSelectClicked);
    // } else {
    //   setIsSelectClicked(!isSelectClicked);
    // }
    // * ============ 구현 중 ============= *
  };

  return open ? (
    <>
      <PollWriteWrap>
        <PollWriteHeader>
          <PollWriteHeaderCont>
            <PollWriteCanc onClick={cancHandler}>
              <BackIcon />
              {/* <IoIosArrowBack/> */}
            </PollWriteCanc>
            <PollWriteCategory>
              <PollWirteTitle>투표</PollWirteTitle>
            </PollWriteCategory>
            <PollMarginRight></PollMarginRight>
          </PollWriteHeaderCont>
        </PollWriteHeader>

        <PollWriteMain onSubmit={handleSubmit}>
          <PollType>
            <PollTypeText>투표 유형</PollTypeText>
            <PollRow>
              <PollProConType
                onClick={handleProConClick}
                isClicked={isProConClicked}
              >
                찬반형
              </PollProConType>
              <PollSelectType
                onClick={handleSelectClick}
                isClicked={isSelectClicked}
              >
                선택형
              </PollSelectType>
            </PollRow>
          </PollType>

          {isProConClicked && (
            <PollTitle>
              <PollTitleText>투표 제목</PollTitleText>
              <PollInput
                id={pollTitle}
                placeholder="제목을 입력해 주세요 (20자 이내)"
                onChange={(e) => changePollTitleHandler(e)}
              ></PollInput>
            </PollTitle>
          )}

          {isSelectClicked && (
            <>
              <PollTitle>
                <PollTitleText>투표 제목</PollTitleText>
                <PollInput
                  id={pollTitle}
                  placeholder="제목을 입력해 주세요 (20자 이내)"
                  onChange={(e) => changePollTitleHandler(e)}
                ></PollInput>
              </PollTitle>

              <PollSelect>
                <PollSelectText>보기</PollSelectText>
                <PollCandid
                  onChange={(e) => changePollTagHandler(e, 0)}
                  placeholder="보기를 입력해 주세요 (20자 이내)"
                ></PollCandid>
                <PollCandid
                  onChange={(e) => changePollTagHandler(e, 1)}
                  placeholder="보기를 입력해 주세요 (20자 이내)"
                ></PollCandid>
                <PollCandid
                  onChange={(e) => changePollTagHandler(e, 2)}
                  placeholder="보기를 입력해 주세요 (20자 이내)"
                ></PollCandid>
                <PollCandid
                  onChange={(e) => changePollTagHandler(e, 3)}
                  placeholder="보기를 입력해 주세요 (20자 이내)"
                ></PollCandid>
              </PollSelect>
            </>
          )}
          <Gap />
          <PollButton>투표 만들기</PollButton>
        </PollWriteMain>
        {/* <PollButton type="submit">투표 만들기</PollButton> */}
      </PollWriteWrap>
    </>
  ) : null;
};

export default PollModal;

// fixed라서 hard하게 줘야 안 꺠짐

const Gap = styled.div`
  &::before {
    content: "";
    display: block;
    min-height: 200px; /* 원하는 높이 값으로 조정 */
  }
`;

const PollButton = styled.button`
  /* margin-top: 50%; */
  position: fixed;
  /* width: 47.8%; */
  width: 360px;
  bottom: 0;
  padding: 16px 8px;
  margin: 20px;
  color: white;
  background-color: #ef3f61;
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: center;

  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;

const PollWriteWrap = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: white;
  /* modal이니까 position: fixed */
`;

const PollRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
`;

const PollProConType = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 7.5px 0;
  width: 180px;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  color: ${(props) => (props.isClicked ? "white" : "black")};
  background-color: ${(props) => (props.isClicked ? "#3A3A59" : "white")};

  &:hover {
    cursor: pointer;
  }
`;
const PollSelectType = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 7.5px 0;
  width: 180px;
  text-align: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  color: ${(props) => (props.isClicked ? "white" : "black")};
  background-color: ${(props) => (props.isClicked ? "#3A3A59" : "white")};

  &:hover {
    cursor: pointer;
  }
`;
const PollInput = styled.input`
  border-radius: 0.5rem;
  height: 40px;
  width: 340px;
  padding: 5px 10px;
  margin: 10px 20px;
  border: 0.1rem solid rgb(220, 220, 220);

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    background-color: rgba(200, 200, 200, 0.2);
    outline: none;
  }
`;
const PollCandid = styled.input`
  border-radius: 0.5rem;
  height: 40px;
  width: 340px;
  padding: 5px 10px;
  margin: 10px 20px;
  border: 0.1rem solid rgb(220, 220, 220);

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    background-color: rgba(200, 200, 200, 0.2);
    outline: none;
  }
`;

const PollTypeText = styled.div`
  margin: 10px 20px;
`;
const PollTitleText = styled.div`
  margin: 10px 20px;
`;
const PollSelectText = styled.div`
  margin: 10px 20px;
`;
const PollType = styled.div`
  /* border: 1px solid blue; */
`;
const PollTitle = styled.div``;
const PollSelect = styled.div``;

const PollWriteMain = styled.form`
  display: flex;
  flex-direction: column;

  /* align-items: ; */
  /* border: 1px solid green; */
  /* width: 340px; */
  /* width: 100%; */
  /* margin: 25% 7.5%; */
  padding: 90px 0;
  min-height: 400px;
  overflow-y: scroll;
`;

const PollWirteTitle = styled.div`
  height: 24px;
  font-weight: 600;
  font-size: 18px;
`;

const PollMarginRight = styled.div`
  width: 0.9rem;
  margin-right: 10%;
`;

const PollWriteCategory = styled.div`
  /* border: 1px solid gray; */
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const PollWriteCanc = styled.div`
  /* border: 1px solid red; */
  margin-left: 7.5%;

  &:hover {
    cursor: pointer;
    color: rgb(175, 175, 175);
  }
`;

const PollWriteHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 5vh;
  // *============ HEADER 높이 ===============*
`;

const PollWriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;
