import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import taskReducer from "./features/task/taskSlice"
import userReducer from "./features/user/userSlice"
import logger from "./middlewares/logger";
import { taskApi } from "./api/taskApi";
export const store = configureStore({
    reducer : {
        counter : counterReducer,
        todo : taskReducer,
        user : userReducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat([taskApi.middleware , logger])
    
})

export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
