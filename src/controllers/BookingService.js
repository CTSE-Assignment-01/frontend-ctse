import API from "constants";

const token = localStorage.getItem("token");

// Function to create headers with the token
const createHeaders = () => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Add token to headers for requests
export const createBooking = (bookingData) =>
  API.post("/bookings/", bookingData, createHeaders());
export const getBookings = () => API.get("/bookings/", createHeaders());
export const getBookingById = (id) =>
  API.get(`/bookings/${id}`, createHeaders());
export const updateBooking = (id, updatedBooking) =>
  API.put(`/bookings/${id}`, updatedBooking, createHeaders());
export const deleteBooking = (id) =>
  API.delete(`/bookings/${id}`, createHeaders());
