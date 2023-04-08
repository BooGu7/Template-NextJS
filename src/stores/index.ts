import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';
import type { AnyAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root';
import logger from 'redux-logger';

const isDev = process.env.NODE_ENV === 'development';

// ======================= Configure Store ==================================

export const store = configureStore({
  reducer: rootReducer,
  devTools: isDev,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          'meta.arg',
          'meta.baseQueryMeta.request',
          'meta.baseQueryMeta.response',
          'payload.request',
          'payload.config.adapter',
          'payload.config.validateStatus',
          'payload.config.transformRequest',
          'payload.config.transformResponse',
        ],
      },
    });
    if (isDev) {
      return middleware.concat(logger);
    }

    return middleware.concat();
  },
});

// ======================= Redux Type  ==================================

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
