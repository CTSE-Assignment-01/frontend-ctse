import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserLogin = ({ loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(loggedIn);

  const loginUser = async () => {
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(API_BASE + "/users/login", user);
      const { token, user: loggedInUser } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      await setLoggedIn(true); // Set logged in state to true
      console.log(loggedIn); // Set logged in state to true
      console.log("User logged in:", loggedInUser);
      localStorage.setItem("email", loggedInUser.email);
      localStorage.setItem("user", loggedInUser._id);
      navigate("/book");
      // Redirect the user or perform any other actions after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to log in. Please check your credentials and try again.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields",
      });
      return;
    }
    loginUser();
  };

  return (
    <body class="bg-gray-900 bg-opacity-50 flex items-center justify-center h-screen">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="nic">
              NIC or Passport number
            </label>
            <input
              type="text"
              id="nic"
              name="nic"
              placeholder="Enter your NIC or passport number"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="mobile"
            >
              Mobile number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="terms" class="ml-2 block text-sm text-gray-900">
                {" "}
                I agree with Terms and Privacy{" "}
              </label>
            </div>
          </div>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign Up
          </button>
          <div class="text-center mt-4">
            <p>or</p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign Up with Google
            </button>
          </div>
          <div class="text-center mt-4">
            <a
              href="#"
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account? Log In
            </a>
          </div>
        </form>
      </div>
    </body>
  );
};

export default UserLogin;
