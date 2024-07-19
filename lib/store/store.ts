import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pageReducer from "./features/CurrentPage/currentPageSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const  persistConfig={
  key:"course",
  storage,
}
const roorReducer=combineReducers({
  course:pageReducer
})
const persistedReducer=persistReducer(persistConfig,roorReducer)
export const makeStore=()=>{
  return configureStore({
    reducer: persistedReducer,
  });
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// firstly we have to congfigure store as react app
// then open redux toolkit with next js officiall documentaion
// in that appStore will be used in provider
// last three lines are rename of store 