import axios from "axios";
const { BASE_URL } = process.env;
console.log(BASE_URL);
export const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
