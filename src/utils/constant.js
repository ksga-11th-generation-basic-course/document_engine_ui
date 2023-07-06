import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:8096/api/v1/",
});
