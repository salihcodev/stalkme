import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import {  } from './logic/_.sliceLogic';
// import {  } from '../../../common/interfaces/slices/initial/initial.interface';

// CONFIGURE THE INITIAL STATE::
const initialState = {
    val: 0,
    stage: `idle`,
    failureMsg: null,
}

// CREATE THE SLICE OF THE `Initial`::
export const template = createSlice({
    name: `template`,
    initialState,
    reducers: {},

    // ADD EXTRA REDUCERS::
    extraReducers: (builder: any) => {},
})

// EXPORT THE ACTIONS::
export const {} = template.actions

// EXPORT THE `Initial` REDUCER::
export default template.reducer
