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
import Write from '../pages/write/Write'
import DetailPost from '../pages/detailPost/DetailPost'
import EditPost from '../components/post/EditPost'
import Chat from "../pages/test/Chat"

import Join from '../pages/test/Join'
import Battle from '../pages/battle/RealTimeBattle'
import DoneBattle from '../pages/battle/DoneBattle'
import Search from '../pages/Search'

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
        <Route path="/auth/kakao/redirect" element={<KakaoLogin />} />
        <Route path="/write" element={<Write />} />
        {/* test */}
        <Route path="/battle/chat" element={<Chat />} />
        {/* <Route path="/battle" element={<Join />} /> */}
        <Route path="/battle" element={<Battle />} />
        <Route path="/donebattle" element={<DoneBattle />} />
        <Route path="/search" element={<Search />} />
        {/* [V] 1. Join을 CreateChatModal로 모달화하고, 
        [ ] 2. battle 페이지 jsx 다시 가져오고 모달 연결
        <Route path="/battle" element={<Battle />} />
         */}
        {/* test */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router