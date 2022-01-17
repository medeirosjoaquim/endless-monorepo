import { createAction, createReducer } from '@reduxjs/toolkit'
import { signin, signout } from './actions'

interface CounterState {
    value: number
}


const initialState = { value: 0 } as CounterState

const accountReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signin, (state, action) => {
            state.value++
            console.log(action)
        })
        .addCase(signout, (state, action) => {
            state.value--
        })
    // .addCase(incrementByAmount, (state, action) => {
    //     state.value += action.payload
    // })
})

export default accountReducer