import React from "react";
import "./Dropdown.module.css";

const Dropdown: React.FC = () => {
  return (
    <div className="category-selector">
      <h1>Select a category</h1>
      <p>Pick a category that fits your store</p>
      <div className="category-select">
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>

        <button>+</button>
      </div>
    </div>
  );
};

export default Dropdown;
