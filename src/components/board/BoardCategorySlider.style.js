import styled from "styled-components";

const CatButton = styled.button`
  margin-left: ${(props) => (props.index === 0 ? "30px" : "10px")};
`;

const CatSliderWrap = styled.div`
  width: 400px;
  overflow-x: hidden;
`;
const CatLeftButton = styled.button`
width: 15px;
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 1;
  top: 124px;
  left: 10px;
  border-radius: 50%;
  background-color: rgba(46, 46, 71, 0.3);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const CatRightButton = styled.button`
width: 15px;
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 1;
  top: 124px;
  left: 365px;
  border-radius: 50%;
  background-color: rgba(46, 46, 71, 0.3);
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const CategorySlider = styled.div`
  padding: 5% 0;
  width: 1600px;
  background-color: rgb(220, 220, 220, 0.35);
  transform: translateX(${(props) => props.currentPosition}px);
  transition: transform 0.5s ease-in-out;

  & > button {
    display: inline-block;
    color: #ef3f61;
    background-color: white;
    border: 0.1rem solid rgb(180, 180, 180);
    border-radius: 1.75rem;
    padding: 0.3rem 1rem;
  }

  & > button:focus {
    background-color: rgb(239, 63, 97);
    /* theme color */
    color: white;
    border: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  CatButton,
  CatSliderWrap,
  CatLeftButton,
  CatRightButton,
  CategorySlider
};