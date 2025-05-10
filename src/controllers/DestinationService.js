import axios from "axios";
import API from "constants";

const API_WITH_PORT = axios.create({
  baseURL: `${API.defaults.baseURL}:4001`, // e.g., http://172.214.26.167:4001
});

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const createDestination = (destinationData) =>
  API_WITH_PORT.post("/destinations/", destinationData);
export const getDestinations = () => API_WITH_PORT.get("/destinations/");
export const getDestinationById = (id) =>
  API_WITH_PORT.get(`/destinations/${id}`);
export const updateDestination = (id, updatedDestination) =>
  API_WITH_PORT.put(`/destinations/${id}`, updatedDestination);
export const deleteDestination = (id) =>
  API_WITH_PORT.delete(`/destinations/${id}`);
