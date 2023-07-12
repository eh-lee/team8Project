import styled from "styled-components";
import { ReactComponent as View } from "../../assets/icons/common/eye.svg";
import { ReactComponent as Img } from "../../assets/icons/common/img.svg";
import { ReactComponent as Like } from "../../assets/icons/common/like.svg";
import { ReactComponent as Comment } from "../../assets/icons/common/comment.svg";


const PostCardWrap = styled.div`
  border-radius: 0.75rem;
  background-color: #ffffff;

  width: 340px;
  height: 148px;


  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PostCardCont = styled.div`
  height: 148px;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.ul`

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 308px;
  height: 46px;

  gap: 4px;

  margin: 12px 16px 0 16px;

  margin-bottom: 4px;
`;

const MainCategory = styled.li`
  height: 18px;
`;

//* =========== Cat. Label ===============
const CatBtn = styled.button`
  height: 18px;
  color: white;
  background: #3a3a59;
  border-radius: 100px;
  padding: 0 4px 0px 6px;
  border: none;
  font-size: 10px;
`;
//* =========== Cat. Label ===============

const Title = styled.li`
  font-size: 18px;
  width: 308px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconImg = styled(Img)`
  width: 16px;
  height: 16px;
  path:nth-child(1) {
    stroke: #c4c4c4;
  }
`;

const ContentBox = styled.div`
  width: 308px;
  height: 49px;
  display: flex;
  margin-bottom: 4px;
  margin-left: 16px;
  border-bottom: 1px solid #e1e2e4;

  max-height: 30vh;
  word-wrap: break-word;
`;

const Content = styled.div`
  color: gray;
  display: flex;
  font-size: 14px;
`;

const InfoBox = styled.ul`
  width: 308px;
  height: 16px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.9rem;

  font-size: 10px;
  margin: 0 16px 12px 16px;
`;

const InfoContent = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: gray;
`;

const InfoContentIcon = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconLike = styled(Like)`
  path:nth-child(1) {
    stroke: #8a8a8a;
  }
`;

const IconView = styled(View)`
  path:nth-child(1),
  path:nth-child(2) {
    stroke: #8a8a8a;
  }
`;

const IconComment = styled(Comment)`
  path:nth-child(1) {
    stroke: #8a8a8a;
  }
`;

const InfoContentCount = styled.div`
  width: 24px;
`;


const PostCardIsImgIn = styled.img`
  width: 16px;
  height: 16px;
`;


const PostCardInfoContentImg = styled.img`
  width: 16px;
  height: 16px;
`;

export {
    PostCardWrap,
    PostCardCont,
    TitleBox,
    MainCategory,
    CatBtn,
    Title,
    IconImg,
    ContentBox,
    Content,
    InfoBox,
    InfoContent,
    InfoContentIcon,
    IconLike,
    IconView,
    IconComment,
    InfoContentCount,
    PostCardIsImgIn,
    PostCardInfoContentImg,
}