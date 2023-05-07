import styled from "styled-components";

export const SnsLogin = styled.button`
  border: none;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background: url(${(props) => props.imgUrl}) no-repeat center;
  background-size: ${(props) => props.size || 100}%;
  filter: ${(props) => props.filter ? "grayscale(100%)" : "none"};;
  cursor: pointer;
`;