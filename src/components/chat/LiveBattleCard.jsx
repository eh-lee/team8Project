import React, { useEffect, useState } from "react";
import battleCard from "../../assets/battle/battleCard.png"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/axios";
import { cookies } from "../../api/cookies";

const LiveBattleCard = () => {

    const nav = useNavigate();

    const [liveBattle, setLiveBattle] = useState({});
    // const [roomName, seRoomName] = useState({});

    const nickname = cookies.get('nickname');

    useEffect(() => {
        const getLiveBattle = async () => {
            try {
                const res = await instance.get('chat/hunsuChat/live');
                // console.log(res);
                // setLiveBattle(res.data);
            } catch (error) {
                console.error("LiveBattle Get", error);
            }
        };
        getLiveBattle();
    });

    const battleInHandler = () => {
        // nav(`/battle/chat?name=${nickname}&room=${roomName}`);
    }

    return (
        <StLiveBattleCardWrap>
            <StLiveBattleCardTitle>
                {/* <StLiveBattleCardTitleText>Q. {roomName}</StLiveBattleCardTitleText> */}
                <StLiveBattleCardTitleText>Q. 짱구는 착한 아이인가 나쁜 아이인가?</StLiveBattleCardTitleText>
            </StLiveBattleCardTitle>
            <StLiveBattleCardBtnCont>
                <StLiveBattleCardBtn onClick={battleInHandler}>참여하기</StLiveBattleCardBtn>
            </StLiveBattleCardBtnCont>
        </StLiveBattleCardWrap>
    );
};

export default LiveBattleCard;

const StLiveBattleCardWrap = styled.div`
    margin-top: 16px;
    padding-top: 14px;
    width: 400px;
    height: 170px;
    background-image: url(${battleCard});
    background-repeat: no-repeat;
    background-size: cover;
`;

const StLiveBattleCardTitle = styled.div`
    background-color: white;
    border-top: 2px solid #232335;
    border-bottom: 2px solid #232335;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StLiveBattleCardTitleText = styled.div`
    font-weight: 600;
    font-size: 18px;
    color: #2D2D2D;
`;

const StLiveBattleCardBtnCont = styled.div`
    width: 390px;
    height: 132px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
`;

const StLiveBattleCardBtn = styled.button`
    background: #3A3A59;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 82px;
    height: 30px;
    color: white;
    cursor: pointer;
`;

