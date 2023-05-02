import styled from "styled-components";
import battleCard from "../../assets/battle/battleCard.png"

const LiveBattleCardWrap = styled.div`
    margin-top: 16px;
    padding-top: 14px;
    width: 400px;
    height: 170px;
    background-image: url(${battleCard});
    background-repeat: no-repeat;
    background-size: cover;
`;

const TitleCont = styled.div`
    background-color: white;
    border-top: 2px solid #232335;
    border-bottom: 2px solid #232335;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TitleText = styled.div`
    max-width: 340px;
    font-weight: 600;
    font-size: 18px;
    color: #2D2D2D;
`;

const BtnCont = styled.div`
    width: 390px;
    height: 132px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
`;

const Btn = styled.button`
    background: #3A3A59;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 82px;
    height: 30px;
    color: white;
    cursor: pointer;
`;

export {
    LiveBattleCardWrap,
    TitleCont,
    TitleText,
    BtnCont,
    Btn,
}