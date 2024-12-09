import { useState } from "react";
import "./dateCounter.css";
function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date("July 24 2024");
  date.setDate(date.getDate() + count);

  function plusStep() {
    if (step >= 0) {
      setStep((s) => s + 1);
    }
  }
  function minusStep() {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  }
  function addCount() {
    return setCount((c) => (c += step));
  }
  function minusCount() {
    return setCount((c) => (c -= step));
  }
  return (
    <>
      <div className="dateCounter">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <div className="step">
          <button className="button" onClick={minusStep}>
            -
          </button>
          <p>STEPS: {step}</p>
          <button className="button" onClick={plusStep}>
            +
          </button>
        </div>

        <div className="step">
          <button className="button" onClick={minusCount}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))} className="inputt"
          />
          <button className="button" onClick={addCount}>
            +
          </button>
        </div>

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? ` ${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
export default Counter;
