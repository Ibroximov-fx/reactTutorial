 import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const mathSlice = createSlice({
    name: 'math',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

 export const {increment, decrement} = mathSlice.actions

 export default mathSlice.reducer