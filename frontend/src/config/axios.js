import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:9005/api/auth",
});

export default api
