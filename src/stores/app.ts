import api from '@/common/api';
import { SLICE_NAME } from '@/common/constants/stores';
import { getToken, isTokenValid, setToken } from '@/common/utils/auth';
import { AppTypes } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authActions } from './auth';

export interface IAppState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  token?: string;
  constants: AppTypes.IConstants;
  user_permissions: AppTypes.INameValue[];
}

export const initialState: IAppState = {
  isInitialized: false,
  isAuthenticated: false,
  token: undefined,
  constants: null,
  user_permissions: null,
};

const loadApp = createAsyncThunk(`${SLICE_NAME.APP}/loadApp`, async () => {
  return { token: getToken() };
});

const getConstants = createAsyncThunk(`${SLICE_NAME.APP}/getConstants`, async (query) => {
  const data = await api.getConstants<AppTypes.IConstants>(query);
  return data;
});

const searchAddress = createAsyncThunk(
  `${SLICE_NAME.APP}/searchAddresses`,
  async (form: AppTypes.IPaginationParams, { rejectWithValue }) => {
    try {
      const data = await api.searchAddress<AppTypes.IPagination<AppTypes.ICoordinate>>(form);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialState,
  reducers: {
    onLogout: (state) => {
      state.token = undefined;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadApp.fulfilled, (state, { payload }) => {
      state.isAuthenticated = isTokenValid(payload?.token);
      state.isInitialized = true;
    });

    builder.addCase(authActions.verifyOTP.fulfilled, (state, { payload }) => {
      state.token = payload?.data?.token;
      state.isAuthenticated = isTokenValid(state.token);
      setToken(state.token);
    });

    builder.addCase(getConstants.fulfilled, (state, { payload }) => {
      state.constants = payload?.data;
    });
  },
});

export const appReducer = appSlice.reducer;
export const appActions = {
  ...appSlice.actions,
  loadApp,
  getConstants,
  searchAddress,
};
