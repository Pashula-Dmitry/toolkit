import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, Users } from './interfaces';
import { HTTP } from '../../services/api';

const initialState: Users = {
  isLoading: false,
  list: [],
  errorMessage: '',
};

export const getUsers = createAsyncThunk('users/getUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await HTTP.get('users');
    return response.data as User[];
  } catch (err: any) {
    return rejectWithValue(err.response.data.message);
  }
});

const users = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  extraReducers: {
    [getUsers.pending.type]: (state, action: PayloadAction<User[]>) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const userActions = users.actions;
export default users.reducer;
