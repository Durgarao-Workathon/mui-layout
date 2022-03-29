import axios from "axios";

const API_URL = "";
const token = sessionStorage.getItem("token");
const refreshToken = sessionStorage.getItem("refresh");


const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//response interceptor to refresh token on receiving token expired error
axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const res = await axios.post(`${API_URL}user/refresh/`, {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.access);
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApi;
