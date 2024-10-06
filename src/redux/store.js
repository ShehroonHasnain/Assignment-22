import { configureStore} from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";

export const store = configureStore({
    reducer: {
        productSlice: productReducer,
        // Add the reducer here 
    }});