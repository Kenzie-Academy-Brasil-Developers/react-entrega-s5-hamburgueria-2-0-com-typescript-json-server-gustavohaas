import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-hamburgueria-kenzie-gbh.herokuapp.com/",
});