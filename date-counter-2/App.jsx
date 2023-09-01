import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);
  //const [today,setToday] = useState(new Date().toDateString());
  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <div>
      <p>Steps : {steps}</p>
      <input
        type="range"
        min="1"
        max="10"
        value={steps}
        onChange={(e) => setSteps(Number(e.target.value))}
      />
      <br />
      <button onClick={() => setCount((currCount) => currCount - steps)}>
        -
      </button>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(Number(e.target.value));
        }}
      />
      <button onClick={() => setCount((currCount) => currCount + steps)}>
        +
      </button>
      <br />
      <p>
        {count === 0
          ? `Today is `
          : count > 0
          ? `${count} day from today is `
          : `${Math.abs(count)} day ago from today is `}
        {today.toDateString()}
      </p>
      <br />
      <button
        onClick={() => {
          setCount(0);
          setSteps(1);
        }}
      >
        Reset All
      </button>
    </div>
  );
}
