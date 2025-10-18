import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
});

const initialState = {
    data: []
}

export const getSlice = createSlice({
    name: 'get',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
})

export default getSlice.reducer;
