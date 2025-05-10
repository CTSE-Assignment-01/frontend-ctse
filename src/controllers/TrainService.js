import axios from "axios";
import API from "constants";

const API_WITH_PORT = axios.create({
  baseURL: `${API.defaults.baseURL}:4004`, 
});

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const createTrain = (trainData) =>
  API_WITH_PORT.post("/trains/", trainData, createHeaders());
export const getTrains = () => API_WITH_PORT.get("/trains/", createHeaders());
export const getTrainById = (id) => API_WITH_PORT.get(`/trains/${id}`, createHeaders());
export const updateTrain = (id, updatedTrain) =>
  API_WITH_PORT.put(`/trains/${id}`, updatedTrain, createHeaders());
export const deleteTrain = (id) => API_WITH_PORT.delete(`/trains/${id}`, createHeaders());
