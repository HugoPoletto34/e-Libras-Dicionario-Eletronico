import axios from 'axios'

export function getAPIClient(context?: any) {

  // Pode ser algum servidor executando localmente:
  // http://localhost:3000

  // Api prod: https://api-monitoria.herokuapp.com

  const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  api.defaults.headers.common['Accept'] = 'application/json'
  api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token'
  api.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
  api.defaults.headers.common['Access-Control-Max-Age'] = '1728000'
  api.defaults.headers.common['Access-Control-Expose-Headers'] = 'Content-Length'
  api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With'
  api.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  api.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
  api.defaults.headers.common['Access-Control-Expose-Headers'] = 'Content-Length'
  // create an api axios to accept aspnet requests


  return api
}
