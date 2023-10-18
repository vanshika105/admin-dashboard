import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Last 30 days");

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const optionClass = "block px-2 py-1 text-xs text-gray-500 hover:bg-gray-100";

  return (
    <div className="relative inline-block text-left bg-gray-50 rounded-md">
      <div className="flex items-center" onClick={toggleDropdown}>
        <button className="rounded-md text-gray-400 hover:bg-gray-100 text-11 p-2">
          {selectedOption}
        </button>
        <span
          className={`p-2 text-gray-600 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          <FiChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="py-1">
            <a
              href="#"
              className={`${optionClass} ${
                selectedOption === "Last 30 days" ? "bg-gray-100" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                selectOption("Last 30 days");
              }}
            >
              Last 30 days
            </a>
            <a
              href="#"
              className={`${optionClass} ${
                selectedOption === "Last 15 days" ? "bg-gray-100" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                selectOption("Last 15 days");
              }}
            >
              Last 15 days
            </a>
            <a
              href="#"
              className={`${optionClass} ${
                selectedOption === "Last week" ? "bg-gray-100" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                selectOption("Last week");
              }}
            >
              Last week
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
