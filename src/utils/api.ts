import axios from 'axios';

const defaultAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const API_KEY = process.env.REACT_APP_API_KEY;
export default defaultAxios;
