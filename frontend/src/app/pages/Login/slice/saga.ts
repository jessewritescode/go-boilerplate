import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { PayloadAction } from '@reduxjs/toolkit';
import { sessionActions as actions } from '.';
import { LoginErrorCodes } from './types';

function* handleLogin(
  action: PayloadAction<{ email: string; password: string }>,
) {
  try {
    const endpoint = 'http://0.0.0.0:8000/users/login';

    const response: { token: string } = yield call(request, endpoint, {
      method: 'POST',
      body: JSON.stringify(action.payload),
    });
    yield put(actions.loginSuccess(response));
  } catch (error) {
    if (error.response?.status === 401) {
      yield put(actions.loginError(LoginErrorCodes.BAD_PASSWORD));
    }
    if (error?.error_code === LoginErrorCodes.BAD_PASSWORD) {
      console.log('bam');
    }
  }
}

export function* sessionSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}