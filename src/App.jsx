import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDecrement, increment } from "./store/actions/counterAction";

const App = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counterSlice);
  const increaseHandler = () => {
    dispatch(increment(value + 1));
  };
  const decreaseHandler = () => {
    dispatch(asyncDecrement(value - 1));
  };

  return (
    <div>
      <div>{value}</div>
      <button onClick={increaseHandler}>increase by 1</button>
      <button onClick={decreaseHandler}>decrease async by 1</button>
    </div>
  );
};

export default App;
