import styled from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";
import { ReactComponent as VoteIcon } from "../../assets/icons/common/vote.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/common/arrowdown.svg";

const VoteText = styled.p`
  position: absolute;
  z-index: 1;
  color: #3a3a59;
  font-size: 14px;
  left: 45px;
  top: 7px;
`;

const Poll = styled.button`
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  min-width: 113px;
  padding: 3px 5px;
  border: 1px solid #c4c4c4;
  border-radius: 2rem;
  background-color: white;

  &:hover {
    color: white;
    outline: none;
    cursor: pointer;
  }
  position: absolute;
  z-index: 1;
  bottom: 12px;
  /* 이걸로 버튼 전체 높이 조정 */
  left: 30px;
`;

const Vote = styled(VoteIcon)`
  left: 15px;
  top: 3px;
  position: absolute;
  z-index: 1;
  &:hover {
    cursor: pointer;
    path:nth-child(1),
    path:nth-child(2) {
      stroke: #3a3a59;
    }
  }
`;


const IconArrowDown = styled(ArrowDown)`
  width: 16px;
  height: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const IconTrash = styled(Trash)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
    path:nth-child(1) {
      stroke: #3a3a59;
    }
  }
`;

const ModalCont = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const WriteTitle = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  padding: 0.5rem 1rem;
  width: 80%;
  height: 64px;
  border: none;
  border-bottom: 0.1rem solid #E1E2E4;

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid rgb(180, 180, 180);
  }

  ::placeholder {
    color: #DCDCDC;
  }
`;

const MainCat = styled.div`
`;

const SubCat = styled.div`
  color: rgb(180, 180, 180);
`;

const WriteContent = styled.textarea`
  font-size: 0.85rem;
  width: 80%;
  padding: 0 1rem 1rem 1rem;
  border: none;
  min-height: 40vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  resize: none;
  white-space: pre-wrap;
  word-break: break-all;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #DCDCDC;
    white-space: pre-wrap;
  }
`;

const WriteForm = styled.form`
  margin-top: 48px;
  padding-top: 16px;
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const PageWithFooterWrapper = styled.div`
  margin-top: 3.5rem;
`;

const WriteCanc = styled.div`
  line-height: 24px;
  margin-left: 7.5%;
  color: rgb(100, 100, 100);
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WritePost = styled.div`
  line-height: 24px;
  margin-right: 7.5%;
  color: rgb(100, 100, 100);
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  height: 64px;
  color: rgb(70, 70, 70);
`;

const WriteHeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #E1E2E4;
  height: 64px;
  `;

const WriteCategory = styled.div`
  gap: 8px;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  font-weight: bold;
`;

const IconCont = styled.div`
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

export { VoteText, Poll, Vote, IconArrowDown, IconCont, IconTrash, MainCat, ModalCont, PageWithFooterWrapper, SubCat, WriteCanc, WriteCategory, WriteContent, WriteForm, WriteHeader, WriteHeaderCont, WritePost, WriteTitle, }