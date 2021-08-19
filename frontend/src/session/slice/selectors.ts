import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { LoginStatus } from './types';

const selectSlice = (state: RootState) => state.session || initialState;

export const selectSession = createSelector([selectSlice], state => state);

export const selectToken = createSelector([selectSlice], state => state.token);

export const selectBadPassword = createSelector(
  [selectSlice],
  state => state.loginStatus === LoginStatus.BAD_PASSWORD,
);
