import axios from "axios";

const BackEndAxios = axios.create({
  timeout: 10000,
});
