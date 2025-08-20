import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GetData from '../../util/GetData';

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await GetData("books");
    return response || [];
});

const productSlice = createSlice({
    name: "products",
    initialState: { items: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
                state.items = [];
            });
    },
});

export default productSlice.reducer;
