import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
interface IInitialState{
    tasks : ITask[],
    filter : "All" | "High" | "Medium" | "Low" ;
}

type TDraftTask = Pick<ITask , "title" | "description" | "dueDate" | "priority">

const createTask = (task : TDraftTask) : ITask => {
   // const id = "100" + (state.tasks.length + 1);
  const id = uuidv4();
  const isCompleted = false;
  return {id , isCompleted , ...task}
}

const initialState : IInitialState = {
  tasks: [
  
  ],
  filter : "All"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state , action : PayloadAction<ITask>) => {
     const taskData = createTask(action.payload);
        state.tasks.push(taskData);
    },
    ToggleCompleteState : (state , action : PayloadAction<string>) => {
      state.tasks.forEach(task => {
        if(task.id === action.payload){
          task.isCompleted = !task.isCompleted
        }
      })
    },

    DeletedTask : (state , action : PayloadAction<string>) =>{
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }



  },

});

export const selectTask = (state : RootState) => {
    return state.todo.tasks;
}
export const filterTask = (state : RootState) => {
    return state.todo.filter;
}

export const {addTask, ToggleCompleteState , DeletedTask} = taskSlice.actions;

export default taskSlice.reducer;
