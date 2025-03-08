import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/UserSlice'

export const Store = configureStore({
    reducer:{
        user:userReducer,
    }
})