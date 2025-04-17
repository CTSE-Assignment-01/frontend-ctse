import API from "constants";

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests other than login and register
export const createDestination = (destinationData) =>
  API.post("/destinations/", destinationData, createHeaders());
export const getDestinations = () => API.get("/destinations/", createHeaders());
export const getDestinationById = (id) =>
  API.get(`/destinations/${id}`, createHeaders());
export const updateDestination = (id, updatedDestination) =>
  API.put(`/destinations/${id}`, updatedDestination, createHeaders());
export const deleteDestination = (id) =>
  API.delete(`/destinations/${id}`, createHeaders());
