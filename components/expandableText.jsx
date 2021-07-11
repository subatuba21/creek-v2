import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

export default function ExpandableText({
  content: [elements, hiddenElements],
}) {
  const [expanded, setExpanded] = useState(false);

  const hiddenElementsStyle = {
    display: expanded ? "block" : "none",
  };

  return (
    <div>
      <div>{elements}</div>

      <div style={hiddenElementsStyle}>{hiddenElements}</div>

      <div className="expandButtonContainer">
        <FaChevronCircleDown
          onClick={() => setExpanded(!expanded)}
        ></FaChevronCircleDown>
      </div>
    </div>
  );
}
