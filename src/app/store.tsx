// app/store.js
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { subjectsSlice } from "./features/subjectsSlice"

export const store = configureStore({
    reducer: {
        subjects: subjectsSlice.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector