import React from 'react'
import chattingyet from '../../assets/cattingyet.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Chatting = () => {
    const nav = useNavigate();
  return (
    <ChattingYet onClick={()=> {nav('/battle')}} >
        <img src={chattingyet} />
    </ChattingYet>
  )
}

export default Chatting

const ChattingYet = styled.div`
    margin-top: 16px;
`