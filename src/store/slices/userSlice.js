import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: null,
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      };
    },
    removeUser(state) {
      return {
        ...state,
        fullName: null,
        email: null,
        token: null,
        id: null,
      };
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
