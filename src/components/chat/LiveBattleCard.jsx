import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/axios";
import { cookies } from "../../api/cookies";
import * as St from "./LiveBattleCard.style"

const LiveBattleCard = () => {
    const nav = useNavigate();

    const [roomName, setRoomName] = useState('');

    const nickname = cookies.get('nickname');

    useEffect(() => {
        const getLiveBattle = async () => {
            try {
                const {data} = await instance.get('chat/hunsuChat/live');
                setRoomName(data.roomName);
            } catch (error) {
                console.error("LiveBattle Get", error);
            }
        };
        getLiveBattle();
    }, []);

    const battleInHandler = () => {
        nav(`/battle/chat?name=${nickname}&room=${roomName}`);
    }

    return (
        <St.LiveBattleCardWrap>
            <St.TitleCont>
                <St.TitleText>Q. {roomName.slice(0,20)}</St.TitleText>            
            </St.TitleCont>
            <St.BtnCont>
                <St.Btn onClick={battleInHandler}>참여하기</St.Btn>
            </St.BtnCont>
        </St.LiveBattleCardWrap>
    );
};

export default LiveBattleCard;