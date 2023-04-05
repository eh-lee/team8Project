import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/auth/LogInPage'
import SignUpPage from '../pages/auth/SignUpPage'
import ProfileEditPage from '../pages/user/ProfileEditPage'
import MyPage from '../pages/user/MyPage'
import Home from '../pages/Home'
import KakaoLogin from '../pages/auth/KakaoLogin'
import Board from '../pages/board/Board'
import SeriousBoard from '../pages/board/SeriousBoard'
import HumourousBoard from '../pages/board/HumourousBoard'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/humourous" element={<HumourousBoard />} />
        <Route path="/board/serious" element={<SeriousBoard />} />
        {/* <Route path="/:sthId/mypage" element={<MyPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/:sthId/profileedit" element={<ProfileEditPage />} />
        <Route path="/KaKaoLogin" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router