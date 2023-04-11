// import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";

// export const GlobalStyles = createGlobalStyle`
//     ${reset};
//     :root{

//     }
// `;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    
    /* 웹 폰트 추가 */
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    :root{
        /* 웹 폰트 적용 */
        font-family: 'Pretendard-Regular', sans-serif;
    }
`;

