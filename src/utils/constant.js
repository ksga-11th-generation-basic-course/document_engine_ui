import axios from "axios";
export const api = axios.create({
  baseURL: "https://api.docengine.tech/api/v1/",
});

const token = localStorage.getItem("token");

export const header = {
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type ": "application/json",
  },
};
