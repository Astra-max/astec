import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5500/api",
});

API.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth?.token) config.headers.Authorization = `Bearer ${auth.token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

export default API;
