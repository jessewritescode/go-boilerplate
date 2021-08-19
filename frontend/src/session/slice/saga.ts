import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { PayloadAction } from '@reduxjs/toolkit';
import { sessionActions as actions } from '.';
import { LoginStatus } from './types';

function* handleLogin(
  action: PayloadAction<{ email: string; password: string; history: any }>,
) {
  try {
    const endpoint = 'http://localhost:8000/users/login';

    const response: { token: string } = yield call(request, endpoint, {
      method: 'POST',
      body: JSON.stringify(action.payload),
    });
    yield put(actions.loginSuccess(response));
  } catch (error) {
    if (error.response?.status === 401) {
      yield put(actions.loginError(LoginStatus.BAD_PASSWORD));
    }
  }
}

export function* sessionSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}
