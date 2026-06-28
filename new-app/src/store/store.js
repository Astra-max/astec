import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import activitySlice from './activitySlice'
import courseSlice from './courseSlice'

const store = configureStore({
    reducer : {
        auth: authSlice,
        activity: activitySlice,
        course: courseSlice,
    }
})

export default store