import axios from "axios";

const ApiManager = axios.create({
  baseURL: "https://daddyone.com.ng",
  responseType: "json",
  withCredentials: true,
});

export default ApiManager;
