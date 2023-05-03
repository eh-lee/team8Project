import { Link } from "react-router-dom";
import styled from "styled-components";

const Cont = styled.div`
  margin-top: 27.5vh;
  gap: 0.25rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SignUp = styled(Link)`
  color: inherit;
`;

const Question = styled.div`
  color: rgb(180, 180, 180);
`;

export { Cont, SignUp, Question }