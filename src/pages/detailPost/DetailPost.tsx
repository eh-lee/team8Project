import React, { useEffect, useState } from "react";
import DetailPoll from "../../components/detail/DetailPoll";
import DetailHeader from "../../components/header/DetailHeader";
import MobileLayout from "../../layout/MobileLayout";
import DetailPostContents from "../../components/detail/DetailPostContents";
import DetailPostCommentsList from "../../components/detail/DetailPostCommentsList";
import { useParams } from "react-router-dom";
import { instance, instanceWithAuth } from "../../api/axios";

interface DetailPostProps {
  postIdx: string;
  [key: string]: string | undefined;
}

interface DetailPostData {
  post: {
    nickname: string;
  };
}

const DetailPost: React.FC = () => {
  const { postIdx } = useParams<DetailPostProps>();
  const [detailPostCat, setDetailPostCat] = useState<any[]>([]);
  const [writerNickname, setWriterNickname] = useState<string>("");

  useEffect(() => {
    const getDetailPost = async () => {
      const { data } = await instanceWithAuth.get<DetailPostData>(
        `/postCards/post/${postIdx}`
      );
      setWriterNickname(data.post.nickname);
    };
    getDetailPost();
  }, [postIdx]);

  useEffect(() => {
    const getDetailPostCat = async () => {
      const { data } = await instance.get<any[]>(
        `/postCards/post/category/${postIdx}`
      );
      setDetailPostCat(data);
    };
    getDetailPostCat();
  }, [postIdx]);

  const [detailPoll, setDetailPoll] = useState<any>({});

  useEffect(() => {
    const getDetailPoll = async () => {
      const { data } = await instanceWithAuth.get<any>(
        `/postCards/post/contents/${postIdx}`
      );
      setDetailPoll(data.contents);
    };
    getDetailPoll();
  }, [postIdx]);

  return (
    <>
      <MobileLayout>
        <DetailHeader
          postIdx={postIdx}
          detailPostCat={detailPostCat}
          writerNickname={writerNickname}
        />
        <DetailPostContents />
        <DetailPoll postIdx={postIdx} detailPoll={detailPoll} />
        <DetailPostCommentsList postIdx={postIdx} />
      </MobileLayout>
    </>
  );
};

export default DetailPost;
