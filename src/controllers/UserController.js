import API from "constants";

const token = localStorage.getItem("token");

export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (credentials) => API.post("/users/login", credentials);
// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const fetchUsers = () => API.get("/users/", createHeaders());
export const fetchUserById = (id) => API.get(`/users/${id}`, createHeaders());
export const fetchUserByEmail = (email) =>
  API.get(`/users/email/${email}`, createHeaders());
export const updateUser = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser, createHeaders());
export const deleteUser = (id) => API.delete(`/users/${id}`, createHeaders());
export const updateUserPassword = (resetData) =>
  API.post(`/users/updatePassword`, resetData, createHeaders());
