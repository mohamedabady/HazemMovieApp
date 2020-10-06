import axios from 'axios';
import {DefaultParamsObject, BaseUrl} from './constants';

const instance = axios.create({
    baseURL: BaseUrl
});

//request interceptor
instance.interceptors.request.use(config => config, error => Promise.reject(error));

//response interceptor
instance.interceptors.response.use(response => response, error => Promise.reject(error));

export const getData = (controller, paramsObject?) => {
    let url = `/${controller}?`;
    let queryParams = { ...DefaultParamsObject };
    if (paramsObject !== undefined && paramsObject !== null && paramsObject !== {}) {
        queryParams = { ...queryParams, ...paramsObject };
    }
    let paramsArray = Object.entries(queryParams);
    paramsArray.forEach(entry => url += `${entry[0]}=${entry[1]}&`);
    return instance.get(url);
}