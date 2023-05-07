import styled from "styled-components";

const NoSearchCont = styled.div`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoSearchImg = styled.img`
  width: 94.49px;
  height: 81.33px;
  margin-bottom: 16px;
`;

const NoSearchText = styled.span`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;


const Header = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(70, 70, 70);
  margin-top: 16px;
  /* margin: 16px 0; */
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
`;

const Main = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #E1E2E4;
`;

const PostCardList = styled.div`
  border: 1px solid red;
  margin-top: 170px;
  height: 45.28rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export { Header, Wrap, Main, NoSearchCont, NoSearchImg, NoSearchText, PostCardList }