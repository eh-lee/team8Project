import styled from "styled-components";

const FooLayout = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: white;
`;

const ChatHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;

const ChatHeaderCont = styled.div`
  /* border: 1px solid tomato; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  // *============ HEADER 높이 ===============*
  padding: 0 7.5%;
  height: 48px;
  // *============ HEADER 높이 ===============*
`;

const BackBtn = styled.div`
  color: rgb(180, 180, 180);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const MainCat = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CreateChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 80px;
  align-items: center;
  /* justify-content: flex-start; */
  border: 1px soild burlywood;
  gap: 20px;
`;

const ChatTitle = styled.p`
  font-weight: bold;
  color: #2d2d2d;
`;

const CreateChatTitleInput = styled.input`
  /* border: 1px solid tomato; */
  border-radius: 0.5rem;
  /* height: 4vh; */
  width: 340px;
  /* padding: 0.5vh 1.5vh; */
  margin: 1vh 0;
  border: 0.1rem solid rgb(220, 220, 220);
  padding: 1vh;
  height: 25px;
  font-size: 1rem;

  &:focus-within {
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
    background-color: rgba(200, 200, 200, 0.2);
    outline: none;
  }

  ::placeholder {
    color: #dcdcdc;
  }
`;

const ChatParty = styled.p`
  font-weight: bold;
  color: #2d2d2d;
`;

const CreateChatMatParty = styled.select`
  border-radius: 0.5rem;
  /* height: 4vh; */
  width: 360px;
  /* padding: 0.5vh 1.5vh; */
  margin: 1vh 0;
  border: 0.1rem solid rgb(220, 220, 220);
  color: #dcdcdc;
  /* border-radius: 0.5rem; */
  padding: 1vh;
  height: 40px;
  font-size: 1rem;
`;

const CreateChatBtn = styled.button`
  border: none ${(props) => props.borderColor};
  background-color: #ef3f61 ${(props) => props.backgroundColor};
  color: white ${(props) => props.borderColor};
  border-radius: 0.5rem;

  height: 40px;
  width: 360px;
  font-size: 1rem;

  position: fixed;
  bottom: 40px;
  &:hover {
    border: 0.1rem solid ${(props) => props.borderColor};
    background-color: pink;
    cursor: pointer;
  }
`;

export {
    FooLayout,
    ChatHeader,
    ChatHeaderCont,
    BackBtn,
    WriteCategory,
    MainCat,
    CreateChatWrap,
    ChatTitle,
    CreateChatTitleInput,
    ChatParty,
    CreateChatMatParty,
    CreateChatBtn,
}