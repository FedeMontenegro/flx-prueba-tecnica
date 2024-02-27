import { configureStore } from "@reduxjs/toolkit"
import users from './slices/user.slice'
import spinnerSlice from "./slices/spinner.slice"

export default configureStore({
    reducer: {
        users,
        spinnerSlice,
    }
})