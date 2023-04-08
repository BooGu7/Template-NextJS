import { TOKEN_KEY } from '../constants/auth';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) ?? undefined;
};

export const setToken = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const isTokenValid = (token?: string) => {
  return typeof token === 'string' && token !== '';
};
