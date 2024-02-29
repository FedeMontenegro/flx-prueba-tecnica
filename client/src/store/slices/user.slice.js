import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    all: [],
    selectedUser: {},
    pagination: { current: 1, pageSize: 10 },
    total: 0,
}

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => Object.assign(state, action.payload)

    }
})  

export const { setUsers } = users.actions

export default users.reducer