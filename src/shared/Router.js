import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/auth/LogInPage'
import SignUpPage from '../pages/auth/SignUpPage'
import ProfileEditPage from '../pages/user/ProfileEditPage'
import MyPage from '../pages/user/MyPage'
import Home from '../pages/Home'
import KakaoLogin from '../pages/auth/KakaoLogin'
import TotalBoard from '../pages/board/TotalBoard'
import HumourBoard from '../pages/board/HumourBoard'
import SeriousBoard from '../pages/board/SeriousBoard'
import Battle from '../pages/Battle'
import Write from '../pages/Write'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/totalboard" element={<TotalBoard />} />
        <Route path="/humourboard" element={<HumourBoard />} />
        <Route path="/seriousboard" element={<SeriousBoard />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/:sthId/profileedit" element={<ProfileEditPage />} />
        <Route path="/KaKaoLogin" element={<KakaoLogin />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router