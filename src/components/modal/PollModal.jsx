// // idea start
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const A = () => {
//   const [value, setValue] = useState("123");
//   const navi = useNavigate();

//   const buttonClickHandler = () => {
//     localStorage.setItem("value_from_A", value);
//     navi("/B");
//   };
//   return (
//     <div>
//       현재 value : {value}
//       <button onClick={buttonClickHandler}> B로 넘어가기 </button>
//     </div>
//   );
// };

// export default A;

//============================================================================================
//============================================================================================

import React, { useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/common/back.svg";
import * as St from "./PollModal.style";

//  이거를 라이트푸터랑 합쳐 근데 라이트폼에서 폴모달에 오픈 클로즈를 프롭스로 내리고 있어

const PollModal = ({ open, close, parentFunction }) => {
  const [isProConClicked, setIsProConClicked] = useState(false);
  const [isSelectClicked, setIsSelectClicked] = useState(false);

  const [pollTitle, setPollTitle] = useState("");
  const [pollType, setPollType] = useState("");

  const backHandler = () => {
    closeModal();
  };

  const closeModal = () => {
    close();
  };

  const changePollTitleHandler = (e) => {
    setPollTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "투표 만들기를 클릭하면서 PollType을 전역에 저장",
      isProConClicked
    );

    if (!isSelectClicked && !isProConClicked) {
      return alert("투표 유형을 선택해 주세요.");
    }

    if (isProConClicked) {
      if (pollTitle.length >= 20) {
        return alert("투표 제목은 20자 이내로 작성해 주세요.");
      }
    }
    closeModal();
  };

  const handleProConClick = () => {
    if (isSelectClicked) {
      setIsSelectClicked(!isSelectClicked);
      setIsProConClicked(!isProConClicked);
    } else {
      setIsProConClicked(!isProConClicked);
      setPollType("proCon");
    }
  };

  console.log("Plltp==================>", pollType);
  console.log("Plltitle==================>", pollTitle);

  parentFunction(pollType, pollTitle);

  return open ? (
    <>
      <St.PollWriteWrap>
        <St.PollWriteHeader>
          <St.PollWriteHeaderCont>
            <St.PollWriteCanc onClick={backHandler}>
              <BackIcon />
            </St.PollWriteCanc>
            <St.PollWriteCategory>
              <St.PollWirteTitle>투표</St.PollWirteTitle>
            </St.PollWriteCategory>
            <St.PollMarginRight></St.PollMarginRight>
          </St.PollWriteHeaderCont>
        </St.PollWriteHeader>

        <St.PollWriteMain onSubmit={handleSubmit}>
          <St.PollType>
            <St.PollTypeText>투표 유형</St.PollTypeText>
            <St.PollRow>
              <St.PollProConType
                onClick={handleProConClick}
                isClicked={isProConClicked}
              >
                찬반형
              </St.PollProConType>
              <St.PollSelectType
                onClick={() => {
                  alert("구현 중인 기능입니다.");
                }}
                isClicked={isSelectClicked}
              >
                선택형
              </St.PollSelectType>
            </St.PollRow>
          </St.PollType>

          {isProConClicked && (
            <St.PollTitle>
              <St.PollTitleText>투표 제목</St.PollTitleText>
              <St.PollInput
                id={pollTitle}
                placeholder="제목을 입력해 주세요 (20자 이내)"
                onChange={(e) => changePollTitleHandler(e)}
              ></St.PollInput>
            </St.PollTitle>
          )}
          <St.Gap />
          <St.PollButton>투표 만들기</St.PollButton>
        </St.PollWriteMain>
      </St.PollWriteWrap>
    </>
  ) : null;
};

export default PollModal;

///////// save ver.1.0.0.
// import React, { useState } from "react";
// import { ReactComponent as BackIcon } from "../../assets/icons/common/back.svg";
// import { useSelector, useDispatch } from "react-redux";
// import * as St from "./PollModal.style";
// import {
//   setPollType,
//   setPollTitle,
//   setTag,
//   pollCanc,
// } from "../../app/modules/writeSlice";

// const PollModal = ({ open, close }) => {
//   const dispatch = useDispatch();
//   const { pollType, pollTitle, tag } = useSelector((state) => state.write);

//   const [isProConClicked, setIsProConClicked] = useState(false);
//   const [isSelectClicked, setIsSelectClicked] = useState(false);

//   const cancHandler = () => {
//     dispatch(pollCanc());

//     closeModal();
//   };
//   // 이게 나중에 write.jsx에서 poll component가 나올 때, 이때
//   // poll component에 있는 삭제 버튼 누를 대도 dispatch(pollCanc())로 하는 거야
//   // 그러면 클라이언트 단에서 만들고 삭제 오오오!

//   const closeModal = () => {
//     close();
//   };

//   const changePollTitleHandler = (e) => {
//     dispatch(setPollTitle(e.target.value));
//     console.log("PollTitle이 전역에 계속 들어간다---->", e.target.value);
//     // 애를 투표 만들기를 할 때, pollType이랑 pollTitle을 한 번에 스토리지에 넣어 버리자.
//   };

//   // const changePollTagHandler = (e, index) => {
//   //   const newTag = [...tag];
//   //   // const newTag = (...tag);
//   //   newTag[index] = e.target.value;
//   //   // setTag(newTag);
//   //   dispatch(setTag(newTag));
//   // };
//   // console.log("선택형 태그들=====>", tag);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(
//       "투표 만들기를 클릭하면서 PollType을 전역에 저장",
//       isProConClicked
//     );

//     if (!isSelectClicked && !isProConClicked) {
//       return alert("투표 유형을 선택해 주세요.");
//     }

//     if (isProConClicked) {
//       if (pollTitle.length >= 20) {
//         return alert("투표 제목은 20자 이내로 작성해 주세요.");
//       }
//       dispatch(setPollType("proCon"));
//     }

//     // if (isSelectClicked) {
//     //   if (pollTitle.length >= 20) {
//     //     return alert("투표 제목은 20자 이내로 작성해 주세요.");
//     //   }
//     //   if (tag.some((tagText) => tagText.length >= 20)) {
//     //     return alert("태그는 각각 20자 이내로 작성해 주세요.");
//     //   }
//     //   dispatch(setPollType("select"));
//     // }
//     closeModal();
//   };

//   // 이제 이것들을..
//   // 1. [V] closeModal() && [V] 전역 상태 관리 (슬라이스 반영)
//   // 2. [ ] 전역 상태를 렌더링해서 closeModal()한 상태에서의 Write.jsx에 컴포넌트로 그래프 반영되게 할 수 있을까??
//   // 3. 그다음에 "등록"할 때 POST에 전역 상태 (pollType, tag, pollTitle 같이 POST)

//   // --> pollType, pollTitle, tag
//   // Detail.jsx에서 get한 거 적용할 컴포넌트 만들기. (이거는 위에 2.에 컴포넌트)
//   // ============== Detail 추후
//   // 적용 필터링은 pollType으로 proCon일 때랑 select일 때 컴포넌트 만들기.

//   const handleProConClick = () => {
//     if (isSelectClicked) {
//       setIsSelectClicked(!isSelectClicked);
//       setIsProConClicked(!isProConClicked);
//     } else {
//       setIsProConClicked(!isProConClicked);
//     }
//   };

//   // * ============ 구현 중 ============= *
//   // const handleSelectClick = () => {
//   // if (isProConClicked) {
//   //   setIsProConClicked(!isProConClicked);
//   //   setIsSelectClicked(!isSelectClicked);
//   // } else {
//   //   setIsSelectClicked(!isSelectClicked);
//   // }
//   // return;
//   // };
//   // * ============ 구현 중 ============= *

//   return open ? (
//     <>
//       <St.PollWriteWrap>
//         <St.PollWriteHeader>
//           <St.PollWriteHeaderCont>
//             <St.PollWriteCanc onClick={cancHandler}>
//               <BackIcon />
//               {/* <IoIosArrowBack/> */}
//             </St.PollWriteCanc>
//             <St.PollWriteCategory>
//               <St.PollWirteTitle>투표</St.PollWirteTitle>
//             </St.PollWriteCategory>
//             <St.PollMarginRight></St.PollMarginRight>
//           </St.PollWriteHeaderCont>
//         </St.PollWriteHeader>

//         <St.PollWriteMain onSubmit={handleSubmit}>
//           <St.PollType>
//             <St.PollTypeText>투표 유형</St.PollTypeText>
//             <St.PollRow>
//               <St.PollProConType
//                 onClick={handleProConClick}
//                 isClicked={isProConClicked}
//               >
//                 찬반형
//               </St.PollProConType>
//               <St.PollSelectType
//                 onClick={() => {
//                   alert("구현 중인 기능입니다.");
//                 }}
//                 isClicked={isSelectClicked}
//               >
//                 선택형
//               </St.PollSelectType>
//             </St.PollRow>
//           </St.PollType>

//           {isProConClicked && (
//             <St.PollTitle>
//               <St.PollTitleText>투표 제목</St.PollTitleText>
//               <St.PollInput
//                 id={pollTitle}
//                 placeholder="제목을 입력해 주세요 (20자 이내)"
//                 onChange={(e) => changePollTitleHandler(e)}
//               ></St.PollInput>
//             </St.PollTitle>
//           )}
//           {/* {isSelectClicked && (
//             <>
//               <St.PollTitle>
//                 <St.PollTitleText>투표 제목</St.PollTitleText>
//                 <St.PollInput
//                   id={pollTitle}
//                   placeholder="제목을 입력해 주세요 (20자 이내)"
//                   onChange={(e) => changePollTitleHandler(e)}
//                 ></St.PollInput>
//               </St.PollTitle>

//               <St.PollSelect>
//                 <St.PollSelectText>보기</St.PollSelectText>
//                 <St.PollCandid
//                   onChange={(e) => changePollTagHandler(e, 0)}
//                   placeholder="보기를 입력해 주세요 (20자 이내)"
//                 ></St.PollCandid>
//                 <St.PollCandid
//                   onChange={(e) => changePollTagHandler(e, 1)}
//                   placeholder="보기를 입력해 주세요 (20자 이내)"
//                 ></St.PollCandid>
//                 <St.PollCandid
//                   onChange={(e) => changePollTagHandler(e, 2)}
//                   placeholder="보기를 입력해 주세요 (20자 이내)"
//                 ></St.PollCandid>
//                 <St.PollCandid
//                   onChange={(e) => changePollTagHandler(e, 3)}
//                   placeholder="보기를 입력해 주세요 (20자 이내)"
//                 ></St.PollCandid>
//               </St.PollSelect>
//             </>
//           )} */}
//           <St.Gap />
//           <St.PollButton>투표 만들기</St.PollButton>
//         </St.PollWriteMain>
//       </St.PollWriteWrap>
//     </>
//   ) : null;
// };

// export default PollModal;
