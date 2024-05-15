import { configureStore } from "@reduxjs/toolkit";
import applicationSliceReducer from "./applicationSlice";

export const createStore = () => {
    return configureStore({
        reducer:{
            application:applicationSliceReducer
        }
     })
}

 export default createStore;