import styled from "styled-components";
import { ReactComponent as Trash } from "../../assets/icons/common/trash.svg";
import {ReactComponent as ThumbsUp} from "../../assets/icons/common/thumbs-up.svg"

const ProConWrap = styled.div`
  padding: 5% 7.5%;
`;

const ProConHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.5%;
  /* border: 1px solid purple; */
`;

const ProConTitle = styled.div`
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 0.0056em;
  /* border: 1px solid tomato; */
`;

const ProConIcon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const ProConDelete = styled.div`
  color: rgb(120, 120, 120);

  &:hover {
    cursor: pointer;
    color: black;
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

const ProConBody = styled.div`
  /* border: 1px solid blue; */
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.5rem;
  text-align: center;
  align-items: center;
  gap: 5%;
`;

const ProConColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
`;


const DetailProColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  &:hover {
    cursor: pointer;
  }

  color: ${(props) => (props.isVoted ? "#ef3f61" : "black")};
`;

const ProBox = styled.p`
  /* border: 1px solid black; */
  color: #c4c4c4;
`;

const PollGraph = styled.div`
  /* border: 1px solid violet; */
  width: 67.5%;
  display: flex;
  flex-direction: row;
  /* flex-direction: row-reverse; */
  height: 65%;
`;

const ProCount = styled.div`
  padding-left: 5px;
  text-align: start;
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.85rem;
  /* width: 50%; */
  width: ${(props) => props.width}%;
  min-width: 10%;
  border-radius: 100px 0 0 100px;
  background-color: #ef3f61;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ConCount = styled.div`
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 0.85rem;
  /* width: 50%; */
  width: ${(props) => props.width}%;
  min-width: 10%;
  background-color: #42c8b7;
  border-radius: 0 100px 100px 0;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ThumbsDown = styled(ThumbsUp)`
  transform: scale(-1, -1);
`;

const ConBox = styled.div`
  /* border: 1px solid black; */
  color: #c4c4c4;
`;

const DetailConColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  &:hover {
    cursor: pointer;
  }

  color: ${(props) => (props.isVoted ? "#42c8b7" : "black")};
`;

export {
    ProConWrap,
    ProConHeader,
    ProConTitle,
    ProConIcon,
    ProConDelete,
    IconTrash,
    ProConBody,
    ProConColumn,
    DetailProColumn,
    ProBox,
    PollGraph,
    ProCount,
    ConCount,
    ThumbsDown,
    ConBox,
    DetailConColumn,
}