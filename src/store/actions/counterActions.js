import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  TOGGLE_COUNTER,
} from "./actionTypes";

export const incrementCounter = () => {
  return { type: INCREMENT_COUNTER };
};

export const decrementCounter = () => {
  return { type: DECREMENT_COUNTER };
};

export const toggleCounter = () => {
  return { type: TOGGLE_COUNTER };
};
