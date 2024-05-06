import axios from "axios"
const baseURL = import.meta.env.VITE_WEB_API;
const axiosRequest = axios.create({
  baseURL
})
axiosRequest.interceptors.request.use(function (config) {
    const token = window.localStorage.getItem("token") || null;
    config.headers.Authorization = `Bearer ${token}`;
     
    return config;
});


export default axiosRequest
