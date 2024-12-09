import { useState } from "react";
import "./flashcards.css";
const questions = [
  {
    id: 3457,
    question: " What Language is React based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: " What are the building blocks of React apps",
    answer: " Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax used to describe UI in React",
    answer: "JSX",
  },
  {
    id: 1297,
    question: " How to pass data from the parent to child component? ",
    answer: " Props",
  },
  {
    id: 9103,
    question: "How to give components memory? ",
    answer: "useState hook",
  },
  {
    id: 2802,
    question:
      " What do we call an input element that is completely synchronized with react ",
    answer: "Controlled elements",
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((que) => (
        <div
          key={que.id}
          className={que.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(que.id)}
        >
          <p>{que.id === selectedId ? que.answer : que.question}</p>
        </div>
      ))}
    </div>
  );
}

export default Flashcards;
