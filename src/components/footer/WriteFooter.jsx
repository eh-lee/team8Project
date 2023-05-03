import React, { useEffect, useRef, useState } from "react";
import PollModal from "../modal/PollModal";
import ModalPortal from "../modal/ModalPortal";
import * as St from "./WriteFooter.style"

const WriteFooter = ({ handleIsWritingImg }) => {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  // 이미지 관리
  const [imgs, setImgs] = useState([]);
  const [preImgs, setPreImgs] = useState([]);

  const imgOnchangeHandler = (event) => {
    console.log("이미지 업로드 어떻게 되지요?=======>", event.target.files);
    const fileList = event.target.files;
    setImgs(Array.from(fileList));
    // 최대 4개
    const filesLength = fileList.length > 4 ? 4 : fileList.length;

    //

    // handleIsWritingImg(true);

  };
  console.log("여러장 저장되나?", imgs);

  const pollModalOpenHandler = () => {
    setIsPollModalOpen(true);
  };
  const pollModalCloseHandler = () => {
    setIsPollModalOpen(false);
  };

  return (
    <St.Footer>
      {/* <WriteFooterNav handleIsWritingImg={handleIsWritingImg} /> */}
      <St.Column>
        <St.Nav>
          <St.Poll onClick={() => pollModalOpenHandler()}>
            <St.VoteIcon />
            투표 생성
          </St.Poll>
          <St.ImageCont>
            <St.InfoText>이미지는 4장까지 업로드 가능합니다.</St.InfoText>
            <St.ImageInput
              type="file"
              accept="image/*"
              multiple
              // ref={imgInputRef}
              onChange={imgOnchangeHandler}
            />
            <St.ImageIcon />
          </St.ImageCont>
        </St.Nav>
      </St.Column>

      <ModalPortal>
        <St.ModalCont>
          {isPollModalOpen && (
            <PollModal open={isPollModalOpen} close={pollModalCloseHandler} />
          )}
        </St.ModalCont>
      </ModalPortal>
    </St.Footer>
  );
};

export default WriteFooter;
