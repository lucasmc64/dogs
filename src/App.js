import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./Contexts/UserContext";

import ProtectedRoute from "./Components/Helper/ProtectedRoute";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile/UserProfile";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
