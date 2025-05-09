import API from "constants";

const API_WITH_PORT = {...API};
API_WITH_PORT.defaults.baseURL = `${API.defaults.baseURL}:4001`;

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const createDestination = (destinationData) =>
  API_WITH_PORT.post("/destinations/", destinationData, createHeaders());
export const getDestinations = () => API.get("/destinations/", createHeaders());
export const getDestinationById = (id) =>
  API_WITH_PORT.get(`/destinations/${id}`, createHeaders());
export const updateDestination = (id, updatedDestination) =>
  API_WITH_PORT.put(`/destinations/${id}`, updatedDestination, createHeaders());
export const deleteDestination = (id) =>
  API_WITH_PORT.delete(`/destinations/${id}`, createHeaders());
