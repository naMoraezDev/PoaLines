import Axios, { AxiosInstance } from "axios";

export const Api = (): AxiosInstance => {
  const config = Axios.create({
    baseURL: "http://www.poatransporte.com.br/php/facades/",
  });

  return config;
};
