import React, { useState } from "react";
import { useEffect } from "react";
import { instanceWithAuth } from "../../api/axios";
import none from "../../assets/imgs/detail/noneImg.png";
import * as St from "./DetailImgs.style"

const DetailImgs = ({ postIdx }) => {
  const [detailImgs, setDetailImgs] = useState([]);

  useEffect(() => {
    const getDetailImgs = async () => {
      try {
        const { data } = await instanceWithAuth.get(
          `/postCards/post/imgs/${postIdx}`
        );
        console.log("detail imgs========>", data.imgs);
        console.log("detail imgs length========>", data.imgs.length);
        console.log("detail imgs length========>", typeof data.imgs[0]);
        setDetailImgs(data.imgs);

        // index 0~3
        // detailImgs[0]
      } catch (error) {
        console.error("error", error);
      }
    };
    getDetailImgs();
  }, []);

  return (
    <>
      {detailImgs.length === 1 && detailImgs[0] === "" ? null : (
        <>
          {[...Array(4)].map((_, i) => (
            //   <StImgBox key={i} src={detailImgs[i] ? detailImgs[i] : none} />
            <St.ImgBox
              key={i}
              src={
                // https://nodes3newjean.s3.ap-northeast-2.amazonaws.com/1682685653374_327
                detailImgs[i] ? `process.env.REACT_APP_IMG_URL/${detailImgs[i]}` : none
              }
            />
          ))}
        </>
      )}
    </>
  );
};

export default DetailImgs;
