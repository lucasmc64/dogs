import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./Contexts/UserContext";

import ProtectedRoute from "./Components/Helper/ProtectedRoute";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
