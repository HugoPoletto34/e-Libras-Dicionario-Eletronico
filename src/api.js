import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function fetchDictionary() {
  return axios.get(`${URL}/api/dicionario/palavra`);
}
