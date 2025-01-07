import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { useAppSelector } from "@/redux/features/counter/hooks";
import {  selectTask } from "@/redux/features/task/taskSlice";

const Tasks = () => {
const tasks = useAppSelector(selectTask);
    return (
        <div className="max-w-7xl mx-auto px-5">
           <div className="flex justify-between items-center">
           <h1>Tasks</h1>
           <AddTaskModal></AddTaskModal>
           </div>
            <div className="space-y-5 my-5">
                {
                    tasks?.map(task => <TaskCard key={task?.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default Tasks;