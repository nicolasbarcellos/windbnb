import axios from "axios";

export const api = axios.create({
  baseURL: "https://windbnb-api.herokuapp.com",
});
