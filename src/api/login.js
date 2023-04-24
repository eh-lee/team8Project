const {
    REACT_APP_KAKAO_REST_API_KEY,
    REACT_APP_KAKAO_REDIRECT_URI,

} = process.env;

// console.log(".env=========>", process.env);

// export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
// export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=http://hunsu.net/kakaoLogin&response_type=code`;
// export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=  &response_type=code`;