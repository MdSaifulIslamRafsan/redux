import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from '@/types';

interface IInitialState  {
    users : IUser[]
}

const initialState : IInitialState  = {
  users: [
    {
      name: "Md Saiful Islam",
      id: "42354235-dfgtert",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUser = (state : RootState) => {
    return state.user.users;
  };



// export const {} = userSlice.actions;

export default userSlice.reducer;
