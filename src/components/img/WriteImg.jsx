import React from 'react'
import * as St from './WriteImg.style'
// import none from "../../assets/imgs/detail/noneImg.png";

const WriteImg = ({ prevImg }) => {
    return (
            <St.PrevImg src={prevImg} />
    )
}

export default WriteImg