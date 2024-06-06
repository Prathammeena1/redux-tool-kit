import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/slice/counterSlice";

const App = () => {
  const { value } = useSelector((store) => store.counterSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Value : {value}</div>
      <button onClick={() => dispatch(increment(1))}>increment</button>
    </div>
  );
};

export default App;
