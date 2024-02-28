import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    all: [],
    selectedUser: {},
    pagination: { current: 1, size: 10 },
    total: 0,
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