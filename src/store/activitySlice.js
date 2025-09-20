import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../util/axios";

export const registerActivity = createAsyncThunk(
  "activity/registerActivity",
  async (actDetails, { rejectWithValue }) => {
    try {
      const res = await API.post(`/activity/register/${actDetails.actId}`, actDetails);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.res.data);
    }
  }
);

const activitySlice = createSlice({
  name: "activity",
  initialState: {
    actId: null,
    registeredActivities: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
  builder.addCase(registerActivity.fulfilled, (state, action) => {
    const registeredId = action.meta.arg.actId;
    state.registeredActivities.push(registeredId);
  });
}
});

export default activitySlice.reducer;
