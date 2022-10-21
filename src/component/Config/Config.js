//package import
import axios from "axios";

export const axiosSearch = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "X-Custom-Header": "foobar",
    Accept: "application/json",
    "Content-Type": undefined,
  },
});
