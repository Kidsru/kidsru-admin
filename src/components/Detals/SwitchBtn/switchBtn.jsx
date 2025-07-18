import { useState, useEffect } from "react";
import styles from "./switchBtn.module.css";

const SwitchButton = ({ on = false, isRight, onClick }) => {
  const [isOn, setIsOn] = useState(on);

  useEffect(() => {
    setIsOn(on);
  }, [on]);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onClick && onClick(newState);
  };

  return (
    <div
      className={`${styles.switch} ${isOn ? styles.on : styles.off}`}
      style={{ margin: !isRight ? "0 auto" : "" }}
      onClick={handleToggle}
    >
      <div className={styles.circle}>
        {isOn && <span className={styles.check}>✔</span>}
      </div>
    </div>
  );
};

export default SwitchButton;
