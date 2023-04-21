import { useState } from 'react'

export function useFormattingDate (createdAt) {

    const [createdDate, setCreatedDate] = useState("");

    const formattingDate = () => {

        // createdAt 값을 Date 객체로 변환
        const date = new Date(createdAt);

        // 원하는 형식으로 포맷팅
        const year = date?.getFullYear();
        const month = String(date?.getMonth() + 1).padStart(2, "0");
        const day = String(date?.getDate()).padStart(2, "0");
        const hour = String(date?.getHours()).padStart(2, "0");
        const minute = String(date?.getMinutes()).padStart(2, "0");

        const formattedDate = `${year}.${month}.${day}  ${hour}:${minute}`;

        // 포맷팅한 값을 상태로 저장
        setCreatedDate(formattedDate);
    };

    return [createdDate, formattingDate];
}

