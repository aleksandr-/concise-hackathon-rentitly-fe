import axios from 'axios'
import store from '../store/store'
let baseUrl = '//localhost:8080/api';

let shouldInitDemoMode = true;
export const http = () => {
    let axiosInstance = axios.create({
        baseURL: baseUrl, //base URL goes here
        // credentials: 'same-origin',
        withCredentials : true,
        headers: {'X-CSRF-TOKEN': store.getters.csrfToken}
    });
    axiosInstance.defaults.timeout = 5200;
    return axiosInstance
};