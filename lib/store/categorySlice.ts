import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import { Category } from "@/lib/constants/category";

export interface CategoryPayload  {
  isLoading?:boolean,
  category?:Category,
  categories?:Category[];
}

const initialState:CategoryPayload = {
  isLoading:true,
  category:{},
  categories:[]
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
       get(state, action: PayloadAction<CategoryPayload>) {
            state = {...action.payload,isLoading:false }
            return state
       },
       single(state, action: PayloadAction<Category>) {
        state = {categories:[], category :action.payload,isLoading:false }
        return state
   },
    },
});

export const { get,single } = categorySlice.actions;
export default categorySlice.reducer;