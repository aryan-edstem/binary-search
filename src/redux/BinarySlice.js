import { createSlice } from '@reduxjs/toolkit'

const BinarySlice = createSlice({
    name:"binarySearch",
    initialState: {
        low: 0,
        high: 1000,
        array:[],
        result:-1,
        executionTime:0,
        noOfIterations:0
    },
    reducers: {
        setLow: (state,action) =>{
            state.low = action.payload
        },
        setHigh: (state,action) => {
            state.high = action.payload
        },
        setArray: (state,action) =>{
            state.array = action.payload
        },
        setResult: (state,action) => {
            state.result = action.payload
        },
        setExecutionTime: (state,action) => {
            state.executionTime = action.payload
        },
        setNoOfIterations: (state,action) => {
            state.noOfIterations = action.payload
        },
        incrementNoOfIterations: (state,action)=> {
            state.noOfIterations += action.payload
        }
    }
})

export const {setLow,setHigh,setArray,setResult,setExecutionTime,setNoOfIterations,incrementNoOfIterations} = BinarySlice.actions
export default BinarySlice.reducer