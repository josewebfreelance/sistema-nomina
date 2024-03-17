import {configureStore} from "@reduxjs/toolkit";
import {sidenavSlice} from "./ui";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const store = configureStore({
   reducer: {
        sidenav: sidenavSlice.reducer
   }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
