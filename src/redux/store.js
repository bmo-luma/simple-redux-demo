// Add your store here.
import { createStore, combineReducers } from "redux";

const INITIAL_COUNTER_STATE = {
  count: 0,
};

// sample action:  {type: "DECREMENT"}

const counterReducer = (state = INITIAL_COUNTER_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const INITIAL_LOGIN_STATE = {
  status: false,
};

const loginReducer = (state = INITIAL_LOGIN_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allReducers = combineReducers({
  counterReducer: counterReducer,
  loginReducer: loginReducer,
});

export const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

myStore.subscribe(() => console.log(myStore.getState()));

myStore.dispatch({ type: "INCREMENT", payload: 1 });
