import React, { useEffect } from "react";
import MobileLayout from "../../layout/MobileLayout";

const ProfileEditPage = () => {
  useEffect(() => {
    document.title = "훈수 - 회원 정보 수정";
  }, []);

  return (
    <MobileLayout>
      <div>Profile Edit Page</div>
    </MobileLayout>
  );
};

export default ProfileEditPage;
