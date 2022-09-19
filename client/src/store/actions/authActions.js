import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const authLogin = createAsyncThunk(
    'auth/login',
    async ({ user, navigate }, {}) => {
        try {
            const { data } = await axios.post('/api/auth/login', user);
            if (data) {
                navigate('/');
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    },
);

export const authRegister = createAsyncThunk(
    'auth/register',
    async ({ user, navigate }, {}) => {
        try {
            const { data } = await axios.post('/api/auth/register', user);
            if (data) {
                navigate('/login');
            }
            return;
        } catch (error) {
            console.log(error);
        }
    },
);
