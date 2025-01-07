import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { useAppDispatch, useAppSelector } from "@/redux/features/counter/hooks";
import { filterTask, updateFilter } from "@/redux/features/task/taskSlice";


const Tasks = () => {
  const tasks = useAppSelector(filterTask);
  const dispatch = useAppDispatch();

  const handleTaskFilter = (value : string) => {
    dispatch(updateFilter(value as "High" | "Medium" | "Low" | "All"));
  }


  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>
       {/*  <Tabs defaultValue="All">
          <TabsList>
            <TabsTrigger onClick={()=> dispatch(updateFilter("All"))} value="All">All</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=> dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
          </TabsList>
        </Tabs> */}
        <Tabs onValueChange={handleTaskFilter} defaultValue="All">
          <TabsList>
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-5 my-5">
        {tasks?.map((task) => (
          <TaskCard key={task?.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
