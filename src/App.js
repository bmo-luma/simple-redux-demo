import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addAmount, reset } from "./redux/counter";

function App() {
  const count = useSelector((state) => state.counterReducer.count);
  const [value, setValue] = useState(0);
  const valueAsNumber = Number(value) || 0;
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    console.log(increment());
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    console.log(decrement);
    dispatch(decrement());
  };

  const handleVariableAmount = () => {
    console.log(valueAsNumber);
    console.log(addAmount(valueAsNumber));
    dispatch(addAmount(valueAsNumber));
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <button onClick={handleDecrementClick}>-</button>
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleVariableAmount}>Add</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default App;
