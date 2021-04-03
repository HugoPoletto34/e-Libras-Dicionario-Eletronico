import axios from "axios";

const URL = process.env.URL;

export default function fetchDictionary() {
    console.log(URL)
    return axios.get(`${URL}/api/dicionario/palavra`);
}
