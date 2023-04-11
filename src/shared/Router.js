import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/auth/LogInPage'
import SignUpPage from '../pages/auth/SignUpPage'
import ProfileEditPage from '../pages/user/ProfileEditPage'
import MyPage from '../pages/user/MyPage'
import Home from '../pages/Home'
import KakaoLogin from '../pages/auth/KakaoLogin'
import Board from '../pages/board/Board'
import Battle from '../pages/Battle'
import DetailPost from '../pages/detailPost/DetailPost'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:postIdx" element={<DetailPost />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/:sthId/profileedit" element={<ProfileEditPage />} />
        <Route path="/KaKaoLogin" element={<KakaoLogin />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router