import axios from "axios";

export default axios.create({
  baseURL: "http://calculator:8080",
});
