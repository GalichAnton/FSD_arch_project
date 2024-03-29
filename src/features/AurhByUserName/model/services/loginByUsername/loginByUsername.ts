import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { type User, userActions } from '@/entity/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
