import { PayloadAction } from '@reduxjs/toolkit';
import { getTokenFromStorage } from 'session/utils';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sessionSaga } from './saga';
import { SessionState, LoginStatus } from './types';

export const initialState: SessionState = {
  error: false,
  loginStatus: getTokenFromStorage() ? LoginStatus.LOGGED_IN : LoginStatus.NONE,
  token: getTokenFromStorage() || '',
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        history: any;
      }>,
    ) {
      state.error = false;
      state.loginStatus = LoginStatus.NONE;
    },
    loginSuccess(state, action: PayloadAction<{ token: string }>) {
      state.error = false;
      state.loginStatus = LoginStatus.LOGGED_IN;
      state.token = action.payload.token;
    },
    loginError(state, action: PayloadAction<LoginStatus>) {
      state.error = true;
      state.loginStatus = action.payload;
    },
  },
});

export const { actions: sessionActions } = slice;

export const useSessionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: sessionSaga });
  return { actions: slice.actions };
};
