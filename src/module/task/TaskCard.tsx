import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/features/counter/hooks";
import { DeletedTask, ToggleCompleteState } from "@/redux/features/task/taskSlice";
import { ITask } from "@/types";
import { EditTaskModal } from "./EditTaskModal";
import { selectUser } from "@/redux/features/user/userSlice";

const TaskCard = ({ task }: { task: ITask }) => {
  const { description, title, priority , isCompleted , assignedTo} = task;
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);
  const assignUser = users?.find(user => user?.id === assignedTo);

  const handleCompleteToggle = () => {
    dispatch(ToggleCompleteState(task?.id))
  };

  const handleDeletedTask  = () => {
   dispatch(DeletedTask(task?.id))
  }


  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex gap-2">
            <div className={cn("size-3 mt-2 rounded-full", {
              "bg-green-500" : priority === "High",
              "bg-yellow-500" : priority === "Medium",
              "bg-red-500" : priority === "Low",
            })}></div>
            <h1 className={cn({
              "line-through" : isCompleted
            })}>{title}</h1>
          </div>
          <p className={cn({
            "line-through" : isCompleted
          })}>{description}</p>
          <p className={cn({
            "line-through" : isCompleted
          })}>assign to : {assignUser?.name || "No One"}</p>
        <div className={cn({
          "text-green-700": isCompleted,
          "text-gray-500": !isCompleted,
        })}>
          isCompleted :{
            isCompleted ? "yes" : "no"
          }
        </div>
        </div>
        <div className="flex gap-3 items-center">
          {task && <EditTaskModal task={task}></EditTaskModal>}
          <Button onClick={handleDeletedTask} className="bg-red-600 hover:bg-red-700">Delete</Button>
          <input checked={isCompleted} onClick={handleCompleteToggle} type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
