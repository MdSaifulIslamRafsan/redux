import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/types";
import { v4 as uuidv4 } from "uuid";
interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [],
};

type TDraftUser = Pick<IUser, "name">;

const createUser = (user: TDraftUser): IUser => {
  const id = uuidv4();
  return { id, ...user };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action?.payload);
      state.users.push(userData);
    },
    DeleteUser: (state, action: PayloadAction<string>) => {
      state.users = state?.users?.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export const { DeleteUser, AddUser } = userSlice.actions;

export default userSlice.reducer;
