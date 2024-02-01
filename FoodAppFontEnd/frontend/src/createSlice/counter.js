import {createSlice} from '@reduxjs/toolkit'

let initialState={value:0}

let countSlice=createSlice({
    name:"kounter",
    initialState,
    reducers:{
        increment(state){
            state.value++
        },
        decrement(state){
            state.value--
        }
    }
})
export const {increment,decrement}= countSlice.actions
export default countSlice.reducer