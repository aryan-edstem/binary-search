import { createSlice } from '@reduxjs/toolkit'

const BinarySlice = createSlice({
    name:"binarySearch",
    initialState: {
        low: 0,
        mid: 0,
        high: 1000,
        array:[],
        result:-1,
        executionTime:0
    },
    reducers: {
        setLow: (state,action) =>{
            state.low = action.payload
        },
        setHigh: (state,action) => {
            state.high = action.payload
        },
        setMid: (state,action) => {
            state.mid = action.payload
        },
        setArray: (state,action) =>{
            state.array = action.payload
        },
        setResult: (state,action) => {
            state.result = action.payload
        },
        setExecutionTime: (state,action) => {
            state.executionTime = action.payload
        }
    }
})

export const {setLow,setHigh,setMid,setArray,setResult,setExecutionTime} = BinarySlice.actions
export default BinarySlice.reducer