// Button.tsx
import React from "react";
import styles from "/src/components/Button/Button.module.css"; // Import the styles


const Button: React.FC = () => {
  return <button className={styles.button}>Login</button>;
};

export default Button;