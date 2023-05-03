import React, { useEffect, useRef, useState } from "react";
import {ReactComponent as CheckIcon} from "../../assets/icons/common/check.svg"
import * as St from "./CateogryModal.style"

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
      <St.FooBG onClick={close} />
      <St.CategoryModalOverlay open={open} close={close} ref={modalRef}>
        <St.CategoryModalRow>
          <St.ModalMainCat>
            {mainCategories.map((item, idx) => (
              <St.MainCat
                onClick={() => handleMainClick(idx)}
                key={idx}
                mainCatIdx={idx}
                isFirst={idx === 0}
                isClicked={isActive.main}
              >
                {item}
              </St.MainCat>
            ))}
          </St.ModalMainCat>
          <St.ModalSubCat>
            {categories.map((item, idx) => (
              <St.SubCat
                onClick={() => handleSubClick(idx)}
                key={idx}
                subCatIdx={idx}
                isFirst={idx === 0}
                isClicked={isActive.sub}
              >
                {item}
                <CheckIcon display={isActive.sub === idx ? "inline" : "none"} />
              </St.SubCat>
            ))}
          </St.ModalSubCat>
        </St.CategoryModalRow>
      </St.CategoryModalOverlay>
    </>
  ) : null;
};

export default CateogryModal;