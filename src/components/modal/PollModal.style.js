import styled from "styled-components";


const PollWriteWrap = styled.div`
  position: fixed;
  z-index: 1001;
  /* WriteForm의 poll 아이콘 보다 크게 */
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: white;
`;

const PollWriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const PollWriteHeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid #E1E2E4;
  // *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 64px;
  // *============ HEADER 높이 ===============*
`;

const PollWriteCanc = styled.div`
  margin-left: 7.5%;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const PollWriteCategory = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
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

const PollWriteMain = styled.form`
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  min-height: 400px;
  overflow-y: scroll;
`;


const PollType = styled.div`
`;

const PollTypeText = styled.div`
  margin: 10px 20px;
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

const PollTitle = styled.div`
`;

const PollTitleText = styled.div`
  margin: 10px 20px;
`;

const PollButton = styled.button`
  position: fixed;
  width: 360px;
  height: 56px;
  bottom: 0;
  padding: 16px 8px;
  margin: 20px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
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

const PollSelect = styled.div``;

const PollSelectText = styled.div`
  margin: 10px 20px;
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

const Gap = styled.div`
  &::before {
    content: "";
    display: block;
    min-height: 200px; /* 원하는 높이 값으로 조정 */
  }
`;

export {
  PollWriteWrap,
  PollWriteHeader,
  PollWriteHeaderCont,
  PollWriteCanc,
  PollWriteCategory,
  PollWirteTitle,
  PollMarginRight,
  PollWriteMain,
  PollType,
  PollTypeText,
  PollRow,
  PollProConType,
  PollSelectType,
  PollTitle,
  PollTitleText,
  PollButton,
  PollInput,
  PollSelect,
  PollSelectText,
  PollCandid,
  Gap,
}