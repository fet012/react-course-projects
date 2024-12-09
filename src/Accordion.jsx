import { children, useState } from "react";
import "./Accordion-style.css";

const faqs = [
  {
    title: "Are you a React developer ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam hic saepe minima pariatur animi suscipit consequuntur sequi illum dolor quas numquam, est sit necessitatibus facilis perspiciatis laudantium. Numquam, architecto",
  },
  {
    title: "Do you watch Jonas videos ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam hic saepe minima pariatur animi suscipit consequuntur sequi illum dolor quas numquam, est sit necessitatibus facilis perspiciatis laudantium. Numquam, architecto",
  },
  {
    title: "Are you living in Nigeria ?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam hic saepe minima pariatur animi suscipit consequuntur sequi illum dolor quas numquam, est sit necessitatibus facilis perspiciatis laudantium. Numquam, architecto",
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Benefits of React:"
        num={3}
        key="Benefits"
      >
        <p>Allow frontend developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ curOpen, num, title, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num``);
  }
  return (
    <>
      <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"} </p>
        {isOpen && <div className="content-box">{children}</div>}
      </div>
      ;
    </>
  );
}
