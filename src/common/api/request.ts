import axios, { AxiosRequestConfig } from 'axios';
import { compile, parse } from 'path-to-regexp';
import router from 'next/router';
import { cloneDeep } from 'lodash';
import { stringify } from 'qs';
import { getToken } from '@/common/utils/auth';
import { appActions } from '@/stores/app';
import { store } from '@/stores';
import { ROUTE } from '../constants/route';

const request = (url: string, options: AxiosRequestConfig & { isAuthorized?: boolean }) => {
  const { data, baseURL, isAuthorized = true, headers = { 'Content-Type': 'application/json' } } = options;

  const cloneData = cloneDeep(data);

  try {
    let domain = '';
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/);
    if (urlMatch) {
      [domain] = urlMatch;
      url = url.slice(domain.length);
    }

    const match = parse(url);
    url = compile(url)(data);

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }
    url = domain + url;
  } catch (e) {
    console.error(e.message);
  }

  options.headers = {
    ...headers,
    isAuthorized,
  };
  options.url = url;
  options.baseURL = baseURL;
  if (options.method === 'GET') {
    options.params = cloneData;
  } else {
    options.data = cloneData;
  }
  options.paramsSerializer = (params) => {
    return stringify(params, { arrayFormat: 'repeat' });
  };

  return axios(options)
    .then((response) => {
      const { statusText, status, data } = response;

      const result = {
        success: true,
        message: statusText,
        statusCode: status,
        data,
      };

      return Promise.resolve(result);
    })
    .catch((error) => {
      const { status } = error.response;

      if (status === 401 || status === 403) {
        // store.dispatch(appActions.onLogout());
        // router.push(ROUTE.UN_AUTHENTICATED);
      }

      if (status <= 504 && status >= 500) {
        // history.push("/500");
      }
      if (status >= 404 && status < 422) {
      }
      /* eslint-disable */
      return Promise.reject(error?.response?.data || error);
    });
};

axios.interceptors.request.use(
  function (config) {
    const token = getToken();

    if (config.headers.isAuthorized && typeof token === 'string' && token !== '') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    delete config.headers['isAuthorized'];
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export default request;
