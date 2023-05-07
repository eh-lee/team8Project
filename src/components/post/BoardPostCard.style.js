import styled from "styled-components";
import { ReactComponent as Vote } from "../../assets/icons/common/vote.svg";
import { ReactComponent as View } from "../../assets/icons/common/eye.svg";
import { ReactComponent as Like } from "../../assets/icons/common/like.svg";
import { ReactComponent as Comment } from "../../assets/icons/common/comment.svg";
import { ReactComponent as Img } from "../../assets/icons/common/img.svg";



const PostCardWrap = styled.div`
  background-color: white;
  padding: 8% 0 5% 7%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  ${({ isFirst }) => isFirst && `border-top-radius: 1rem;`};

  &:hover {
    cursor: pointer;
  }
`;

const PostCardTitleBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 0.5rem;
`;

const PostCardRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostCardCatBtn = styled.button`
  height: 18px;
  color: white;
  background: #3a3a59;
  border-radius: 100px;
  padding: 0 4px 0px 6px;
  border: none;
  font-size: 0.5rem;
`;

const PostCardTitle = styled.div`
  width: 80%;
  font-size: 1.25rem;
`;

const PostCardTitleIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8a8a8a;
`;

const IconVote = styled(Vote)`
  path:nth-child(1),
  path:nth-child(2) {
    stroke: #c4c4c4;
    stroke-width: 2px;
  }
`;

const IconImg = styled(Img)`
  /* path:nth-child(1),
  path:nth-child(2) {
    stroke: #c4c4c4;
    stroke-width: 2px;
  } */
`;

const PostCardContentBox = styled.div`
  max-height: 3vh;
  /* max-height: 1%; */
  /* 최대 2줄 */
  width: 90%;
  margin-top: 2.5%;
  word-wrap: break-word;
  display: flex;
  margin-bottom: 5%;
`;

const PostCardContent = styled.div`
  color: #8a8a8a;
  display: flex;
`;

const PostCardInfoBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  color: gray;
`;

const DetailPostContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8a8a8a;
`;

const DetailPostContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  font-size: 20px;
`;

const IconLike = styled(Like)`
  path:nth-child(1) {
    stroke-width: 2.25px;
  }
`;

const IconView = styled(View)`
  path:nth-child(1),
  path:nth-child(2) {
    stroke-width: 2.25px;
  }
`;

const IconComment = styled(Comment)`
  path:nth-child(1) {
    stroke-width: 2.25px;
  }
`;

const DetailPostContentCount = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 18px;
  height: 18px;
  font-size: 14px;
`;

export {
    PostCardWrap,
    PostCardTitleBox,
    PostCardRow,
    PostCardCatBtn,
    PostCardTitle,
    PostCardTitleIcon,
    IconVote,
    IconImg,
    PostCardContentBox,
    PostCardContent,
    PostCardInfoBox,
    DetailPostContent,
    DetailPostContentIcon,
    IconLike,
    IconView,
    IconComment,
    DetailPostContentCount,
}