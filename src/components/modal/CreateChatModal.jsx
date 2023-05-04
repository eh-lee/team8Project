import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instanceWithAuth } from "../../api/axios";
import { cookies } from "../../api/cookies";
import {ReactComponent as BackIcon} from "../../assets/icons/common/back.svg"
import * as St from "./CreateChatModal.style"

const CreateChatModal = ({ open, close }) => {
  const [room, setRoom] = useState("");

  // ======================= join 옮기는 중 ============================
  const modalRef = useRef();
  const navi = useNavigate();

  const nickname = cookies.get("nickname");

  const [chatRoom, setChatRoom] = useState({
    // roomName: "",
    // nickname: nickname,
    maxParty: 0,
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setChatRoom((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //   *========================================*
  // 버튼을 누르면
  //   *========================================*

  // instanceWithAuth.post(/api/chat/hunsuChat);

  const createChatHandler = async (e) => {
    e.preventDefault();
    alert('현재 점검 중인 기능입니다.')

    // if (!room) {
    //   return alert("방 제목을 입력해 주세요.");
    // }

    // if (!chatRoom.maxParty) {
    //   return alert("인원수를 선택해 주새요.");
    // }

    // try {
    //   await instanceWithAuth.post("/chat/hunsuChat", {
    //     roomName: room,
    //     maxParty: parseInt(chatRoom.maxParty),
    //     // title: "title",
    //   });

    //   navi(
    //     `/battle/chat?name=${nickname}&room=${room}&maxParty=${parseInt(
    //       chatRoom.maxParty
    //     )}`
    //   );
    // } catch (e) {
    //   const errorMsg = e.response.data.msg;
    //   alert(`${errorMsg}`);
    // }
  };

  //   *========================================*
  // 버튼을 누르면
  //   *========================================*

  const closeModal = () => {
    // close();
    return alert("close");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return open ? (
    <>
      <St.FooLayout>
        <St.ChatHeader>
          <St.ChatHeaderCont>
            <St.BackBtn onClick={close}>
              <BackIcon />
            </St.BackBtn>
            <St.WriteCategory>
              <St.MainCat>훈수배틀방 만들기</St.MainCat>
            </St.WriteCategory>
            <div />
          </St.ChatHeaderCont>
        </St.ChatHeader>
        <St.CreateChatWrap>
          <div>
            <St.ChatTitle>배틀방 이름을 입력해 주세요.</St.ChatTitle>
            <St.CreateChatTitleInput
              required
              placeholder="방 제목을 입력해 주세요.(15자 이하)"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
              maxLength={15}
            ></St.CreateChatTitleInput>
          </div>
          <div>
            <St.ChatParty>참여 인원을 설정해 주세요.</St.ChatParty>
            <St.CreateChatMatParty
              required
              value={chatRoom.maxParty}
              name="maxParty"
              onChange={onChangeHandler}
            >
              <option value=""> 채팅에 참여할 인원수를 선택해 주세요. </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
              <option value="6"> 6 </option>
              <option value="7"> 7 </option>
              <option value="8"> 8 </option>
              <option value="9"> 9 </option>
              <option value="10"> 10 </option>
            </St.CreateChatMatParty>
          </div>
          <St.CreateChatBtn onClick={createChatHandler}>
            채팅방 만들기
          </St.CreateChatBtn>
        </St.CreateChatWrap>
      </St.FooLayout>
    </>
  ) : null;
};

export default CreateChatModal;

//==================================================================
// 기존 코드
//==================================================================

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { instanceWithAuth } from "../../api/axios";
// import { cookies } from "../../api/cookies";

// const CreateChatModal = ({ open, close }) => {
//   const modalRef = useRef();
//   const navi = useNavigate();

//   const nickname = cookies.get("nickname");

//   const [chatRoom, setChatRoom] = useState({
//     roomName: "",
//     // nickname: nickname,
//     maxParty: 0,
//   });

//   const onChangeHandler = (e) => {
//     const { value, name } = e.target;
//     console.log("어떻게 들어오니", e.target);

//     setChatRoom((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   //   *========================================*
//   // 버튼을 누르면
//   //   *========================================*

//   // instanceWithAuth.post(/api/chat/hunsuChat);

//   const createChatHandler = async (e) => {
//     e.preventDefault();

//     try {
//       await instanceWithAuth.post("/chat/hunsuChat", {
//         roomName: chatRoom.roomName,
//         maxParty: parseInt(chatRoom.maxParty),
//         // title: "title",
//       });

//       navi(`/battle/chat?name=${nickname}&roomName=${chatRoom.roomName}`, {
//         state: { maxParty: chatRoom.maxParty, roomName: chatRoom.roomName },
//       });

//       setChatRoom({
//         roomName: "",
//         maxParty: 0,
//       });
//     } catch (e) {
//       const errorMsg = e.response.data.msg;
//       alert(`${errorMsg}`);
//     }
//   };

//   //   *========================================*
//   // 버튼을 누르면
//   //   *========================================*

//   const closeModal = () => {
//     // close();
//     return alert("close");
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         closeModal();
//       }
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [modalRef]);

//   return open ? (
//     <>
//       <FooBG onClick={close} />
//       <CreateChatWrap>
//         <CreateChatCont open={open} close={close} ref={modalRef}>
//           <CreateChatTitleInput
//             required
//             placeholder="방 제목을 입력해 주세요."
//             name="roomName"
//             value={chatRoom.roomName}
//             onChange={onChangeHandler}
//             maxLength={15}
//           ></CreateChatTitleInput>
//           <CreateChatHeadCount
//             required
//             value={chatRoom.maxParty}
//             name="maxParty"
//             onChange={onChangeHandler}
//           >
//             <option value=""> 채팅에 참여할 인원수를 선택해 주세요. </option>
//             <option value="2"> 2 </option>
//             <option value="3"> 3 </option>
//             <option value="4"> 4 </option>
//             <option value="5"> 5 </option>
//             <option value="6"> 6 </option>
//             <option value="7"> 7 </option>
//             <option value="8"> 8 </option>
//             <option value="9"> 9 </option>
//             <option value="10"> 10 </option>
//           </CreateChatHeadCount>
//           <CreateChatBtn onClick={createChatHandler}>오잉</CreateChatBtn>
//         </CreateChatCont>
//       </CreateChatWrap>
//     </>
//   ) : null;
// };

// export default CreateChatModal;

// const CreateChatWrap = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const CreateChatTitleInput = styled.input`
//   /* border: 1px solid tomato; */
//   border-radius: 0.5rem;
//   /* height: 4vh; */
//   width: 270px;
//   /* padding: 0.5vh 1.5vh; */
//   margin: 1vh 0;
//   border: 0.1rem solid rgb(220, 220, 220);

//   /* border-radius: 0.5rem; */
//   padding: 1vh;
//   height: 4.75vh;
//   width: 270px;
//   font-size: 1rem;

//   &:focus-within {
//     border-radius: 0.5rem;
//     box-shadow: rgba(100, 100, 100, 0.3) 0px 8px 16px -8px;
//     background-color: rgba(200, 200, 200, 0.2);
//     outline: none;
//   }
// `;

// const FooBG = styled.div`
//   position: fixed;
//   top: 0;
//   width: 400px;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.5);
//   box-shadow: 0.05rem 0.02rem 0.25rem rgba(0, 0, 0, 0.3);
// `;

// const CreateChatCont = styled.div`
//   gap: 2.5vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;
//   padding-bottom: 10vh;
//   border-radius: 10px;
//   width: 300px;
//   min-height: 500px;
//   background-color: rgb(245, 245, 245);
//   position: absolute;
//   bottom: 100px;
// `;

// const CreateChatHeadCount = styled.select``;

// const CreateChatBtn = styled.button`
//   border: none ${(props) => props.borderColor};
//   background-color: #ef3f61 ${(props) => props.backgroundColor};
//   color: white ${(props) => props.borderColor};
//   border-radius: 0.5rem;
//   height: 4.75vh;
//   width: 270px;
//   font-size: 1rem;

//   &:hover {
//     border: 0.1rem solid ${(props) => props.borderColor};
//     background-color: pink;
//     cursor: pointer;
//   }
// `;
