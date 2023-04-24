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
import Write from '../pages/write/Write'
import DetailPost from '../pages/detailPost/DetailPost'
import EditPost from '../components/post/EditPost'
import A from '../pages/test/A'
import B from '../pages/test/B'

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
        <Route path="/board/:postIdx" element={<DetailPost />} />
        <Route path="/board/:postIdx/edit" element={<EditPost />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/:sthId/profileedit" element={<ProfileEditPage />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/write" element={<Write />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router