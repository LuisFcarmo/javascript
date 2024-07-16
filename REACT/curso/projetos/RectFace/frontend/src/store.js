import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"
import fotoReucer from "./slices/FotoSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        foto: fotoReucer,
    },
})