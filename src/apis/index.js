import axios from "axios";

const getToken = () => {
  return localStorage.getItem("token");
};

const axiosInstance = axios.create({
  baseURL: "http://3.34.182.206:8080/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getToken();

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export default axiosInstance;
