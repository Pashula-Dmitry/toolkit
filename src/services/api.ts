import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const HTTP = axios.create({
    baseURL: API_URL,
});
