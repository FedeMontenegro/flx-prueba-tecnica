import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    all: [],
    selectedUser: {}
}

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => action.payload

    }
})  

export const { setUsers } = users.actions

export default users.reducer