import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store.ts";

interface SidenavSliceStateInterface {
    drawer: boolean;
    collapsable: boolean;
}

const initialState: SidenavSliceStateInterface = {
    drawer: true,
    collapsable: false
}

type OpenPayloadAction = PayloadAction<{open: boolean}>;

export const sidenavSlice = createSlice({
    name: 'sidenav',
    initialState,
    reducers: {
        setDrawer: (state, { payload }: OpenPayloadAction) => {
            state.drawer = payload.open;
        },
        setCollapsable: (state, { payload }: OpenPayloadAction) => {
            state.collapsable = payload.open;
        },
        setBoth: (state, { payload }: OpenPayloadAction) => {
            state.drawer = payload.open;
            state.collapsable = payload.open;
        }
    }
});

export const { setDrawer, setCollapsable, setBoth } = sidenavSlice.actions;
export const selectSidenav = (state: RootState) => state;
