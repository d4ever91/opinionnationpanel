import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@/lib/constants/user";

export interface UserPayload {
  isLoading?: boolean,
  users?: User[];
  user?: User;
  meta?: any
}

const initialState: UserPayload = {
  isLoading: false,
  users: [],
  user: {},
  meta: { total: 0, limit: 0, pageNo: 1 },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    load(state, action: PayloadAction<boolean>) {
      state = { ...state, isLoading: action.payload }
      return state
    },
    get(state, action: PayloadAction<UserPayload>) {
      state = { users: action.payload.users, meta: action.payload.meta, isLoading: false }
      return state
    },
    single(state, action: PayloadAction<User>) {
      state = { ...state, user: action.payload, isLoading: false }
      return state
    },
    add(state, action: PayloadAction<User>) {
      state = { users: [...state.users, action.payload ], isLoading: false }
      return state
    },
    update(state, action: PayloadAction<User>) {
      state = { ...state,users: [ ...state.users.filter(user => user._id !== action.payload._id ), action.payload], isLoading: false }
      return state
    },
    remove(state, action: PayloadAction<User>) {
      state = { users: state.users.filter(user => user._id !== action.payload._id), meta: { ...state.meta, total: state.meta.total - 1 }, isLoading: false }
      return state
    },
  },
});

export const { load, single, get, add, update, remove } = userSlice.actions;
export default userSlice.reducer;