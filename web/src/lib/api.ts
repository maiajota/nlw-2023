import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333', // Rota padrão do backend
})
