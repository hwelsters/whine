import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://whining.herokuapp.com/api/",
});
