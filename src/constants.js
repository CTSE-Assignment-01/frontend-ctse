import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4005",
});

export default API;
