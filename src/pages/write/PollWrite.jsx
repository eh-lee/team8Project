import React from 'react'
import styled from 'styled-components';
import MobileLayout from '../../layout/MobileLayout';
import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from 'react-router-dom';

const PollWrite = () => {
    const nav = useNavigate();
    return (
        <MobileLayout>
            <PollWriteHeader>
                <PollWriteHeaderCont>
                    <PollWriteBack onClick={() => nav('-1')}>
                        <MdArrowBackIosNew />
                    </PollWriteBack>
                    <PollWriteCategory>
                        <PollWirteTitle>투표</PollWirteTitle>
                    </PollWriteCategory>
                    <PollMarginRight />
                </PollWriteHeaderCont>
                {/* <WriteHeaderRightMargin /> */}
            </PollWriteHeader>

            <PollWriteMain>
                <PollType>
                  <PollTypeText>투표 유형</PollTypeText>
                  <Row>
                    <PollTypeSelect></PollTypeSelect>
                    <PollTypeSelect></PollTypeSelect>
                  </Row>
                  
                </PollType>

                <PollTitle>
                  <PollTitleText>투표 제목</PollTitleText> 
                  <PollTitleInput placeholder='제목을 입력해 주세요(50자 이내).'></PollTitleInput>
                </PollTitle>
                
                <PollSelect>
                  <PollSelectText>투표 제목</PollSelectText>
                  <PollSelectInput placeholder='보기를 입력해 주세요(50자 이내).'></PollSelectInput>
                  {/* <PollSelectInput placeholder='보기를 입력해 주세요(50자 이내).'></PollSelectInput> */}
                  {/* <PollSelectInput placeholder='보기를 입력해 주세요(50자 이내).'></PollSelectInput> */}
                </PollSelect>
            </PollWriteMain>





        </MobileLayout>
    )
};

export default PollWrite

const Row = styled.div`
display:flex;
flex-direction:row;
`
const PollTypeSelect = styled.div``
const PollTitleInput = styled.input``
const PollSelectInput = styled.input``
const PollTypeText = styled.div``
const PollTitleText = styled.div``
const PollSelectText = styled.div``
const PollType = styled.div`
`
const PollTitle = styled.div`
`
const PollSelect = styled.div`
`


const PollWriteMain = styled.form`
display: flex;
flex-direction: column;
gap: 2.5vh;
margin: 10vh 0;
/* align-items: ; */
`




const PollWirteTitle = styled.div`
`



const PollMarginRight = styled.div`
    width: 0.9rem;
    margin-right: 5vw;
`;


const PollWriteCategory = styled.div`
border: 1px solid gray;
  gap: 0.25rem;
  display: flex;
  font-size: 0.95rem;
  font-weight: bold;
`;

const PollWriteBack = styled.div`
    border: 1px solid red;
    margin-left: 5vw;
    color: rgb(180, 180, 180);
    font-size: 0.9rem;
    
    &:hover {
      cursor: pointer;
      color: rgb(70, 70, 70);
    }
`;

const PollWriteHeaderCont = styled.div`
border: 1px solid tomato;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
border-bottom: 0.1rem solid rgb(180, 180, 180);
// *============ HEADER 높이 ===============*
  padding-bottom: 2vh;
  height: 5vh;
  // *============ HEADER 높이 ===============*
`

const PollWriteHeader = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 400px;
  color: rgb(70, 70, 70);
`;