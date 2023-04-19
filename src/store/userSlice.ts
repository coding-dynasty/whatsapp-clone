import { createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export interface UserState {
  user: object;
}

const initialState: UserState = {
  user: {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAdd: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userAdd } = userSlice.actions;

export const selectUser = (state: RootState) => state.users.user;

export default userSlice.reducer;
