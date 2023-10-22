import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, SetCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function stepless() {
    setStep((s) => s - 1);
  }
  function stepmore() {
    setStep((s) => s + 1);
  }

  function handleLess() {
    SetCount((s) => s - step);
  }
  function handleMore() {
    SetCount((s) => s + step);
  }

  return (
    <>
      <button onClick={stepless}>Less</button>;<h1>step:{step}</h1>
      <button onClick={stepmore}>More</button>;<p>{step}</p>
      {/* 
      
      */}
      <button onClick={handleLess}>Less</button>;<h1>Count:{count}</h1>
      <button onClick={handleMore}>More</button>;<p>{count}</p>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days fromm today is`
          : `${Math.abs(count)} days age was`}
      </span>
      <span>{date.toDateString()}</span>
    </>
  );
}
