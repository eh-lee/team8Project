import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";

const CateogryModal = ({ parentFunction, open, close }) => {
  const modalRef = useRef();
  const [isActive, setIsActive] = useState({ main: null, sub: null });

  const closeModal = () => {
    close();
  };

  useEffect(() => {
    function handleCategorySetUp() {
      if (isActive.main !== null && isActive.sub !== null) {
        return closeModal();
      }
    }
    handleCategorySetUp();

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, isActive]);

  const mainCategories = ["유머", "진지"];
  const categories = [
    "전체",
    "패션/뷰티",
    "맛집/요리/음식",
    "경제/재테크",
    "썸/연애",
    "취미/운동",
    "스포츠",
    "여행",
    "결혼",
    "게임",
    "반려동물",
    "가족",
    "취업/자격증",
    "일상",
    "기타",
  ];

  const [mainCat, setMainCat] = useState("카테고리");
  const [subCat, setSubCat] = useState("");

  parentFunction(mainCat, subCat);
  // 부모로 상태 보내기

  const handleMainClick = (index) => {
    setIsActive({ main: index, sub: null });
    setMainCat(mainCategories[index]);
  };

  const handleSubClick = (index) => {
    setIsActive((prev) => ({ ...prev, sub: index }));
    setSubCat(categories[index]);
  };

  return open ? (
    <>
      <FooBG onClick={close} />
      <CategoryModalOverlay open={open} close={close} ref={modalRef}>
        <CategoryModalRow>
          <ModalMainCat>
            {mainCategories.map((item, idx) => (
              <MainCat
                onClick={() => handleMainClick(idx)}
                key={idx}
                mainCatIdx={idx}
                isFirst={idx === 0}
                isClicked={isActive.main}
              >
                {item}
              </MainCat>
            ))}
          </ModalMainCat>
          <ModalSubCat>
            {categories.map((item, idx) => (
              <SubCat
                onClick={() => handleSubClick(idx)}
                key={idx}
                subCatIdx={idx}
                isFirst={idx === 0}
                isClicked={isActive.sub}
              >
                {item}
                <BsCheckLg display={isActive.sub === idx ? "inline" : "none"} />
              </SubCat>
            ))}
          </ModalSubCat>
        </CategoryModalRow>
      </CategoryModalOverlay>
    </>
  ) : null;
};

export default CateogryModal;

const FooBG = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Selected = styled.div`
  /* position: relative; */
  /* top: 0;
  right: 0;
  width: 10px;
  height: 100vh;
  border: 1px solid red; */
`;

const CategoryModalOverlay = styled.div`
  position: fixed;
  bottom: 0;
  width: 400px;
  box-shadow: 0.05rem 0.02rem 0.25rem rgba(0, 0, 0, 0.3);

  /* for test */
  height: 40rem;
  /* border: 1px solid tomato; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  /* transition: transform 0.2s ease-in-out;

  ${({ open }) =>
    open &&
    `
    transform: translateY(0%);
  `}

  ${({ open, close }) =>
    !open &&
    close &&
    `
    transform: translateY(100%);
  `} */
`;

const CategoryModalRow = styled.div`
  display: flex;
`;

const ModalMainCat = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 1rem;
  width: 6rem;
  height: 100vh;
  background-color: rgb(245, 245, 245);
`;

const MainCat = styled.div`
  width: 100%;
  height: 2.85rem;
  /* box-shadow: 0px 0.01rem 0.01rem rgba(0, 0, 0, 0.25); */
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.25rem;
  padding-left: 0.25rem;
  /* letter-spacing 보정 */
  font-weight: bold;
  font-size: 1.05rem;
  color: "rgb(160,160,160)";
  ${({ isFirst }) => isFirst && `border-top-left-radius: 1rem;`};

  color: ${(props) =>
    props.isClicked === props.mainCatIdx ? "black" : "rgb(160, 160, 160)"};

  background-color: ${(props) =>
    props.isClicked === props.mainCatIdx ? "white" : "rgb(245, 245, 245)"};
  /* props.isClicked === props.key ? "white" : "tomato"}; */
  /* key 예약어라 못 쓴다?.. 헉........ 이거 못 찾아서 코드 리뷰 2시간.. 하..*/
  /* 타입스크립트로 하면 에러 뜸 띠방.. */
  /* key, input태그에서도 엌저구가 있음 */

  &:hover {
    color: black;
    background-color: white;
    cursor: pointer;
  }
`;

const ModalSubCat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top-right-radius: 1rem;
  width: 19rem;
  height: 100vh;
`;

const SubCat = styled.div`
  max-width: 100%;
  /* width -> max-width로 margin-left 나온 거 해결 */
  /* 근데 borderradius... */
  height: 2.85rem;
  /* box-shadow: 0px 0.01rem 0.1rem rgba(0, 0, 0, 0.25); */
  /* box-shadow: 0px 0.01rem 0.01rem rgba(0, 0, 0, 0.25); */
  display: flex;
  align-items: center;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  font-weight: bold;
  font-size: 1.05rem;
  /* border: 1px solid red; */
  justify-content: space-between;
  color: rgb(160, 160, 160);

  ${({ isFirst }) => isFirst && `border-top-right-radius: 1rem;`};

  color: ${(props) =>
    props.isClicked === props.subCatIdx ? "black" : "rgb(160, 160, 160)"};

  &:hover {
    color: black;
    cursor: pointer;
  }
`;
