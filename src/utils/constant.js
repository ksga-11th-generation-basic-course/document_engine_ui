import axios from "axios";
export const api = axios.create({
  baseURL: "https://api.docengine.tech/api/v1/",
});
