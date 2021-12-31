import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  TOGGLE_COUNTER,
} from "../actions/actionTypes";

const initialState = {
  counter: 0,
  showCounter: true,
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case TOGGLE_COUNTER: {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }

    default:
      return state;
  }
};

export default CounterReducer;
