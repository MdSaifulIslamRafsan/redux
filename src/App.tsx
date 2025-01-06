import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/counter/hooks";

function App() {
  const count = useAppSelector(state => state.counter.value);
const dispatch = useAppDispatch();

  const handelIncrement = (value : number) => {
    dispatch(increment(value))
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }



  return (
    <>
      <Button className="mr-4" onClick={()=>handelIncrement(1)}>increment + 1</Button>
      <Button onClick={()=>handelIncrement(5)}>increment + 5</Button>
      <h1>{count}</h1>
      <Button onClick={handleDecrement}>decrement - 1</Button>
    </>
  );
}

export default App;
