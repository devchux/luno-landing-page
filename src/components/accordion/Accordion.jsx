import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!expanded);

  return (
    <div className={`accordion ${expanded ? "animate" : ""}`}>
      <div
        className={`title flex justify-between items-center py-4 ${
          expanded ? "" : "hover:bg-gray-100"
        } pr-6 cursor-pointer`}
        onClick={toggle}
      >
        <span className="font-semibold text-primary text-lg w-10/12">{title}</span>
        <span
          className={`accordion-carret ${expanded ? "is-expanded" : ""}`}
        ></span>
      </div>
      <div className={expanded ? "show" : "body"}>
        <div className="text-base">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
