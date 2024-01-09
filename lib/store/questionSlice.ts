import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import { Question } from "../constants/question";

export interface QuestionPayload  {
  isLoading?:boolean,
  questions?:Question[];
}

const initialState:QuestionPayload = {
  isLoading:true,
  questions:[]
}

const categorySlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
       get(state, action: PayloadAction<Question[]>) {
            state = { questions:action.payload,isLoading:false }
            return state
       },
    },
});

export const { get } = categorySlice.actions;
export default categorySlice.reducer;