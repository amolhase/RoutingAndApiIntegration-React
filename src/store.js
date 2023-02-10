import { configureStore } from "@reduxjs/toolkit";
import GallaryReducer from './redux/GallarySlice'

export const store = configureStore({
    reducer:{
        imageData : GallaryReducer,
    }
})