import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from './logger';
const store = configureStore({
    reducer: logger(rootReducer),
    // middleware: [],
});

export default store;
