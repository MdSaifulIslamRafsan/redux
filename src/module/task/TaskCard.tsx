import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/features/counter/hooks";
import { DeletedTask, ToggleCompleteState } from "@/redux/features/task/taskSlice";
import { ITask } from "@/types";

const TaskCard = ({ task }: { task: ITask }) => {
  const { description, title, priority , isCompleted} = task;
  const dispatch = useAppDispatch();
  console.log({isCompleted});

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
            <h1 className="">{title}</h1>
          </div>
          <p>{description}</p>
        <div className={cn("task-status" , {
          "text-green-700": isCompleted,
          "text-gray-500": !isCompleted,
        })}>
          isCompleted :{
            isCompleted ? "yes" : "no"
          }
        </div>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={handleDeletedTask} className="bg-red-600 hover:bg-red-700">Delete</Button>
          <input checked={isCompleted} onClick={handleCompleteToggle} type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
