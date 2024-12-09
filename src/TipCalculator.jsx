import { useState } from "react";
import "./TipCalculator.css";

export default function Calculator() {
  const [input, setInput] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const calc = input * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setInput(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="container">
      <h2 className="title">TIP GENERATOR</h2>
      <BillInput input={input} onSetInput={setInput} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like service? :
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service? :
      </SelectPercentage>
      <Output input={input} result={calc} />
      <ResetBtn onReset={handleReset} />
    </div>
  );
}

function BillInput({ input, onSetInput }) {
  return (
    <div className="input">
      <h1>How much was the bill? :</h1>
      <input
        type="number"
        placeholder="input the bill here..."
        value={input}
        onChange={(e) => onSetInput(Number(e.target.valueAsNumber || 0))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="input">
      <h1>{children}</h1>

      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (25%)</option>
        <option value="10">It was good(50%)</option>
        <option value="20">Absolutely amazing(100%)</option>
      </select>
    </div>
  );
}

function Output({ input, result }) {
  return (
    <>
      <p>Amount: ${input} (Normal amount) + ${result} (Tip
      for good services)</p>
      <p>
        Total amount: You're to pay <span className="price">${input + result}</span> in total. 
      </p>
    </>
  );
}

function ResetBtn({ onReset }) {
  return (
    <button className="button" onClick={onReset}>
    
      Clear
    </button>
  );
}
