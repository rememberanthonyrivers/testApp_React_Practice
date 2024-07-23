// Button.tsx
import React from "react";
import styles from "/src/components/Button/Button.module.css"; // Import the styles

// interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

const Button: React.FC = () => {
  return <button className={styles.button}>Click me!</button>;
};

export default Button;