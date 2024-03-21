import {getEnvVariables} from "../helpers";
import axios from "axios";


const {VITE_BASE_URL} = getEnvVariables();

const payrollApi = axios.create({
    baseURL: VITE_BASE_URL
});

payrollApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        /* TODO: AQUI DEBERIA IR EL TOKEN
        'Authorization': `Bearer ${localStorage.getItem('token')}`
         */
    }
    return config;
});

export default payrollApi;