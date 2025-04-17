import API from "constants";

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const createTrain = (trainData) =>
  API.post("/trains/", trainData, createHeaders());
export const getTrains = () => API.get("/trains/", createHeaders());
export const getTrainById = (id) => API.get(`/trains/${id}`, createHeaders());
export const updateTrain = (id, updatedTrain) =>
  API.put(`/trains/${id}`, updatedTrain, createHeaders());
export const deleteTrain = (id) => API.delete(`/trains/${id}`, createHeaders());
