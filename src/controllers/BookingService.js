import axios from "axios";
import API from "constants";

const API_WITH_PORT = axios.create({
  baseURL: `${API.defaults.baseURL}:4003`, 
});

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests
export const createBooking = (bookingData) =>
  API_WITH_PORT.post("/bookings/", bookingData, createHeaders());
export const getBookings = () => API_WITH_PORT.get("/bookings/", createHeaders());
export const getBookingById = (id) =>
  API_WITH_PORT.get(`/bookings/${id}`, createHeaders());
export const updateBooking = (id, updatedBooking) =>
  API_WITH_PORT.put(`/bookings/${id}`, updatedBooking, createHeaders());
export const deleteBooking = (id) =>
  API_WITH_PORT.delete(`/bookings/${id}`, createHeaders());
