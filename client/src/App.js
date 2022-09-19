import React, { useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext, AuthContextProvider } from "./contexts/Auth/AuthContext";
import Emotions from "./pages/Emotions/Emotions";
import Friend from "./pages/Friend/Friend";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

// FOR TESTING ONLY
global.testImgUrl = "https://i.ibb.co/37YHLK3/profile-pic.png";
global.apiUrl = "http://localhost:5000/api";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={user ? <Profile /> : <Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/emotion" element={<Emotions />} />
          <Route path="/friend" element={<Friend />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
