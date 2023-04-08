import axios from 'axios';

const baseUrl = 'https://frontendtestapi.staging.fastjobs.io';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const login = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};

export const getUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  } catch (error) {
    throw new Error('Pls login again');
  }
};

export const getData = async () => {
  try {
    const response = await axiosInstance.get('/data');
    return response.data;
  } catch (error) {
    throw new Error('Pls login again');
  }
};
