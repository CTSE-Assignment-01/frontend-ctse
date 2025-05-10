import axios from "axios";
import API from "constants";

const API_WITH_PORT = axios.create({
  baseURL: `${API.defaults.baseURL}:4002`, 
});

const token = localStorage.getItem("token");

export const registerUser = (userData) => API_WITH_PORT.post("/users/register", userData);
export const loginUser = (credentials) => API_WITH_PORT.post("/users/login", credentials);
// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const fetchUsers = () => API_WITH_PORT.get("/users/", createHeaders());
export const fetchUserById = (id) => API_WITH_PORT.get(`/users/${id}`, createHeaders());
export const fetchUserByEmail = (email) =>
  API_WITH_PORT.get(`/users/email/${email}`, createHeaders());
export const updateUser = (id, updatedUser) =>
  API_WITH_PORT.patch(`/users/${id}`, updatedUser, createHeaders());
export const deleteUser = (id) => API_WITH_PORT.delete(`/users/${id}`, createHeaders());
export const updateUserPassword = (resetData) =>
  API_WITH_PORT.post(`/users/updatePassword`, resetData, createHeaders());
