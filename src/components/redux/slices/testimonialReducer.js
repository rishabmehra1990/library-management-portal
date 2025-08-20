import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GetData from '../../util/GetData';

export const fetchTestimonials = createAsyncThunk("testimonials/fetchTestimonials", async () => {
    const response = await GetData("testimonials");
    return response || [];
});

const testimonialSlice = createSlice({
    name: "testimonials",
    initialState: { items: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTestimonials.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTestimonials.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchTestimonials.rejected, (state) => {
                state.status = "failed";
                state.items = [];
            });
    },
});

export default testimonialSlice.reducer;
