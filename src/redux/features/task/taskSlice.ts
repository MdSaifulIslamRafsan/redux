import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState{
    task : ITask[]
}

const initialState : IInitialState = {
  task: [
    {
      id: "asddfas",
      title: "Initialize Frontend",
      description: "create home page, and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

// export const {} = taskSlice.actions;

export default taskSlice.reducer;
