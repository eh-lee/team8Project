import React from "react";
import PollModal from "../modal/PollModal";
import ModalPortal from "../modal/ModalPortal";
import { useState } from "react";
import * as St from "./WriteFooter.style";

const WriteFooter = ({ handleIsWritingImg }) => {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const [imgs, setImgs] = useState([]);
  // const [preImgs, setPreImgs] = useState([]);
  // const imgInputRef = useRef(null);

  // const handleClick = () => {
  //   imgInputRef.current.click();
  // };

  const imgOnchangeHandler = (event) => {
    console.log("이미지 업로드 어떻게 되지요?=======>", event.target.files);
    const fileList = event.target.files;

    setImgs(fileList);
    handleIsWritingImg(true);
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
            <St.ImageInput
              type="file"
              accept="image/*"
              multiple
              // ref={imgInputRef}
              onChange={imgOnchangeHandler}
            />
            {/* <StImageIcon onClick={handleClick} /> */}
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
