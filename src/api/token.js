export const access_token = decodeURI(document.cookie).replace("access_token=", "").replace(/; nickname=([^;]*)/, "");

// 맞눈디..