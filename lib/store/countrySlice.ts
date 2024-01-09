import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import { Country } from "@/lib/constants/country";

export interface CountryPayload  {
  isLoading?:boolean,
  countries?:Country[];
}

const initialState:CountryPayload = {
  isLoading:true,
  countries:[]
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
       get(state, action: PayloadAction<CountryPayload>) {
            state = {...action.payload,isLoading:false }
            return state
       },
    },
});

export const { get } = countrySlice.actions;
export default countrySlice.reducer;