import React, { useState } from "react";
import PollModal from "../modal/PollModal";
import ModalPortal from "../modal/ModalPortal";
import * as St from "./WriteFooter.style"
import WriteImg from "../img/WriteImg";
import none from "../../assets/imgs/detail/noneImg.png";

const WriteFooter = ({ setImgs }) => {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  // 이미지 관리
  const [prevImgs, setPrevImgs] = useState([]);

  const imgOnchangeHandler = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // 첨부 가능한 최대 파일 개수를 4개로 제한

    // WriteForm으로 데이터 올림
    setImgs(files);
    
    // 프리뷰
    const images = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        images.push(e.target.result);
        if (images.length === files.length) {
          setPrevImgs(images);
        }
      };
    }
  };

  // 이미지 업로드 취소 버튼 핸들러
  const CancleHandler = () => {
    setPrevImgs([]);
    setImgs([]);
  }

  const pollModalOpenHandler = () => {
    setIsPollModalOpen(true);
  };
  const pollModalCloseHandler = () => {
    setIsPollModalOpen(false);
  };

  return (
    <>
    {
      prevImgs.length !== 0 &&
      <St.PrevImgCont>
      <St.CancleBtn onClick={CancleHandler}>이미지 업로드 취소</St.CancleBtn>
        <St.PrevImgs>
          {[...Array(4)].map((_, i) => (
              <WriteImg key={i} prevImg={i < prevImgs.length? prevImgs[i] : none} />
            ))
          }
        </St.PrevImgs>
      </St.PrevImgCont>
    }

    <St.Footer>
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
    </>
  );
};

export default WriteFooter;
