import React, { useEffect, useState } from "react";
import DetailPoll from "../../components/detail/DetailPoll";
import DetailHeader from "../../components/header/DetailHeader";
import MobileLayout from "../../layout/MobileLayout";
import DetailPostContents from "../../components/detail/DetailPostContents";
import DetailPostCommentsList from "../../components/detail/DetailPostCommentsList";
import { useParams } from "react-router-dom";
import { instance, instanceWithAuth } from "../../api/axios";

const DetailPost = () => {
  const { postIdx } = useParams();
  const [detailPostCat, setDetailPostCat] = useState([]);

  useEffect(() => {
    const getDetailPost = async () => {
      const { data } = await instance.get(
        `/postCards/post/category/${postIdx}`
      );
      setDetailPostCat(data);
      console.log("진짜 데이터를 좀 보자", data);
    };
    getDetailPost();
  }, [postIdx]);

  const [detailPoll, setDetailPoll] = useState({});

  useEffect(() => {
    const getDetailPoll = async () => {
      const { data } = await instanceWithAuth.get(
        `/postCards/post/contents/${postIdx}`
      );
      setDetailPoll(data.contents);
    };
    getDetailPoll();
  }, [postIdx]);

  return (
    <>
      <MobileLayout>
        <DetailHeader postIdx={postIdx} detailPostCat={detailPostCat} />
        <DetailPostContents />
        <DetailPoll postIdx={postIdx} detailPoll={detailPoll} />
        <DetailPostCommentsList postIdx={postIdx} />
      </MobileLayout>
    </>
  );
};

export default DetailPost;
