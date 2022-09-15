import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

const authReducer = authSlice.reducer;

export default authReducer;
