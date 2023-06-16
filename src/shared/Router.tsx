import React from "react";
import Home from "../pages/home/Home";
import Chat from "../pages/test/Chat";
import Board from "../pages/board/Board.tsx";
import Write from "../pages/write/Write";
import MyPage from "../pages/user/MyPage";
import Search from "../pages/search/Search";
import Battle from "../pages/battle/RealTimeBattle";
import EditPost from "../components/post/EditPost";
import LogInPage from "../pages/auth/LogInPage";
import KakaoLogin from "../pages/auth/KakaoLogin";
import SignUpPage from "../pages/auth/SignUpPage.tsx";
import DoneBattle from "../pages/battle/DoneBattle";
import DetailPost from "../pages/detailPost/DetailPost.tsx";
import OnBoarding from "../pages/onboarding/OnBoarding";
import ProfileEditPage from "../pages/user/ProfileEditPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:postIdx" element={<DetailPost />} />
        <Route path="/board/:postIdx/edit" element={<EditPost />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/:sthId/profileedit" element={<ProfileEditPage />} />
        <Route path="/auth/kakao/redirect" element={<KakaoLogin />} />
        <Route path="/write" element={<Write />} />
        <Route path="/battle/chat" element={<Chat />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/donebattle" element={<DoneBattle />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
