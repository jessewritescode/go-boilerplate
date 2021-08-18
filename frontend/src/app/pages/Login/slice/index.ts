import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sessionSaga } from './saga';
import { SessionState, LoginErrorCodes } from './types';

export const initialState: SessionState = {
  error: false,
  errorCode: LoginErrorCodes.NONE,
  token: '',
};

const slice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      state.error = false;
      state.errorCode = LoginErrorCodes.NONE;
    },
    loginSuccess(state, action: PayloadAction<{ token: string }>) {
      state.error = false;
      state.errorCode = LoginErrorCodes.NONE;
      state.token = action.payload.token;
    },
    loginError(state, action: PayloadAction<LoginErrorCodes>) {
      state.error = true;
      state.errorCode = action.payload;
    },
  },
});

export const { actions: sessionActions } = slice;

export const useSessionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: sessionSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSessionSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
