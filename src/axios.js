import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://amazon-backend-indecoders.herokuapp.com/",
});

export default instance;
