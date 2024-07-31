import React from "react";
import "./RadioComponent.module.css";

const RadioComponent: React.FC = () => {
  return (
    <div>
      <h2>Release Method</h2>
      <div>
        <input
          type="radio"
          id="instantAccess"
          name="releaseMethod"
          checked
        ></input>
        <label>Instant Access</label>
        <p>Allow any user to claim this product.</p>
      </div>
      <div>
        <input type="radio" id="waitlist" name="releaseMethod"></input>
        <label>Waitlist</label>
        <p>
          Approve users off of a waitlist before they can claim this product
        </p>
      </div>
    </div>
  );
};

export default RadioComponent;
