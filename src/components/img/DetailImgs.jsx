import React, { useState, useEffect } from "react";
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
        setDetailImgs(data.imgs);

      } catch (error) {
        console.error("이미지 get error", error);
      }
    };
    getDetailImgs();
  }, [postIdx]);

  return (
    <>
      {
      detailImgs.length === 1 && detailImgs[0] === "" ? null : (
        <>
          {/* {[...Array(4)].map((_, i) => (
            <St.ImgBox
              key={i}
              src={
               i < detailImgs.length
               ? `${process.env.REACT_APP_IMG_URL}/${detailImgs[i]}`
               : none
              }
            />
          ))} */}
          {
            detailImgs.map((img, i) => (
              <St.ImgBox
                key={i}
                src={`${process.env.REACT_APP_IMG_URL}/${img}`}
                alt={none}
              />
            ))
          }
        </>
      )}
    </>
  );
};

export default DetailImgs;
