import axios from 'axios'
import store from '../store/store'
let baseUrl = '//localhost:8080';

let shouldInitDemoMode = true;
export const http = () => {
    let axiosInstance = axios.create({
        baseURL: baseUrl, //base URL goes here
    });
    axiosInstance.defaults.timeout = 5200;
    return axiosInstance
};