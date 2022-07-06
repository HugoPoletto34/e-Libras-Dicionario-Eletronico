import axios from 'axios'

export function getAPIClient(context?: any) {

  // Pode ser algum servidor executando localmente:
  // http://localhost:3000

  // Api prod: https://api-monitoria.herokuapp.com
  const api = axios.create({
    baseURL: process.env.BACKEND_URL || 'http://localhost:3001',
  })

  //   api.interceptors.request.use((config) => {
  //     return config
  //   })

  return api
}
