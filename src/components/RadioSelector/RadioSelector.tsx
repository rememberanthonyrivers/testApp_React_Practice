import React, { useState } from "react";
import styles from "./RadioSelector.module.css";

const RadioSelector: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("instantAccess");

  return (
    <div className={styles.radio_wrapper}>
      <h2>Release Method</h2>
      <div
        className={`${styles.radio_option} ${
          selectedOption === "instantAccess" ? styles.radio_option_selected : ""
        }`}
      >
        <input
          type="radio"
          id="instantAccess"
          name="releaseMethod"
          checked={selectedOption === "instantAccess"}
          onChange={() => setSelectedOption("instantAccess")}
        />
        <label htmlFor="instantAccess">Instant Access</label>
        <p>Allow any user to claim this product.</p>
      </div>
      <div
        className={`${styles.radio_option} ${
          selectedOption === "waitlist" ? styles.radio_option_selected : ""
        }`}
      >
        <input
          type="radio"
          id="waitlist"
          name="releaseMethod"
          checked={selectedOption === "waitlist"}
          onChange={() => setSelectedOption("waitlist")}
        />
        <label htmlFor="waitlist">Waitlist</label>
        <p>
          Approve users off of a waitlist before they can claim this product
        </p>
      </div>
    </div>
  );
};

export default RadioSelector;
