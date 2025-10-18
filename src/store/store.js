import {configureStore} from '@reduxjs/toolkit'
import Counter from "../common/counter.js";
import FetchApi from "../common/fetchApi.js";
export const Store = configureStore({
    reducer: {
        counterName:Counter,
        userName:FetchApi
    }
})