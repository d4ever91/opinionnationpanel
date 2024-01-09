import { PayloadAction,createSlice } from "@reduxjs/toolkit";

interface Loading {
  isLoading:boolean
}
const initialState : Loading = {
    isLoading:false
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        load(state, action: PayloadAction<Loading>) {
            state = action.payload
            return state
        },
    },
});

export const { load } = loadingSlice.actions;
export default loadingSlice.reducer;