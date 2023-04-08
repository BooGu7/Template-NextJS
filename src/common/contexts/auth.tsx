import { createContext, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { appActions } from '@/stores/app';
import { useDispatch, useSelector } from '@/stores';

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
}

export interface AuthContextValue extends State {}

interface AuthProviderProps {
  children: ReactNode;
}

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
};

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const dispatch = useDispatch();

  const { isInitialized, isAuthenticated } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(appActions.loadApp())
      .unwrap()
      .then((resp) => {
        dispatch(appActions.getConstants());

        if (resp.token) {
          // dispatch(
          //   profileActions.trackActivity({
          //     event_type: 'Login',
          //   }),
          // );
          // dispatch(profileActions.getMe())
          //   .unwrap()
          //   .then((me) => {});
        }
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isInitialized,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;
