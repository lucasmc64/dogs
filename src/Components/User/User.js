import React from "react";
import { Route, Routes } from "react-router-dom";

import UserHeader from "./UserHeader/UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost/UserPhotoPost";
import UserStats from "./UserStats/UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="postar" element={<UserPhotoPost />} />
      </Routes>
    </section>
  );
};

export default User;