import styled from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/common/arrowdown.svg";



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
  font-size: 1.3rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  width: 80%;
  border: none;
  border-bottom: 0.1rem solid rgb(180, 180, 180);

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid rgb(180, 180, 180);
  }

  ::placeholder {
    color: rgb(180, 180, 180);
  }
`;

const MainCat = styled.div``;

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
    color: rgb(180, 180, 180);
    white-space: pre-wrap;
  }
`;

const WriteForm = styled.form`
margin-top: 3.5rem;
  padding-top: 1rem;
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
  margin-left: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

const WritePost = styled.div`
  margin-right: 7.5%;
  color: rgb(180, 180, 180);
  font-size: 0.9rem;
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
  color: rgb(70, 70, 70);
`;

const WriteHeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid rgb(180, 180, 180);
  padding-bottom: 2vh;
  height: 5vh;
`;

const WriteCategory = styled.div`
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const IconCont = styled.div`
  color: rgb(180, 180, 180);

  &:hover {
    cursor: pointer;
    color: rgb(70, 70, 70);
  }
`;

export { IconArrowDown, IconCont, IconTrash, MainCat, ModalCont, PageWithFooterWrapper, SubCat, WriteCanc, WriteCategory, WriteContent, WriteForm, WriteHeader, WriteHeaderCont, WritePost, WriteTitle, }