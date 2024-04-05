import axios from "axios"
const baseURL = import.meta.env.VITE_WEB_API;
const axiosRequest = axios.create({
  baseURL
})

export default axiosRequest
