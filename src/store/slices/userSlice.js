import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //name
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
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.fullName = null;
            state.email = null;
            state.token = null;
            state.id = null;
        },
    }
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;