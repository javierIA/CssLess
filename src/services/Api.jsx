
import axios from "axios";

const Api = axios.create({
  baseURL: "http://ec2-54-234-17-134.compute-1.amazonaws.com:8000/api/v1",
});


export default Api;
