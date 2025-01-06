import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState{
    tasks : ITask[],
    filter : "All" | "High" | "Medium" | "Low" ;
}

const initialState : IInitialState = {
  tasks: [
    {
      id: "asddfas",
      title: "Initialize Frontend",
      description: "create home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter : "All"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},

});

export const selectTask = (state : RootState) => {
    return state.todo.tasks;
}
export const filterTask = (state : RootState) => {
    return state.todo.filter;
}

// export const {} = taskSlice.actions;

export default taskSlice.reducer;
