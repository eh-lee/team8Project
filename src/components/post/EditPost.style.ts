import styled from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/common/arrowdown.svg";


const WriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  height: 64px;
  width: 400px;
  display: flex;
  align-items: center;
  color: rgb(70, 70, 70);
`;

const WriteHeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #E1E2E4;
  height: 100%;
  width: 100%;
`;

const WriteCanc = styled.div`
  margin-left: 7.5%;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #DCDCDC;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WriteCategory = styled.div`
  gap: 8px;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const MainCat = styled.div``;

const SubCat = styled.div`
  color: rgb(180, 180, 180);
`;

const IconCont = styled.div`
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const ArrowDownIcon = styled(ArrowDown)`
  width: 16px;
  height: 16px;
  &:hover {
    cursor: pointer;
    /* path:nth-child(1) {
      stroke: #3a3a59;
    } */
  }
`;

const WritePost = styled.div`
  margin-right: 7.5%;
  color: #DCDCDC;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WriteForm = styled.form`
  padding: 8px 0;
  margin-top: 64px;
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const WriteTitle = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.023em;
  padding: 16px 8px;
  width: 80%;
  height: 64px;
  border: none;
  margin-bottom: 16px;
  border-bottom: 0.1rem solid #F4F4F5;

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid rgb(180, 180, 180);
  }

  ::placeholder {
    color: rgb(180, 180, 180);
  }
`;

const WriteContent = styled.textarea`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0056em;
  width: 80%;
  padding: 8px;
  border: none;
  min-height: 40vh;
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
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
    color: #F4F4F5;
    white-space: pre-wrap;
  }
`;

const TrashIcon = styled(Trash)`
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

export {
    WriteHeader,
    WriteHeaderCont,
    WriteCanc,
    WriteCategory,
    MainCat,
    SubCat,
    IconCont,
    ArrowDownIcon,
    WritePost,
    WriteForm,
    WriteTitle,
    WriteContent,
    TrashIcon,
    ModalCont,
}