import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { instanceWithAuth } from "../../api/axios";
import none from "../../assets/imgs/detail/noneImg.png";

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
            <StImgBox
              key={i}
              src={
                detailImgs[i] ? `http://localhost:3000/${detailImgs[i]}` : none
              }
            />
          ))}
        </>
      )}
    </>
  );
};

export default DetailImgs;

const StImgBox = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 7.27273px;
  border: 1px solid green;
`;
