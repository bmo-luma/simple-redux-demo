import "./App.css";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actionCreators";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  const handleIncrementClick = () => {
    // setCount(count + 1);
    dispatch(increment(1));
  };

  const handleDecrementClick = () => {
    // setCount(count - 1);
    dispatch(decrement(1));
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
      </div>
      <div>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default App;
