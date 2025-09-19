
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // Django backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
