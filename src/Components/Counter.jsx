import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function addValue() {
    if (count >= 0 && count < 10) {
      setCount(count + 1);
    }
  }
  function removeValue() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <>
      <div className="counterContainer">
        <h1>Counter</h1>
        <div className="counter">{count}</div>

        <button className="subBtn" onClick={removeValue}>
          -
        </button>
        <button className="plusBtn" onClick={addValue}>
          +
        </button>
      </div>
    </>
  );
}
