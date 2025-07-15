import { useState } from "react";
import styles from "./switchBtn.module.css";

const SwitchButton = ({on}) => {
  const [isOn, setIsOn] = useState(on);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div
      className={`${styles.switch} ${isOn ? styles.on : styles.off}`}
      onClick={handleToggle}
    >
      <div className={styles.circle}>
        {isOn && <span className={styles.check}>✔</span>}
      </div>
    </div>
  );
};

export default SwitchButton;
