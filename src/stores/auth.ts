import api from '@/common/api';
import { SLICE_NAME } from '@/common/constants/stores';
import { AppTypes } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface IAppState {
  loading: { [x: string]: boolean };
}

export const initialState: IAppState = {
  loading: {},
};

const loginPhoneNumber = createAsyncThunk(
  `${SLICE_NAME.AUTH}/loginPhoneNumber`,
  async (form: AppTypes.ILoginPhoneNumberForm) => {
    const response = await api.loginPhoneNumber<AppTypes.IPhoneNumberResponse>({
      ...form,
      role: 'seller',
    });
    return response;
  },
);

const verifyOTP = createAsyncThunk(
  `${SLICE_NAME.AUTH}/verifyOTP`,
  async (form: AppTypes.IVerifyOTPPhoneNumberForm, { rejectWithValue }) => {
    try {
      const response = await api.verifyOTP<AppTypes.ILoginResponse>({
        ...form,
        role: 'seller',
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const checkToastAuth = createAsyncThunk(
  `${SLICE_NAME.AUTH}/checkToastAuth`,
  async (form: AppTypes.ContactRequestParams, { rejectWithValue }) => {
    try {
      const response = await api.checkToastAuth<boolean>({
        ...form,
      });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const resendOTP = createAsyncThunk(
  `${SLICE_NAME.AUTH}/resendOTP`,
  async (form: AppTypes.IResendOTPPhoneNumberForm, { rejectWithValue }) => {
    try {
      return api.resendOTP<AppTypes.IPhoneNumberResponse>({
        ...form,
        role: 'seller',
      });
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const authSlice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState: initialState,
  reducers: {
    onLogout: (state) => {
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginPhoneNumber.pending, (state, { payload }) => {
      state.loading[loginPhoneNumber.typePrefix] = true;
    });
    builder.addCase(loginPhoneNumber.rejected, (state, { payload }) => {
      state.loading[loginPhoneNumber.typePrefix] = false;
    });
    builder.addCase(loginPhoneNumber.fulfilled, (state, { payload }) => {
      state.loading[loginPhoneNumber.typePrefix] = false;
    });

    builder.addCase(verifyOTP.pending, (state, { payload }) => {
      state.loading[verifyOTP.typePrefix] = true;
    });
    builder.addCase(verifyOTP.rejected, (state, { payload }) => {
      state.loading[verifyOTP.typePrefix] = false;
    });
    builder.addCase(verifyOTP.fulfilled, (state, { payload }) => {
      state.loading[verifyOTP.typePrefix] = false;
    });

    builder.addCase(resendOTP.pending, (state, { payload }) => {
      state.loading[resendOTP.typePrefix] = true;
    });
    builder.addCase(resendOTP.rejected, (state, { payload }) => {
      state.loading[resendOTP.typePrefix] = false;
    });
    builder.addCase(resendOTP.fulfilled, (state, { payload }) => {
      state.loading[resendOTP.typePrefix] = false;
    });

    builder.addCase(checkToastAuth.pending, (state, { payload }) => {
      state.loading[checkToastAuth.typePrefix] = true;
    });
    builder.addCase(checkToastAuth.rejected, (state, { payload }) => {
      state.loading[checkToastAuth.typePrefix] = false;
    });
    builder.addCase(checkToastAuth.fulfilled, (state, { payload }) => {
      state.loading[checkToastAuth.typePrefix] = false;
    });
  },
});

export const authReducer = authSlice.reducer;
export const authActions = {
  ...authSlice.actions,
  loginPhoneNumber,
  verifyOTP,
  resendOTP,
  checkToastAuth,
};
