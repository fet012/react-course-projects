import { useState } from "react";
import "./textExpander.css";

export default function Texts() {
  return (
    <div>
      <TextExpander className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, spac travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander
        colllapsedNumwords={90}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        className="box"
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, spac travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander expanded={true} className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, spac travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  colllapsedNumwords = 50,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  buttonColor ="1f09cd",
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children.split("").slice(0, colllapsedNumwords).join("") + "....";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
   
    marginLeft: "6px",
    color: buttonColor,  
  };
  return (
    <div className={className}>
      <span>
        {displayText}
        <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </span>
    </div>
  );
}
