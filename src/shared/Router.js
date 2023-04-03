import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/auth/LogInPage'
import SignUpPage from '../pages/auth/SignUpPage'
import ProfileEditPage from '../pages/user/ProfileEditPage'
import MyPage from '../pages/user/MyPage'
import Home from '../pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/:sthId/mypage" element={<MyPage />} />
        <Route path="/:sthId/profileedit" element={<ProfileEditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
