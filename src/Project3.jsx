import { Children, useState } from "react";
import "./Project3.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Project3() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((current) => !current)}
      >
        &times;{" "}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={1}>{messages[step - 1]}</StepMessage>
          
          <div className="buttons">
            <Button
              color="#fff"
              onClick={handlePrevious}
              backgroundColor="#7950f2"
            >
              <span>👈</span>Previous
            </Button>

            <Button color="#fff" onClick={handleNext} backgroundColor="#7950f2">
              {" "}
              Next 👉
            </Button>
          </div>
        </div>
        
      )}
    </>
  );
}


function StepMessage({ children, step }) {
  return (
    <>
      <h3>Step {step}</h3>
      <p className="message">{children}</p>;
    </>
  );
}

function Button({ backgroundColor, color, children, onClick }) {
  return (
    <button
      style={{
        backgroundColor,
        color,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
