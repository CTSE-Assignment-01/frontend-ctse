import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4003",
});

export default API;
