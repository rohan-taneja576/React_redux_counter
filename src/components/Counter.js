import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  toggleCounter,
} from "../store/actions/counterActions";
import classes from "./counter.module.css";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(counter, show, isAuthenticated);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementCounter());
  };
  const decrementHandler = () => {
    dispatch(decrementCounter());
  };
  const toggleHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <div className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </div>
  );
};

export default Counter;
