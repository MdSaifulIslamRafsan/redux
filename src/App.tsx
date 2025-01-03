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
      <button onClick={()=>handelIncrement(5)}>increment + 1</button>
      <button onClick={()=>handelIncrement(5)}>increment + 5</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>decrement - 1</button>
    </>
  );
}

export default App;
