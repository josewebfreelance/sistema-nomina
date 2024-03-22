import {configureStore} from "@reduxjs/toolkit";
import {sidenavSlice} from "./ui/sidenav-slice.ts";

export interface StoreInterface {
}

export const store = configureStore({
    reducer: {
        sideNav: sidenavSlice.reducer
    }
});

