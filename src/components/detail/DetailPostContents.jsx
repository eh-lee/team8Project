import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Like from "../like/Like";
import { instanceWithAuth } from "../../api/axios";
import level1 from "../../assets/icons/userLevel/level icon=초보, size=Default.png";
import DetailImgs from "./DetailImgs";
import { ReactComponent as IconComment } from "../../assets/icons/common/comment.svg";
import { ReactComponent as IconView } from "../../assets/icons/common/eye.svg";
import * as St from "./DetailPostContents.style"

const DetailPostContents = () => {
  const { postIdx } = useParams();

  // 상세 게시글을 담을 state
  const [detailPost, setDetailPost] = useState([]);

  // 게시글 작성한 시간
  const [createdDate, setCreatedDate] = useState("");

  // 게시글 좋아요 관리 state
  const [postLikesCount, setPostLikesCount] = useState(null);
  const [isLike, setIsLike] = useState(null);

  // 상세 게시글 정보 불러오기
  useEffect(() => {
    const getDetailPost = async () => {
      try {
        const { data } = await instanceWithAuth.get(
          `/postCards/post/${postIdx}`
        );
        setDetailPost(data.post);

        const formattingTime = data.post.createdAt.replace(
          /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,
          "$1.$2.$3 $4:$5"
        );

        setCreatedDate(formattingTime);
        setPostLikesCount(+data.post.likesCount);
        setIsLike(data.post.IsLike);
      } catch (error) {
      }
    };
    getDetailPost();
  }, []);

  // 게시글 좋아요 버튼
  const clickPostLike = () => {
    instanceWithAuth.put(`/postlike/post/${postIdx}`);
    setIsLike((prev) => !prev);
    setPostLikesCount((prev) => (isLike ? prev - 1 : prev + 1));
  };

  return (
    <>
      {/* 상세 게시글 정보 */}
      <St.InfoWrap>
        {/* 차후에 User Lv image 들어갈 예정 */}
        <St.UserInfoLvImg src={level1} />
        <St.InfoCont>
          <St.UserInfoCont>
            <St.UserInfoNickname>
              {detailPost.nickname}
            </St.UserInfoNickname>
            <St.UserInfoLevel>
              {detailPost.userLevel}레벨
            </St.UserInfoLevel>
          </St.UserInfoCont>
          <St.UserInfoCreatedAt>
            {createdDate}
          </St.UserInfoCreatedAt>
        </St.InfoCont>
      </St.InfoWrap>
      {/* 게시글 내용 */}
      <St.ContentWrap>
        <St.ContentTitle>{detailPost.title}</St.ContentTitle>
        <St.ContentDesc>{detailPost.desc}</St.ContentDesc>
        {/* 게시글 정보 */}
        <St.ImgWrap>
          <DetailImgs postIdx={postIdx} />
        </St.ImgWrap>

        <St.ContentInfo>
          {/* 좋아요 버튼, 개수 */}
          <St.ContentIconCont>
            <St.ContentIconCont
              onClick={() => clickPostLike()}
              pointerOn="on"
            >
              <Like isLike={isLike} />
            </St.ContentIconCont>
            <St.ContentCount>
              {postLikesCount}
            </St.ContentCount>
          </St.ContentIconCont>
          {/* 조회수 */}
          <St.ContentIconCont>
            <St.ContentIcon>
              {/* <StDetailPostContentImg src={view} /> */}
              <IconView />
            </St.ContentIcon>
            <St.ContentCount>
              {detailPost.postViewCount}
            </St.ContentCount>
          </St.ContentIconCont>
          {/* 댓글 개수 */}
          <St.ContentIconCont>
            <St.ContentIcon>
              {/* <StDetailPostContentImg src={comment} /> */}
              <IconComment />
            </St.ContentIcon>
            <St.ContentCount>
              {+detailPost.commentCount}
            </St.ContentCount>
          </St.ContentIconCont>
        </St.ContentInfo>
      </St.ContentWrap>
    </>
  );
};

export default DetailPostContents;