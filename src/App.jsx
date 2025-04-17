import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Home from "pages/Home/index";
import NotFound from "pages/NotFound";
import Book from "pages/Book";
import BookTwo from "pages/BookTwo";
import BookThree from "pages/BookThree";
import AboutUs from "pages/AboutUs";
import UserRegister from "pages/UserRegister";
import UserLogin from "pages/UserLogin";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "antd/dist/reset.css";
import MyTickets from "pages/MyTickets";
import AdminDashboard from "pages/Admin/AdminDashboard";
import AdminLogin from "pages/Admin/AdminLogin";

const API_BASE = "http://localhost:4000";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      try {
        const response = await axios.get(`${API_BASE}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data.data.user;
        console.log("User data:", userData);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<UserRegister />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route
            path="login"
            element={
              <UserLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />

          {loggedIn ? (
            <Route path="my-tickets" element={<MyTickets />} />
          ) : (
            <Route
              path="*"
              element={
                <UserLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              }
            />
          )}

          <Route path="aboutus" element={<AboutUs />} />
          {loggedIn ? (
            <Route path="book" element={<Book />} />
          ) : (
            <Route
              path="*"
              element={
                <UserLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              }
            />
          )}

          <Route path="booktwo" element={<BookTwo />} />

          <Route path="bookthree" element={<BookThree />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
