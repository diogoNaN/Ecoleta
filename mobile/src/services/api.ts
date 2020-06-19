import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'// server|backend
});

export default api;