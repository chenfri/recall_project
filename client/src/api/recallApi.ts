import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic request function
export const request = async <T>(
  method: string,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T | undefined> => {
  try {
    const response = await api.request<T>({
      method,
      url,
      data,
      ...config,
    });

    return response.data; // Return just the data
  } catch (error: any) {
    throw new Error(error.message || 'Network Error');
  }
};


export const get = <T>(url: string, config?: AxiosRequestConfig) =>
  request<T>('GET', url, undefined, config);

export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
  request<T>('POST', url, data, config);

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
  request<T>('PUT', url, data, config);

export const del = <T>(url: string, config?: AxiosRequestConfig) =>
  request<T>('DELETE', url, undefined, config);

export default {
  get,
  post,
  put,
  del,
  request,
}; 
