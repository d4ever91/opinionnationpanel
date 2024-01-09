import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import { Module } from "@/lib/constants/module";

export interface ModulePayload  {
  isLoading?:boolean,
  modules: Module[];
}

const initialState:ModulePayload = {
  isLoading:true,
  modules:[]
}

const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
       get(state, action: PayloadAction<ModulePayload>) {
            state = {...action.payload,isLoading:false }
            return state
       },
    },
});

export const { get } = moduleSlice.actions;
export default moduleSlice.reducer;