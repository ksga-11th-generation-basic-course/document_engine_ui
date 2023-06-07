import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
});

const token = localStorage.getItem("token");

export const header = {
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type ": "application/json",
  },
};
