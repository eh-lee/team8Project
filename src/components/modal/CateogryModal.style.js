import styled from "styled-components";


const FooBG = styled.div`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CategoryModalOverlay = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 400px;
  box-shadow: 0.05rem 0.02rem 0.25rem rgba(0, 0, 0, 0.3);

  height: 40rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const CategoryModalRow = styled.div`
  display: flex;
`;

const ModalMainCat = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 1rem;
  width: 6rem;
  height: 100vh;
  background-color: rgb(245, 245, 245);
`;

const MainCat = styled.div` 
  width: 100%;
  height: 2.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.25rem;
  padding-left: 0.25rem;
  font-weight: bold;
  font-size: 1.05rem;
  color: "rgb(160,160,160)";
  ${({ isFirst }) => isFirst && `border-top-left-radius: 1rem;`};

  color: ${(props) =>
    props.isClicked === props.mainCatIdx ? "black" : "rgb(160, 160, 160)"};

  background-color: ${(props) =>
    props.isClicked === props.mainCatIdx ? "white" : "rgb(245, 245, 245)"};

  &:hover {
    color: black;
    background-color: white;
    cursor: pointer;
  }
`;

const ModalSubCat = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top-right-radius: 1rem;
  width: 19rem;
  height: 100vh;
`;

const SubCat = styled.div`
  max-width: 100%;
  height: 2.85rem;
  display: flex;
  align-items: center;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  font-weight: bold;
  font-size: 1.05rem;
  justify-content: space-between;
  color: rgb(160, 160, 160);

  ${({ isFirst }) => isFirst && `border-top-right-radius: 1rem;`};

  color: ${(props) =>
    props.isClicked === props.subCatIdx ? "black" : "rgb(160, 160, 160)"};

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export {
  FooBG,
  CategoryModalOverlay,
  CategoryModalRow,
  ModalMainCat,
  MainCat,
  ModalSubCat,
  SubCat,
}