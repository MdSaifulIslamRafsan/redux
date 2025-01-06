import { useAppSelector } from "@/redux/features/counter/hooks";
import { filterTask, selectTask } from "@/redux/features/task/taskSlice";

const Tasks = () => {
const tasks = useAppSelector(selectTask)
const filter = useAppSelector(filterTask)
console.log(tasks)
console.log(filter)
    return (
        <div>
            <h1>this is task page</h1>
        </div>
    );
};

export default Tasks;