import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from '../actions/authActions';
const initialState = {
    loading: false,
    error: false,
    currentUser: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogout: (state) => {
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authLogin.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(authLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(authLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });
    },
});

const authReducer = authSlice.reducer;

export default authReducer;
