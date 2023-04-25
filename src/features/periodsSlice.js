import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const CREATE_URL = "https://sea-turtle-app-o8dz8.ondigitalocean.app/period/post/"
const FETCH_URL = "https://sea-turtle-app-o8dz8.ondigitalocean.app/period/periods"
const UPDATE_URL = "https://sea-turtle-app-o8dz8.ondigitalocean.app/period/edit?periodID="
const DELETE_URL = "https://sea-turtle-app-o8dz8.ondigitalocean.app/period/delete?periodID="

const initialState = {
    periods: [],
    selectedPeriod: {},
    status: 'idle',
    error: null
}

export const fetchPeriods = createAsyncThunk(
    'periods/fetchPeriods',
    async () => {
        const response = await axios.get(`${FETCH_URL}`)
        return response.data
    })

export const fetchPeriodById = createAsyncThunk(
    'periods/fetchPeriodById',
    async (id) => {
        const response = await axios.get(`${CREATE_URL}${id}`)
        return response.data
    })

export const addNewPeriod = createAsyncThunk(
    'periods/addNewPeriod',
    async (data) => {
        const response = await axios.post(CREATE_URL, data)
        return response.data
    })

export const deletePeriodById = createAsyncThunk(
    'periods/deletePeriodById',
    async (id) => {
        const response = await axios.delete(`${DELETE_URL}${id}`)
        return response.data
    })

export const updatePeriod = createAsyncThunk(
    'periods/updatePeriod',
    async (data) => {
        const response = await axios.put(`${UPDATE_URL}${data.id}`, data.data)
        return response.data
    }
)

const periodsSlice = createSlice({
    name: 'periods',
    initialState,
    reducers: {
        periodUpdated(state, action) {
            state.selectedPeriod = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPeriods.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPeriods.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.periods = action.payload
            })
            .addCase(fetchPeriods.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchPeriodById.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPeriodById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.selectedPeriod = action.payload
            })
            .addCase(fetchPeriodById.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPeriod.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.periods.push(action.payload.period)
            })
            .addCase(updatePeriod.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.period = action.payload.period
            })
            .addCase(deletePeriodById.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.periods = state.periods.filter(item => item._id !== action.payload.period._id)
            })
    },

})

export const { periodUpdated } = periodsSlice.actions

export default periodsSlice.reducer

export const selectAllPeriods = (state) => state.periods.periods