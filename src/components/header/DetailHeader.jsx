import React, { useState } from "react";
import ModalPortal from "../modal/ModalPortal";
import DetailMenuModal from "../modal/DetailMenuModal";
import { useNavigate } from "react-router-dom";
import * as St from "./DetailHeader.style";

const DetailHeader = ({ postIdx, detailPostCat }) => {
  const nav = useNavigate();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const menuModalOpenHandler = () => {
    setIsMenuModalOpen(true);
  };

  const menuModalCloseHandler = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <>
      <St.Header>
        <St.Wrap>
          <St.BackBtn
            onClick={() => {
              nav(-1);
            }}
          >
            <St.BackIcon />
          </St.BackBtn>
          <St.Category>
            {detailPostCat.maincategory}◦{detailPostCat.category}
          </St.Category>
          <St.MenuBtn onClick={menuModalOpenHandler}>
            <St.DotsIcon />
          </St.MenuBtn>
        </St.Wrap>
      </St.Header>
      <ModalPortal>
        <St.ModalCont>
          {isMenuModalOpen && (
            <DetailMenuModal
              open={isMenuModalOpen}
              close={menuModalCloseHandler}
              postIdx={postIdx}
              detailPostCat={detailPostCat}
            />
          )}
        </St.ModalCont>
      </ModalPortal>
    </>
  );
};

export default DetailHeader;
