import axios from "./api-client";
import API from "Constants/apis";
import { BASE_URL } from "Config/environment";


export const signin = (data) => axios.post(`${API.LOGIN}`, data);

export const register = (data) =>
  axios.post(`${BASE_URL}${API.REGISTER}`, data);
