import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-e8df7.firebaseio.com/"
});

export default instance;
