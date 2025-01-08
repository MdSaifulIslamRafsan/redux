import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
interface IInitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

type TDraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo">;

const createTask = (task: TDraftTask): ITask => {
  // const id = "100" + (state.tasks.length + 1);
  const id = uuidv4();
  const isCompleted = false;
  return { id, isCompleted, ...task };
};

const initialState: IInitialState = {
  tasks: [],
  filter: "All",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    ToggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },

    DeletedTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    EditTask: (state, action: PayloadAction<ITask>) => {
      /*  state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          if (action.payload.description) {
            task.description = action.payload.description;
          }
         if (action.payload.dueDate) {
            task.dueDate = action.payload.dueDate;
          }
         if (action.payload.priority) {
            task.priority = action.payload.priority;
          }
         if (action.payload.title) {
            task.title = action.payload.title;
          }
       
        }
          
        }); */
      // const { id, ...updates } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload?.id ? action.payload : task
      );
    },
    updateFilter: (
      state,
      action: PayloadAction<"High" | "Medium" | "Low" | "All">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const filterTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "High") {
    return state.todo.tasks?.filter(task => task.priority === "High");
  } else if (filter === "Medium") {
    return state.todo.tasks?.filter(task => task.priority === "Medium");
  } else if (filter === "Low") {
    return state.todo.tasks?.filter(task => task.priority === "Low");
  } else {
    return state.todo.tasks;
  }
};

export const {
  addTask,
  ToggleCompleteState,
  DeletedTask,
  EditTask,
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
