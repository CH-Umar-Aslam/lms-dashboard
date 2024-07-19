import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const currentPageSlice = createSlice({
  name: 'page',
  initialState:{
    value:""
  },
  reducers: {
    updatePage: (state,action) => {
      state.value =action.payload 
    },
    
    },
  
})

// Action creators are generated for each case reducer function
export const { updatePage} = currentPageSlice.actions

export default currentPageSlice.reducer