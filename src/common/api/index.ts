import { Method } from 'axios';
import request from './request';
import endpoints from './endpoints';
import config from '@/config';

export interface IApiResponse<T = {}> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}

interface IOption {
  headers?: { [key: string]: any };
  params?: object;
}

const gen = (params: string, baseURL?: string) => {
  let url = params;
  let method: Method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0] as Method;
    url = paramsArray[1];
  }

  return function (data: any, options: IOption) {
    return request(url, {
      data: data,
      method,
      params: options?.params,
      baseURL,
      headers: options?.headers,
    });
  };
};

type APIMap = {
  [key in keyof typeof endpoints]: <T>(data?: any, option?: IOption) => Promise<IApiResponse<T>>;
};

const api: any = {};

for (const key in endpoints) {
  let apiURL = config.BASE_URL;
  switch (key) {
  }

  api[key] = gen((endpoints as any)[key], apiURL);
}

export default api as APIMap;
