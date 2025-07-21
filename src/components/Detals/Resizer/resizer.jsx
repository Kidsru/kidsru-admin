import { ReactComponent as ResizerIcon } from "../../../assets/icon/resizer.svg";
import styles from "./resizer.module.css";

function Resizer({ onMouseDown, onTouchStart, style }) {
  return (
    <button
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={styles.wrapper}
      style={style}
    >
      <ResizerIcon />
    </button>
  );
}

export default Resizer;
