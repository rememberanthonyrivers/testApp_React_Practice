import React from "react";
import styles from "./RadioComponent.module.css";

const RadioComponent: React.FC = () => {
  return (
    <div className={styles.radio_wrapper}>
      <h2>Release Method</h2>

      <div className="top-option">
        <input
          type="radio"
          id="instantAccess"
          name="releaseMethod"
          defaultChecked
        ></input>
        <div>
          <label htmlFor="instantAccess">Instant Access</label>
          <p>Allow any user to claim this product.</p>
        </div>
      </div>

      <div className="bottom-option">
        <input type="radio" id="waitlist" name="releaseMethod"></input>
        <div>
          <label htmlFor="waitlist">Waitlist</label>
          <p>
            Approve users off of a waitlist before they can claim this product
          </p>
        </div>
      </div>
    </div>
  );
};

export default RadioComponent;
