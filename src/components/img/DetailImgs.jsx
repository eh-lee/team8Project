import React, { useState } from "react";
import { useEffect } from "react";
import { instanceWithAuth } from "../../api/axios";
import none from "../../assets/imgs/detail/noneImg.png";
import * as St from "./DetailImgs.style";

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
          {detailImgs.map((img, i) => (
            <St.ImgBox
              key={i}
              src={`${process.env.REACT_APP_IMG_URL}/${img}`}
              alt={none}
            />
          ))}
        </>
      )}
    </>
  );
};

export default DetailImgs;
