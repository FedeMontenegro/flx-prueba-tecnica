import { createSlice } from "@reduxjs/toolkit"

const spinner = createSlice({
    name: 'spinner',
    initialState: false,
    reducers: {
        setLoading: (state, action) => action.payload
    },
    extraReducers: (builder) => {
        builder.addDefaultCase((state) => state); // Devuelve el estado actual para acciones no manejadas
    },
})

export const { setLoading } = spinner.actions

export default spinner.reducer