import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-forum-backend-26mh.onrender.com/api",
});
export default axiosBase;
