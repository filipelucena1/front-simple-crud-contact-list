import axios from "axios";

const token = localStorage.getItem("simple_CRUD_token")

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${token}`,
  }
});
export default api;
