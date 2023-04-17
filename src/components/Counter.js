import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showcounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increseby5Handler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.showCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increseby5Handler}>increment 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
