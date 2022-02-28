import { configureStore } from "@reduxjs/toolkit";
import finalDataReducer from "./reducers/listSlice";

const store=configureStore({
    reducer:{
        finalData:finalDataReducer
    }
})

export default store