import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../util/axios";


export const registerCourse = createAsyncThunk(
    "course/register",
    async (courseDetails, { rejectWithValue }) => {
        try {
            const response = await API.post(`/course/register/${courseDetails.courseId}`, courseDetails)
            console.log(response.data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
})

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        status: null,
        id: 0,
        progress: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerCourse.fulfilled, (state, action)=>{
            state.progress = action.payload.progress
            state.id = action.payload.id
            state.loading = false
        })
        .addCase(registerCourse.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(registerCourse.rejected, (state)=>{
            state.loading = false
        })
    }
})

export default courseSlice.reducer