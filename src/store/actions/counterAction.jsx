export { increment } from "../reducers/counterSlice";

import { decrement } from "../reducers/counterSlice";

export const asyncDecrement = (value) => async (dispatch, getState) => {
  try {
    setTimeout(() => {
      dispatch(decrement(value));
    }, 1000);
  } catch (err) {
    console.log(err);
  }
};
