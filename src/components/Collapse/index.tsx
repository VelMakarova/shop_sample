import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

interface CollapseProps {
  title: string;
  content: string | undefined;
}

const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenClass = isOpen ? "is-open" : "";

  return (
    <div className={`collapse ${isOpenClass}`}>
      <div className="collapse-header">
        <span className="collapse-title">{title}</span>
        <button
          type="button"
          className="collapse-trigger has-icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaChevronDown />
        </button>
      </div>
      <div className="collapse-dropdown">
        <div className="collapse-dropdown-content">{content}</div>
      </div>
    </div>
  );
};

export default Collapse;
