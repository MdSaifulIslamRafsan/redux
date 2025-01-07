import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";

const TaskCard = ({ task }: { task: ITask }) => {
  const { description, title, priority } = task;
  console.log(task);
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
        </div>
        <div className="flex gap-3 items-center">
          <Button>Button</Button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
